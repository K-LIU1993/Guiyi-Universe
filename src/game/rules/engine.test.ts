import { describe, expect, it } from 'vitest';
import { applyAction, createInitialState, migrateSave, replayEventLog } from './engine';
import type { ActId, Condition, EvidenceRelationKind, RuleAction, RuleResult, SaveDocument, Source } from './engine';

function makeDeps() {
  const counters: Record<string, number> = {};
  return {
    nextId: (prefix: string) => {
      counters[prefix] = (counters[prefix] ?? 0) + 1;
      return prefix + '_' + counters[prefix] + '_seeded';
    },
  };
}

function makeSeed() {
  const sources: Source[] = [
    { id: 'ignored-a', title: '社区时间预算调研', fetchedAt: '2026-09-01T00:00:00Z', excerpt: '受访者每周时间安排访谈摘录', isTeachingSample: true },
    { id: 'ignored-b', title: '长期投入可行性综述', fetchedAt: '2026-09-01T00:00:00Z', excerpt: '持续投入依赖稳定的每周时段', isTeachingSample: true },
    { id: 'ignored-c', title: '不同处境对照案例', fetchedAt: '2026-09-01T00:00:00Z', excerpt: '处境不同时结论适用范围收窄', isTeachingSample: true },
  ];
  const claims = [{ id: 'ignored-c1', text: '每天复盘值得长期投入', scope: '有稳定时段的成年人' }];
  const conditions: Array<Omit<Condition, 'id'>> = [
    { field: 'time.weekly_hours_plan', op: 'gte', value: 8, label: '计划每周投入不低于8小时' },
    { field: 'time.weekly_hours_actual', op: 'lte', value: 5, label: '实际每周只有不超过5小时（时间不足分支）' },
  ];
  return { sources, claims, conditions };
}

function init(seedOverride?: { conditions: Array<Omit<Condition, 'id'>> }): SaveDocument {
  const seed = makeSeed();
  return createInitialState({
    sessionId: 'sess-1',
    questionId: 'q-1',
    seed: seedOverride ? { ...seed, conditions: seedOverride.conditions } : seed,
    deps: makeDeps(),
  });
}

function startDriver(state: SaveDocument = init()) {
  const deps = makeDeps();
  const apply = (action: RuleAction): RuleResult => {
    const result = applyAction(state, action, deps);
    if (result.ok) {
      state = result.state;
      return result;
    }
    throw new Error('unexpected failure at ' + action.type + ': ' + result.error.code + ' ' + result.error.message);
  };
  return {
    apply,
    applyRaw: (action: RuleAction) => applyAction(state, action, deps),
    state: () => state,
    deps,
  };
}

const FORM_CARD = {
  tentativeJudgment: '值得投入，但需要先保证每周稳定时段',
  supportingSourceIds: [],
  applicableConditionIds: [],
  openQuestions: ['实际时间不足时如何落地'],
  revisionTriggers: ['连续两周实际投入低于5小时'],
};

function journeyTo(target: ActId): SaveDocument {
  const driver = startDriver();
  const apply = driver.apply;
  apply({ type: 'record_stance', text: '我倾向于认为值得长期投入，但担心时间不足。' });
  if (target === 'opening') return driver.state();
  apply({ type: 'advance_act' });
  const [s0, s1, s2] = driver.state().sources.map((source) => source.id);
  const claimId = driver.state().claims[0].id;
  apply({ type: 'place_commit', slot: 'description', sourceId: s0 });
  apply({ type: 'place_commit', slot: 'dependency', sourceId: s1 });
  apply({ type: 'place_commit', slot: 'generalization', sourceId: s2 });
  apply({ type: 'commit_relation', sourceId: s0, claimId, kind: 'support', note: '调研支持长期投入' });
  apply({ type: 'commit_relation', sourceId: s1, claimId, kind: 'uncertain' });
  if (target === 'structure') return driver.state();
  apply({ type: 'advance_act' });
  const c0 = driver.state().conditions[0].id;
  apply({ type: 'switch_condition', conditionId: c0 });
  if (target === 'condition') return driver.state();
  apply({ type: 'advance_act' });
  apply({ type: 'judge_counterexample', relationId: driver.state().relations[0].id, verdict: 'limit_scope' });
  if (target === 'counterexample') return driver.state();
  apply({ type: 'advance_act' });
  apply({ type: 'save_bridge' });
  if (target === 'bridge') return driver.state();
  apply({ type: 'advance_act' });
  if (target === 'next_question') apply({ type: 'form_card', card: FORM_CARD });
  return driver.state();
}

