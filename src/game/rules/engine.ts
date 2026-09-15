// R-M1 规则引擎纯函数实现 —— 依据 docs/contracts/rule-engine-v1.md（冻结 1.0.0，基线 eb56899）
// 确定性约束：无 Date.now / Math.random / fetch / DOM；ID 由 deps.nextId 注入。
// 事件顺序：确认操作 → 领域事件追加 eventLog → 返回新状态；undo_last 按 eventLog 去尾确定性重放。
import type {
  ActId,
  Claim,
  Condition,
  DomainEvent,
  EvidenceRelation,
  EvidenceRelationKind,
  RuleAction,
  RuleEngineDeps,
  RuleErrorCode,
  RuleResult,
  SaveDocument,
  SlotKey,
  Source,
} from './contract';

export type {
  ActId,
  Claim,
  Condition,
  ConditionField,
  ConditionOp,
  DomainEvent,
  EvidenceRelation,
  EvidenceRelationKind,
  FormingCard,
  NarrativeState,
  RuleAction,
  RuleEngineDeps,
  RuleError,
  RuleErrorCode,
  RuleResult,
  SaveDocument,
  SceneBinding,
  SlotKey,
  Source,
  TaskState,
} from './contract';

const ACT_ORDER: readonly ActId[] = ['opening', 'structure', 'condition', 'counterexample', 'bridge', 'next_question'];

const SLOT_KEYS: readonly SlotKey[] = ['description', 'dependency', 'generalization'];

// Condition.field 白名单（§4）；白名单外一律 NOT_JUDGEABLE
const CONDITION_FIELD_WHITELIST: ReadonlySet<string> = new Set(['time.weekly_hours_plan', 'time.weekly_hours_actual']);

const RELATION_KINDS: readonly EvidenceRelationKind[] = ['support', 'challenge', 'limit_scope', 'uncertain'];

// 各幕允许的游戏动作（§5）；bind_scene / undo_last / advance_act 为管线/元动作，任何幕可用（§4.1）
const ACT_ALLOWED_ACTIONS: Record<ActId, ReadonlySet<RuleAction['type']>> = {
  opening: new Set<RuleAction['type']>(['record_stance']),
  structure: new Set<RuleAction['type']>(['place_preview', 'place_commit', 'commit_relation']),
  condition: new Set<RuleAction['type']>(['switch_condition', 'revise_relation']),
  counterexample: new Set<RuleAction['type']>(['judge_counterexample', 'revise_relation']),
  bridge: new Set<RuleAction['type']>(['save_bridge', 'revise_relation']),
  next_question: new Set<RuleAction['type']>(['form_card']),
};

// 计入幕内进度（stepIndex）的事件；scene_bound（管线）与 act_advanced（换幕）不计
const PROGRESS_EVENT_TYPES: ReadonlySet<DomainEvent['type']> = new Set([
  'relation_committed',
  'relation_revised',
  'slot_committed',
  'condition_switched',
  'counterexample_judged',
  'bridge_saved',
  'card_formed',
  'stance_recorded',
]);

function ruleError(code: RuleErrorCode, message: string, details?: unknown): RuleResult {
  return details === undefined
    ? { ok: false, error: { code, message } }
    : { ok: false, error: { code, message, details } };
}

function deepClone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function isRelationKind(value: unknown): value is EvidenceRelationKind {
  return RELATION_KINDS.some((kind) => kind === value);
}

export function createInitialState(input: {
  sessionId: string;
  questionId: string;
  seed: { sources: Source[]; claims: Claim[]; conditions: Array<Omit<Condition, 'id'>> };
  deps: RuleEngineDeps;
}): SaveDocument {
  const { nextId } = input.deps;
  // seed 的 ID 由 deps.nextId 按前缀 src/clm/cnd 依数组顺序分配，分配后不可变
  const sources = input.seed.sources.map((source) => ({ ...source, id: nextId('src') }));
  const claims = input.seed.claims.map((claim) => ({ ...claim, id: nextId('clm') }));
  const conditions = input.seed.conditions.map((condition) => ({ ...condition, id: nextId('cnd') }));
  return {
    schemaVersion: 1,
    sessionId: input.sessionId,
    questionId: input.questionId,
    sources,
    claims,
    conditions,
    relations: [],
    slots: { description: null, dependency: null, generalization: null },
    bridge: { visible: false, relationIds: [] },
    formingCard: null,
    taskState: { act: 'opening', stepIndex: 0, completed: false },
    narrativeState: { visitedActs: ['opening'] },
    sceneBindings: [],
    eventLog: [],
    savedAt: '', // 仅由持久化层写入，reducer 不产生时间
  };
}

