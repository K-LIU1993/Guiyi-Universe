import { expect, it } from "vitest";
import { createInitialState } from "./engine";
import { createDivergenceSeed } from "../../content/divergenceSeed";
import { createLocalStorageAdapter, SAVE_KEY } from "../persistence/localStorageAdapter";

it("保留加载后的叙事扩展，允许显式清空，不改输入或事件", () => {
  let raw: string | null = null;
  const adapter = createLocalStorageAdapter({ getItem: () => raw, setItem: (key, value) => { expect(key).toBe(SAVE_KEY); raw = value; }, removeItem: () => { raw = null; } });
  let id = 0;
  const deps = { nextId: (prefix: string) => `${prefix}-${++id}` };
  const state = createInitialState({ sessionId: "test", questionId: "work-love-or-not", seed: createDivergenceSeed(deps), deps });
  expect(adapter.save(state, "2026-09-17T00:00:00Z", { seenCharacters: ["bloomy"], triggeredEvents: ["intro"] }).ok).toBe(true);
  const loaded = adapter.load();
  expect(loaded.ok).toBe(true);
  if (!loaded.ok || !loaded.state) throw new Error("Expected saved state");
  expect(adapter.save(loaded.state, "2026-09-17T01:00:00Z").ok).toBe(true);
  expect(adapter.load()).toMatchObject({ ok: true, state: { narrativeState: { seenCharacters: ["bloomy"], triggeredEvents: ["intro"] }, eventLog: [] } });
  expect(adapter.save(loaded.state, "2026-09-17T02:00:00Z", { seenCharacters: [] }).ok).toBe(true);
  expect(adapter.load()).toMatchObject({ ok: true, state: { narrativeState: { seenCharacters: [], triggeredEvents: ["intro"] }, eventLog: [] } });
  expect(state.narrativeState).toEqual({ visitedActs: ["opening"] });
  expect(loaded.state.narrativeState.seenCharacters).toEqual(["bloomy"]);
});