function expectError(result: RuleResult, code: string) {
  expect(result.ok).toBe(false);
  if (!result.ok) expect(result.error.code).toBe(code);
}

describe('createInitialState 与 seed ID 分配', () => {
  it('seed 按数组顺序获得 src/clm/cnd 前缀 ID，初始幕为 opening', () => {
    const state = init();
    expect(state.schemaVersion).toBe(1);
    expect(state.sources.map((source) => source.id)).toEqual(['src_1_seeded', 'src_2_seeded', 'src_3_seeded']);
    expect(state.claims.map((claim) => claim.id)).toEqual(['clm_1_seeded']);
    expect(state.conditions.map((condition) => condition.id)).toEqual(['cnd_1_seeded', 'cnd_2_seeded']);
    expect(state.taskState).toEqual({ act: 'opening', stepIndex: 0, completed: false });
    expect(state.narrativeState.visitedActs).toEqual(['opening']);
    expect(state.eventLog).toEqual([]);
    expect(state.relations).toEqual([]);
    expect(state.bridge).toEqual({ visible: false, relationIds: [] });
  });
});

describe('DoD 1: 四值证据关系提交与修订', () => {
  it('四种 kind 各自提交成功且互不相同，二值实现无法通过', () => {
    const driver = startDriver();
    driver.apply({ type: 'record_stance', text: '初始立场' });
    driver.apply({ type: 'advance_act' });
    const sourceIds = driver.state().sources.map((source) => source.id);
    const claimId = driver.state().claims[0].id;
    const kinds: EvidenceRelationKind[] = ['support', 'challenge', 'limit_scope', 'uncertain'];
    kinds.forEach((kind, index) => {
      driver.apply({ type: 'commit_relation', sourceId: sourceIds[index % sourceIds.length], claimId, kind });
    });
    const state = driver.state();
    expect(new Set(state.relations.map((relation) => relation.kind)).size).toBe(4);
    expect(state.relations.map((relation) => relation.kind)).toEqual(kinds);
    expect(state.relations.every((relation) => relation.createdBy === 'player')).toBe(true);
  });

  it('condition 幕内四值各自修订成功，事件记录 from/to', () => {
    const driver = startDriver();
    driver.apply({ type: 'record_stance', text: '初始立场' });
    driver.apply({ type: 'advance_act' });
    const sourceIds = driver.state().sources.map((source) => source.id);
    const claimId = driver.state().claims[0].id;
    const [slotA, slotB, slotC] = sourceIds;
    driver.apply({ type: 'place_commit', slot: 'description', sourceId: slotA });
    driver.apply({ type: 'place_commit', slot: 'dependency', sourceId: slotB });
    driver.apply({ type: 'place_commit', slot: 'generalization', sourceId: slotC });
    const kinds: EvidenceRelationKind[] = ['support', 'challenge', 'limit_scope', 'uncertain'];
    kinds.forEach((kind, index) => {
      driver.apply({ type: 'commit_relation', sourceId: sourceIds[index % sourceIds.length], claimId, kind });
    });
    driver.apply({ type: 'advance_act' });
    const revised: Record<EvidenceRelationKind, EvidenceRelationKind> = {
      support: 'challenge',
      challenge: 'uncertain',
      limit_scope: 'support',
      uncertain: 'limit_scope',
    };
    const results = driver.state().relations.map((relation) =>
      driver.apply({ type: 'revise_relation', relationId: relation.id, to: revised[relation.kind] }),
    );
    const state = driver.state();
    expect(state.relations.map((relation) => relation.kind)).toEqual(kinds.map((kind) => revised[kind]));
    results.forEach((result, index) => {
      if (result.ok) {
        const event = result.events[0];
        expect(event.type).toBe('relation_revised');
        if (event.type === 'relation_revised') {
          expect(event.from).toBe(kinds[index]);
          expect(event.to).toBe(revised[kinds[index]]);
        }
      }
      expect(result.ok).toBe(true);
    });
  });
});