// 各幕完成判据（§5；由 R 流实现并在用例中断言）
function isActComplete(doc: SaveDocument): boolean {
  switch (doc.taskState.act) {
    case 'opening':
      return doc.eventLog.some((event) => event.type === 'stance_recorded');
    case 'structure':
      return SLOT_KEYS.every((key) => doc.slots[key] !== null);
    case 'condition':
      return doc.eventLog.some((event) => event.type === 'condition_switched');
    case 'counterexample':
      return doc.eventLog.some((event) => event.type === 'counterexample_judged');
    case 'bridge':
      return doc.bridge.visible;
    case 'next_question':
      return doc.formingCard !== null;
  }
}

// 单个领域事件 → 状态效果；applyAction 与重放共用同一路径，保证确定性一致
function applyEventEffect(doc: SaveDocument, event: DomainEvent): void {
  switch (event.type) {
    case 'relation_committed': {
      const relation: EvidenceRelation = {
        id: event.relationId,
        sourceId: event.sourceId,
        claimId: event.claimId,
        kind: event.kind,
        createdBy: 'player',
        ...(event.note !== undefined ? { note: event.note } : {}),
      };
      doc.relations.push(relation);
      break;
    }
    case 'relation_revised': {
      const relation = doc.relations.find((item) => item.id === event.relationId);
      // 仅改 kind：relation_revised 事件不携带 note，重放必须与首次执行完全一致
      if (relation) relation.kind = event.to;
      break;
    }
    case 'slot_committed':
      doc.slots[event.slot] = event.sourceId;
      break;
    case 'condition_switched':
      // 该幕事实即事件本身，无额外状态字段
      break;
    case 'counterexample_judged': {
      const relation = doc.relations.find((item) => item.id === event.relationId);
      if (relation) relation.kind = event.verdict;
      break;
    }
    case 'bridge_saved':
      doc.bridge = { visible: true, relationIds: [...event.relationIds] };
      break;
    case 'card_formed':
      doc.formingCard = deepClone(event.card);
      break;
    case 'stance_recorded':
      doc.narrativeState.openingStance = event.text;
      break;
    case 'scene_bound':
      doc.sceneBindings.push({
        objectId: event.objectId,
        role: event.role,
        ...(event.label !== undefined ? { label: event.label } : {}),
      });
      break;
    case 'act_advanced':
      doc.taskState = { act: event.to, stepIndex: 0, completed: false };
      doc.narrativeState.visitedActs = [...doc.narrativeState.visitedActs, event.to];
      break;
  }
}

// 事件入账 + 幕进度簿记；applyAction 与重放的唯一事件入口
function commitEvent(doc: SaveDocument, event: DomainEvent): void {
  doc.eventLog.push(deepClone(event));
  applyEventEffect(doc, event);
  if (PROGRESS_EVENT_TYPES.has(event.type)) doc.taskState.stepIndex += 1;
  doc.taskState.completed = isActComplete(doc);
}

// 从任意 SaveDocument 推导零事件基态（seed 字段保留，事件派生字段清零）
function deriveBaseState(state: SaveDocument): SaveDocument {
  return {
    schemaVersion: state.schemaVersion,
    sessionId: state.sessionId,
    questionId: state.questionId,
    sources: deepClone(state.sources),
    claims: deepClone(state.claims),
    conditions: deepClone(state.conditions),
    relations: [],
    slots: { description: null, dependency: null, generalization: null },
    bridge: { visible: false, relationIds: [] },
    formingCard: null,
    taskState: { act: 'opening', stepIndex: 0, completed: false },
    narrativeState: { visitedActs: ['opening'] },
    sceneBindings: [],
    eventLog: [],
    savedAt: state.savedAt,
  };
}

// 确定性重放：仅凭 SaveDocument（seed + eventLog）重建完整状态（§4.1 重载重建）
export function replayEventLog(state: SaveDocument): SaveDocument {
  const doc = deriveBaseState(state);
  for (const event of state.eventLog) commitEvent(doc, event);
  return doc;
}

// place_preview 只读：无论允许与否都不产生事件、不改变状态（§4.1）
function placePreview(state: SaveDocument, action: Extract<RuleAction, { type: 'place_preview' }>): RuleResult {
  const reject = (reason: RuleErrorCode): RuleResult => ({ ok: true, state, events: [], preview: { allowed: false, reason } });
  if (state.taskState.act !== 'structure') return reject('ACT_FORBIDDEN');
  if (state.slots[action.slot] !== null) return reject('SLOT_OCCUPIED');
  // 同一张来源卡不可重复放入插槽
  if (SLOT_KEYS.some((key) => state.slots[key] === action.sourceId)) return reject('SLOT_OCCUPIED');
  if (!state.sources.some((source) => source.id === action.sourceId)) return reject('MISSING_SOURCE');
  return { ok: true, state, events: [], preview: { allowed: true } };
}

