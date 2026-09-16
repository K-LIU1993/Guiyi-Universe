import { describe, expect, it } from "vitest";
import { createDivergenceSeed } from "../../content/divergenceSeed";
import { createLocalStorageAdapter } from "../persistence/localStorageAdapter";
import { readHistoricalFormingCards } from "../persistence/history";
import { applyAction, createInitialState, replayEventLog } from "./engine";

const deps = { nextId: (() => { let n = 0; return (prefix: string) => `${prefix}-${++n}`; })() };
const run = (state: any, action: any) => { const result = applyAction(state, action, deps); expect(result.ok).toBe(true); return result.ok ? result.state : state; };

describe("R-M2 教学 seed 与持久化回归", () => {
  it("seed 到六幕动作逐事件推进，并可重放/撤销", () => {
    const seed = createDivergenceSeed(deps);
    expect(seed.sources).toHaveLength(3); expect(seed.claims).toHaveLength(2); expect(seed.conditions).toHaveLength(3);
    let state = createInitialState({ sessionId: "s1", questionId: "work-love-or-not", seed, deps });
    state = run(state, { type: "record_stance", text: "我暂时还不确定。" });
    expect(state.eventLog.map((e) => e.type)).toEqual(["stance_recorded"]); state = run(state, { type: "advance_act" });
    for (const slot of ["description", "dependency", "generalization"]) state = run(state, { type: "place_commit", slot, sourceId: state.sources[slot === "description" ? 0 : slot === "dependency" ? 1 : 2].id });
    state = run(state, { type: "commit_relation", sourceId: state.sources[0].id, claimId: state.claims[0].id, kind: "support" });
    state = run(state, { type: "advance_act" }); state = run(state, { type: "switch_condition", conditionId: state.conditions[0].id });
    state = run(state, { type: "advance_act" }); state = run(state, { type: "judge_counterexample", relationId: state.relations[0].id, verdict: "limit_scope" });
    state = run(state, { type: "advance_act" }); state = run(state, { type: "save_bridge" });
    state = run(state, { type: "advance_act" }); state = run(state, { type: "form_card", card: { tentativeJudgment: "需要结合条件观察。", supportingSourceIds: [state.sources[0].id], applicableConditionIds: [state.conditions[0].id], openQuestions: ["还需观察实际投入"], revisionTriggers: ["时间条件变化"] } });
    expect(state.eventLog.map((e) => e.type)).toEqual(["stance_recorded", "act_advanced", "slot_committed", "slot_committed", "slot_committed", "relation_committed", "act_advanced", "condition_switched", "act_advanced", "counterexample_judged", "act_advanced", "bridge_saved", "act_advanced", "card_formed"]);
    expect(replayEventLog(state)).toEqual(state);
    const undone = applyAction(state, { type: "undo_last" }, deps); expect(undone.ok).toBe(true);
    if (undone.ok) expect(undone.state.eventLog.map((e) => e.type)).toEqual(state.eventLog.slice(0, -1).map((e) => e.type));
  });

  it("持久化往返与失败均返回明确结果", () => {
    const memory = new Map<string, string>(); const storage = { getItem: (k: string) => memory.get(k) ?? null, setItem: (k: string, v: string) => { memory.set(k, v); }, removeItem: (k: string) => { memory.delete(k); } };
    const adapter = createLocalStorageAdapter(storage); const state = createInitialState({ sessionId: "s2", questionId: "work-love-or-not", seed: createDivergenceSeed(deps), deps });
    expect(adapter.save(state, "2026-09-16T00:00:00.000Z").ok).toBe(true); const loaded = adapter.load(); expect(loaded.ok).toBe(true); if (loaded.ok) expect(loaded.state).toEqual({ ...state, savedAt: "2026-09-16T00:00:00.000Z", narrativeState: { ...state.narrativeState, seenCharacters: [], triggeredEvents: [] } });
    expect(adapter.clear().ok).toBe(true); expect(adapter.load()).toEqual({ ok: true });
    const broken = createLocalStorageAdapter({ getItem: () => "{", setItem: () => { throw new Error("x"); }, removeItem: () => { throw new Error("x"); } });
    expect(broken.load()).toMatchObject({ ok: false, error: { code: "INVALID_JSON" } }); expect(broken.save(state, "x")).toMatchObject({ ok: false, error: { code: "STORAGE_WRITE_FAILED" } }); expect(broken.clear()).toMatchObject({ ok: false, error: { code: "STORAGE_CLEAR_FAILED" } });
  });

  it("主题内容包带版本与变更记录", () => {
    const seed = createDivergenceSeed(deps);
    expect(seed.contentVersion).toBe("1.0.1");
    expect(createInitialState(seed).questionId).toBe("work-love-or-not");
    expect(seed.sources.every((source) => source.isTeachingSample && source.excerpt)).toBe(true);
  });

  it("历史成形卡只读读取并隔离返回值", () => {
    const card = { tentativeJudgment: "暂时判断", supportingSourceIds: [], applicableConditionIds: [], openQuestions: [], revisionTriggers: [] };
    const state = createInitialState({ sessionId: "s3", questionId: "work-love-or-not", seed: createDivergenceSeed(deps), deps });
    const cards = readHistoricalFormingCards([{ ...state, formingCard: card }]);
    expect(cards).toEqual([card]); cards[0].openQuestions.push("新问题"); expect(card.openQuestions).toEqual([]);
  });
});