describe('DoD 2: 三插槽占用与缺来源', () => {
  it('同一来源卡放入第二个插槽返回 SLOT_OCCUPIED，失败不改变原状态', () => {
    const driver = startDriver();
    driver.apply({ type: 'record_stance', text: '初始立场' });
    driver.apply({ type: 'advance_act' });
    const s0 = driver.state().sources[0].id;
    driver.apply({ type: 'place_commit', slot: 'description', sourceId: s0 });
    const before = JSON.parse(JSON.stringify(driver.state()));
    const result = driver.applyRaw({ type: 'place_commit', slot: 'dependency', sourceId: s0 });
    expectError(result, 'SLOT_OCCUPIED');
    expect(driver.state()).toEqual(before);
  });

  it('不同来源放入已占用插槽返回 SLOT_OCCUPIED', () => {
    const driver = startDriver();
    driver.apply({ type: 'record_stance', text: '初始立场' });
    driver.apply({ type: 'advance_act' });
    const s1 = driver.state().sources[1].id;
    const s2 = driver.state().sources[2].id;
    driver.apply({ type: 'place_commit', slot: 'dependency', sourceId: s1 });
    expectError(driver.applyRaw({ type: 'place_commit', slot: 'dependency', sourceId: s2 }), 'SLOT_OCCUPIED');
  });

  it('place_commit 与 commit_relation 引用不存在的来源返回 MISSING_SOURCE', () => {
    const driver = startDriver();
    driver.apply({ type: 'record_stance', text: '初始立场' });
    driver.apply({ type: 'advance_act' });
    const claimId = driver.state().claims[0].id;
    expectError(driver.applyRaw({ type: 'place_commit', slot: 'description', sourceId: 'src_missing' }), 'MISSING_SOURCE');
    expectError(driver.applyRaw({ type: 'commit_relation', sourceId: 'src_missing', claimId, kind: 'support' }), 'MISSING_SOURCE');
  });

  it('commit_relation 引用不存在的主张返回 INVALID_PLACEMENT', () => {
    const driver = startDriver();
    driver.apply({ type: 'record_stance', text: '初始立场' });
    driver.apply({ type: 'advance_act' });
    const s0 = driver.state().sources[0].id;
    expectError(driver.applyRaw({ type: 'commit_relation', sourceId: s0, claimId: 'clm_missing', kind: 'support' }), 'INVALID_PLACEMENT');
  });
});