// undo_last：按 eventLog 去掉最后一条事件后确定性重放（§4.1）
function undoLast(state: SaveDocument): RuleResult {
  if (state.eventLog.length === 0) return ruleError('NOTHING_TO_UNDO', 'eventLog 为空，没有可撤销的事件');
  const doc = replayEventLog({ ...state, eventLog: state.eventLog.slice(0, -1) });
  return { ok: true, state: doc, events: [] };
}

export function applyAction(state: SaveDocument, action: RuleAction, deps: RuleEngineDeps): RuleResult {
  if (action.type === 'place_preview') return placePreview(state, action);
  if (action.type === 'undo_last') return undoLast(state);

  const act = state.taskState.act;
  if (action.type !== 'advance_act' && action.type !== 'bind_scene' && !ACT_ALLOWED_ACTIONS[act].has(action.type)) {
    return ruleError('ACT_FORBIDDEN', '动作 ' + action.type + ' 在幕 ' + act + ' 中不可用', { action: action.type, act });
  }

  switch (action.type) {
    case 'record_stance': {
      if (action.text.trim().length === 0) return ruleError('INVALID_PLACEMENT', '立场文本为空');
      const next = deepClone(state);
      const event: DomainEvent = { type: 'stance_recorded', text: action.text };
      commitEvent(next, event);
      return { ok: true, state: next, events: [event] };
    }
    case 'place_commit': {
      if (state.slots[action.slot] !== null) return ruleError('SLOT_OCCUPIED', '插槽 ' + action.slot + ' 已被占用');
      if (SLOT_KEYS.some((key) => state.slots[key] === action.sourceId)) {
        return ruleError('SLOT_OCCUPIED', '该来源卡已放入其他插槽');
      }
      if (!state.sources.some((source) => source.id === action.sourceId)) {
        return ruleError('MISSING_SOURCE', '来源 ' + action.sourceId + ' 不存在');
      }
      const next = deepClone(state);
      const event: DomainEvent = { type: 'slot_committed', slot: action.slot, sourceId: action.sourceId };
      commitEvent(next, event);
      return { ok: true, state: next, events: [event] };
    }
    case 'commit_relation': {
      if (!state.sources.some((source) => source.id === action.sourceId)) {
        return ruleError('MISSING_SOURCE', '来源 ' + action.sourceId + ' 不存在');
      }
      if (!state.claims.some((claim) => claim.id === action.claimId)) {
        return ruleError('INVALID_PLACEMENT', '主张 ' + action.claimId + ' 不存在');
      }
      if (!isRelationKind(action.kind)) {
        return ruleError('INVALID_PLACEMENT', 'kind 必须是 support/challenge/limit_scope/uncertain 四值之一', { kind: action.kind });
      }
      const relationId = deps.nextId('rel');
      const next = deepClone(state);
      const event: DomainEvent = {
        type: 'relation_committed',
        relationId,
        sourceId: action.sourceId,
        claimId: action.claimId,
        kind: action.kind,
        ...(action.note !== undefined ? { note: action.note } : {}),
      };
      commitEvent(next, event);
      return { ok: true, state: next, events: [event] };
    }
    case 'revise_relation': {
      const relation = state.relations.find((item) => item.id === action.relationId);
      if (!relation) return ruleError('INVALID_PLACEMENT', '证据关系 ' + action.relationId + ' 不存在');
      if (!isRelationKind(action.to)) {
        return ruleError('INVALID_PLACEMENT', '修订目标 kind 必须是四值之一', { kind: action.to });
      }
      const next = deepClone(state);
      const event: DomainEvent = { type: 'relation_revised', relationId: action.relationId, from: relation.kind, to: action.to };
      commitEvent(next, event);
      return { ok: true, state: next, events: [event] };
    }
    case 'switch_condition': {
      const condition = state.conditions.find((item) => item.id === action.conditionId);
      if (!condition) return ruleError('INVALID_PLACEMENT', '条件 ' + action.conditionId + ' 不存在');
      if (!CONDITION_FIELD_WHITELIST.has(condition.field)) {
        return ruleError('NOT_JUDGEABLE', '字段 ' + condition.field + ' 不在可判定白名单内', { field: condition.field });
      }
      const next = deepClone(state);
      const event: DomainEvent = { type: 'condition_switched', conditionId: action.conditionId };
      commitEvent(next, event);
      return { ok: true, state: next, events: [event] };
    }
    case 'judge_counterexample': {
      const relation = state.relations.find((item) => item.id === action.relationId);
      if (!relation) return ruleError('INVALID_PLACEMENT', '证据关系 ' + action.relationId + ' 不存在');
      if (!isRelationKind(action.verdict)) {
        return ruleError('INVALID_PLACEMENT', '裁定 verdict 必须是四值之一', { verdict: action.verdict });
      }
      const next = deepClone(state);
      const event: DomainEvent = { type: 'counterexample_judged', relationId: action.relationId, verdict: action.verdict };
      commitEvent(next, event);
      return { ok: true, state: next, events: [event] };
    }
    case 'save_bridge': {
      const next = deepClone(state);
      const event: DomainEvent = { type: 'bridge_saved', relationIds: state.relations.map((relation) => relation.id) };
      commitEvent(next, event);
      return { ok: true, state: next, events: [event] };
    }
    case 'form_card': {
      const next = deepClone(state);
      const event: DomainEvent = { type: 'card_formed', card: deepClone(action.card) };
      commitEvent(next, event);
      return { ok: true, state: next, events: [event] };
    }
    case 'bind_scene': {
      if (state.sceneBindings.some((binding) => binding.objectId === action.objectId)) {
        return ruleError('SCENE_ALREADY_BOUND', '场景对象 ' + action.objectId + ' 已登记');
      }
      const next = deepClone(state);
      const event: DomainEvent = {
        type: 'scene_bound',
        objectId: action.objectId,
        role: action.role,
        ...(action.label !== undefined ? { label: action.label } : {}),
      };
      commitEvent(next, event);
      return { ok: true, state: next, events: [event] };
    }
    case 'advance_act': {
      if (!state.taskState.completed) {
        return ruleError('ACT_FORBIDDEN', '当前幕 ' + act + ' 完成判据未满足，不可推进', { act });
      }
      const index = ACT_ORDER.indexOf(act);
      if (index < 0 || index >= ACT_ORDER.length - 1) {
        return ruleError('ACT_FORBIDDEN', '已是最后一幕（next_question），无下一幕', { act });
      }
      const next = deepClone(state);
      const event: DomainEvent = { type: 'act_advanced', from: act, to: ACT_ORDER[index + 1] };
      commitEvent(next, event);
      return { ok: true, state: next, events: [event] };
    }
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isV1SaveShape(raw: unknown): raw is SaveDocument {
  if (!isRecord(raw)) return false;
  if (raw.schemaVersion !== 1) return false;
  if (typeof raw.sessionId !== 'string' || typeof raw.questionId !== 'string') return false;
  if (!Array.isArray(raw.sources) || !Array.isArray(raw.claims) || !Array.isArray(raw.conditions)) return false;
  if (!Array.isArray(raw.relations)) return false;
  if (!isRecord(raw.slots)) return false;
  for (const key of SLOT_KEYS) {
    const value = raw.slots[key];
    if (typeof value !== 'string' && value !== null) return false;
  }
  if (!isRecord(raw.bridge)) return false;
  if (typeof raw.bridge.visible !== 'boolean' || !Array.isArray(raw.bridge.relationIds)) return false;
  if (raw.formingCard !== null && !isRecord(raw.formingCard)) return false;
  if (!isRecord(raw.taskState)) return false;
  if (typeof raw.taskState.act !== 'string') return false;
  if (!(ACT_ORDER as readonly string[]).includes(raw.taskState.act)) return false;
  if (typeof raw.taskState.stepIndex !== 'number') return false;
  if (typeof raw.taskState.completed !== 'boolean') return false;
  if (!isRecord(raw.narrativeState)) return false;
  if (!Array.isArray(raw.narrativeState.visitedActs)) return false;
  if (!Array.isArray(raw.sceneBindings)) return false;
  if (!Array.isArray(raw.eventLog)) return false;
  return typeof raw.savedAt === 'string';
}

// 契约张力说明：§4 冻结签名为 migrateSave(raw): SaveDocument，而 §6 要求对不认识的形状“返回
// SCHEMA_UNSUPPORTED”且 §4.1 要求错误不抛异常。按 AU 裁定：contract.ts 保持 §4 逐字不变；
// 本实现对识别的 v1 形状返回 SaveDocument，对不认识的形状（含旧版 state.js 五步推进存档）
// 返回 { ok:false, error:{ code:'SCHEMA_UNSUPPORTED', ... } }，绝不静默丢弃或就地改写旧档。
export function migrateSave(raw: unknown): SaveDocument | RuleResult {
  if (isV1SaveShape(raw)) return deepClone(raw);
  const receivedSchemaVersion = isRecord(raw) ? raw.schemaVersion : null;
  return ruleError('SCHEMA_UNSUPPORTED', '无法识别的存档形状（schemaVersion 缺失/不为 1 或结构不符），旧档按只读遗留数据处理', {
    receivedSchemaVersion: receivedSchemaVersion === undefined ? null : receivedSchemaVersion,
  });
}
