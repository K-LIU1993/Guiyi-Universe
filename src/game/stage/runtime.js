import { applyAction, createInitialState, migrateSave } from '../rules/engine.ts';

export const SAVE_KEY = 'guiyi.divergence-island.save.v1';

const fallbackDeps = { nextId: (prefix) => prefix + '_' + crypto.randomUUID().slice(0, 8) };

export function loadSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const result = migrateSave(JSON.parse(raw));
    return result.ok === false ? null : result;
  } catch {
    return null;
  }
}

export function createStage(input, deps = fallbackDeps) {
  let state = loadSave() || createInitialState({ ...input, deps });
  const listeners = new Set();

  function persist(next) {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify({ ...next, savedAt: new Date().toISOString() }));
    } catch { /* 内存状态继续有效，下一次成功时重写 */ }
  }

  function dispatch(action) {
    const result = applyAction(state, action, deps);
    if (!result.ok) return result;
    state = result.state;
    persist(state);
    listeners.forEach((listener) => listener({ state, events: result.events }));
    return result;
  }

  return {
    getState: () => state,
    dispatch,
    subscribe: (listener) => { listeners.add(listener); return () => listeners.delete(listener); },
  };
}