describe('DoD 3: 条件切换可判定与 NOT_JUDGEABLE', () => {
  it('8h 计划与 5h 实际两个白名单字段均可切换（时间不足分支通过）', () => {
    const driver = startDriver();
    driver.apply({ type: 'record_stance', text: '初始立场' });
    driver.apply({ type: 'advance_act' });
    const [s0, s1] = driver.state().sources.map((source) => source.id);
    const claimId = driver.state().claims[0].id;
    driver.apply({ type: 'place_commit', slot: 'description', sourceId: s0 });
    driver.apply({ type: 'place_commit', slot: 'dependency', sourceId: s1 });
    driver.apply({ type: 'place_commit', slot: 'generalization', sourceId: driver.state().sources[2].id });
    driver.apply({ type: 'advance_act' });
    const [c0, c1] = driver.state().conditions.map((condition) => condition.id);
    expect(driver.state().conditions[0].value).toBe(8);
    expect(driver.state().conditions[1].value).toBe(5);
    driver.apply({ type: 'switch_condition', conditionId: c0 });
    const second = driver.apply({ type: 'switch_condition', conditionId: c1 });
    expect(second.ok).toBe(true);
    const state = driver.state();
    expect(state.eventLog.filter((event) => event.type === 'condition_switched')).toHaveLength(2);
    expect(state.taskState.completed).toBe(true);
  });

  it('白名单外字段（现实人生结论）拒绝判定并返回 NOT_JUDGEABLE', () => {
    // given 白名单外字段（测试故意违反 ConditionField 类型，验证运行时守卫）
    const badConditions = [
      ...makeSeed().conditions,
      { field: 'real_life.meaning', op: 'eq', value: '高', label: '现实人生是否美满' },
    ] as unknown as Array<Omit<Condition, 'id'>>;
    const driver = startDriver(init({ conditions: badConditions }));
    driver.apply({ type: 'record_stance', text: '初始立场' });
    driver.apply({ type: 'advance_act' });
    const [s0, s1] = driver.state().sources.map((source) => source.id);
    driver.apply({ type: 'place_commit', slot: 'description', sourceId: s0 });
    driver.apply({ type: 'place_commit', slot: 'dependency', sourceId: s1 });
    driver.apply({ type: 'place_commit', slot: 'generalization', sourceId: driver.state().sources[2].id });
    driver.apply({ type: 'advance_act' });
    const badId = driver.state().conditions[2].id;
    const result = driver.applyRaw({ type: 'switch_condition', conditionId: badId });
    expectError(result, 'NOT_JUDGEABLE');
    if (!result.ok) expect(result.error.details).toEqual({ field: 'real_life.meaning' });
    expect(driver.state().taskState.completed).toBe(false);
  });
});

describe('DoD 4: 反例幕 limit_scope 不误判为 challenge', () => {
  it('处境不同案例裁定为 limit_scope', () => {
    const state = journeyTo('counterexample');
    const judged = state.relations[0];
    expect(judged.kind).toBe('limit_scope');
    expect(judged.kind).not.toBe('challenge');
    const event = state.eventLog[state.eventLog.length - 1];
    expect(event.type).toBe('counterexample_judged');
    if (event.type === 'counterexample_judged') expect(event.verdict).toBe('limit_scope');
    expect(state.taskState.completed).toBe(true);
  });
});

describe('DoD 5: save_bridge 后仅凭 SaveDocument 重建', () => {
  it('桥可见且关系标记完整，持久化 JSON 重放恢复全部事实', () => {
    const state = journeyTo('bridge');
    expect(state.bridge.visible).toBe(true);
    expect(state.bridge.relationIds).toEqual(state.relations.map((relation) => relation.id));
    const persisted: SaveDocument = JSON.parse(JSON.stringify(state));
    const rebuilt = persisted.bridge.relationIds.map((id) => {
      const relation = persisted.relations.find((item) => item.id === id);
      expect(relation).toBeDefined();
      return relation;
    });
    expect(rebuilt).toHaveLength(2);
    expect(replayEventLog(persisted)).toEqual(persisted);
  });
});

describe('DoD 6: eventLog 重放幂等与 undo_last', () => {
  it('重放结果与原状态一致且二次重放幂等', () => {
    const state = journeyTo('next_question');
    const once = replayEventLog(state);
    expect(once).toEqual(state);
    expect(replayEventLog(once)).toEqual(once);
  });

  it('undo_last 去掉最后一条事件并确定性重放，连续撤销跨幕回退', () => {
    const state = journeyTo('next_question');
    expect(state.eventLog[state.eventLog.length - 1].type).toBe('card_formed');
    const first = applyAction(state, { type: 'undo_last' }, makeDeps());
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.events).toEqual([]);
    expect(first.state.formingCard).toBeNull();
    expect(first.state.taskState.completed).toBe(false);
    expect(first.state.eventLog).toEqual(state.eventLog.slice(0, -1));
    const second = applyAction(first.state, { type: 'undo_last' }, makeDeps());
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.state.taskState.act).toBe('bridge');
    expect(second.state.taskState.completed).toBe(true);
    expect(second.state.bridge.visible).toBe(true);
  });

  it('eventLog 为空时 undo_last 返回 NOTHING_TO_UNDO', () => {
    const state = init();
    expectError(applyAction(state, { type: 'undo_last' }, makeDeps()), 'NOTHING_TO_UNDO');
  });
});

describe('DoD 7: 幕状态机越幕动作 ACT_FORBIDDEN', () => {
  it('opening 幕拒绝结构卡与关系动作，完成判据未满足时 advance_act 被拒', () => {
    const driver = startDriver();
    expectError(driver.applyRaw({ type: 'commit_relation', sourceId: 'x', claimId: 'y', kind: 'support' }), 'ACT_FORBIDDEN');
    expectError(driver.applyRaw({ type: 'place_commit', slot: 'description', sourceId: 'x' }), 'ACT_FORBIDDEN');
    expectError(driver.applyRaw({ type: 'advance_act' }), 'ACT_FORBIDDEN');
    driver.apply({ type: 'record_stance', text: '立场' });
    expect(driver.state().taskState.completed).toBe(true);
    driver.apply({ type: 'advance_act' });
    expect(driver.state().taskState.act).toBe('structure');
  });

  it('structure 幕拒绝 judge_counterexample / revise_relation / switch_condition', () => {
    const driver = startDriver(journeyTo('structure'));
    const relationId = driver.state().relations[0].id;
    expectError(driver.applyRaw({ type: 'judge_counterexample', relationId, verdict: 'limit_scope' }), 'ACT_FORBIDDEN');
    expectError(driver.applyRaw({ type: 'revise_relation', relationId, to: 'challenge' }), 'ACT_FORBIDDEN');
    expectError(driver.applyRaw({ type: 'switch_condition', conditionId: driver.state().conditions[0].id }), 'ACT_FORBIDDEN');
  });

  it('structure 幕三插槽未满时 advance_act 被拒', () => {
    const driver = startDriver();
    driver.apply({ type: 'record_stance', text: '立场' });
    driver.apply({ type: 'advance_act' });
    const [s0] = driver.state().sources.map((source) => source.id);
    driver.apply({ type: 'place_commit', slot: 'description', sourceId: s0 });
    expectError(driver.applyRaw({ type: 'advance_act' }), 'ACT_FORBIDDEN');
  });

  it('next_question 幕为最后一幕，advance_act 无下一幕可去', () => {
    const state = journeyTo('next_question');
    expectError(applyAction(state, { type: 'advance_act' }, makeDeps()), 'ACT_FORBIDDEN');
  });
});

describe('§4.1 语义细则', () => {
  it('place_preview 零副作用：允许与拒绝都不产生事件、不改变状态', () => {
    const driver = startDriver();
    driver.apply({ type: 'record_stance', text: '立场' });
    driver.apply({ type: 'advance_act' });
    const s2 = driver.state().sources[2].id;
    const before = JSON.parse(JSON.stringify(driver.state()));
    const logBefore = driver.state().eventLog.length;
    const allowed = driver.applyRaw({ type: 'place_preview', slot: 'generalization', sourceId: s2 });
    expect(allowed.ok).toBe(true);
    if (allowed.ok) {
      expect(allowed.preview).toEqual({ allowed: true });
      expect(allowed.events).toEqual([]);
      expect(allowed.state).toBe(driver.state());
    }
    expect(driver.state()).toEqual(before);
    expect(driver.state().eventLog).toHaveLength(logBefore);
    driver.apply({ type: 'place_commit', slot: 'generalization', sourceId: s2 });
    const afterCommit = JSON.parse(JSON.stringify(driver.state()));
    const occupied = driver.applyRaw({ type: 'place_preview', slot: 'description', sourceId: s2 });
    expect(occupied.ok).toBe(true);
    if (occupied.ok) expect(occupied.preview).toEqual({ allowed: false, reason: 'SLOT_OCCUPIED' });
    const missing = driver.applyRaw({ type: 'place_preview', slot: 'description', sourceId: 'src_missing' });
    if (missing.ok) expect(missing.preview).toEqual({ allowed: false, reason: 'MISSING_SOURCE' });
    expect(driver.state()).toEqual(afterCommit);
    expect(driver.state().eventLog.filter((event) => event.type === 'slot_committed')).toHaveLength(1);
  });

  it('非 structure 幕的 place_preview 以 ACT_FORBIDDEN 理由拒绝且零副作用', () => {
    const state = init();
    const result = applyAction(state, { type: 'place_preview', slot: 'description', sourceId: 'x' }, makeDeps());
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.preview).toEqual({ allowed: false, reason: 'ACT_FORBIDDEN' });
    expect(result.ok && result.state).toBe(state);
    expect(state.eventLog).toEqual([]);
  });

  it('record_stance 空文本返回 INVALID_PLACEMENT', () => {
    const driver = startDriver();
    expectError(driver.applyRaw({ type: 'record_stance', text: '' }), 'INVALID_PLACEMENT');
    expectError(driver.applyRaw({ type: 'record_stance', text: '   ' }), 'INVALID_PLACEMENT');
    expect(driver.state().taskState.completed).toBe(false);
  });

  it('bind_scene 任何幕可用，重复 objectId 返回 SCENE_ALREADY_BOUND', () => {
    const driver = startDriver();
    driver.apply({ type: 'bind_scene', objectId: 'obj-bridge-1', role: 'mechanism', label: '桥' });
    expectError(driver.applyRaw({ type: 'bind_scene', objectId: 'obj-bridge-1', role: 'prop' }), 'SCENE_ALREADY_BOUND');
    expect(driver.state().sceneBindings).toEqual([{ objectId: 'obj-bridge-1', role: 'mechanism', label: '桥' }]);
    const inStructure = startDriver(journeyTo('structure'));
    expect(inStructure.apply({ type: 'bind_scene', objectId: 'obj-zone-2', role: 'zone' }).ok).toBe(true);
  });

  it('确认操作先产生事件并追加 eventLog，返回新状态', () => {
    const driver = startDriver();
    const result = driver.apply({ type: 'record_stance', text: '立场' });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.events).toHaveLength(1);
      expect(result.events[0]).toEqual(result.state.eventLog[result.state.eventLog.length - 1]);
    }
    expect(driver.state().narrativeState.openingStance).toBe('立场');
  });
});

describe('§6 存档迁移 migrateSave', () => {
  it('识别的 v1 形状原样返回（深拷贝）', () => {
    const state = journeyTo('bridge');
    const persisted: SaveDocument = JSON.parse(JSON.stringify(state));
    const migrated = migrateSave(persisted);
    expect(migrated).toEqual(persisted);
    if (!('ok' in migrated) || migrated.ok !== false) {
      expect((migrated as SaveDocument).schemaVersion).toBe(1);
    }
  });

  it('旧版 state.js 五步存档形状返回 SCHEMA_UNSUPPORTED', () => {
    const legacy = { steps: ['ask', 'explore', 'compare', 'form', 'share'], currentStep: 2, changes: {} };
    const result = migrateSave(legacy);
    expectError(result, 'SCHEMA_UNSUPPORTED');
  });

  it('null、标量、schemaVersion 不为 1、缺字段形状均返回 SCHEMA_UNSUPPORTED', () => {
    expectError(migrateSave(null), 'SCHEMA_UNSUPPORTED');
    expectError(migrateSave('save-string'), 'SCHEMA_UNSUPPORTED');
    expectError(migrateSave({ schemaVersion: 2, sessionId: 's' }), 'SCHEMA_UNSUPPORTED');
    expectError(migrateSave({ schemaVersion: 1, sessionId: 's' }), 'SCHEMA_UNSUPPORTED');
  });
});
