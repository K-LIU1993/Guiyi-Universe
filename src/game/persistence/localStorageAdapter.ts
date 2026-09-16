import type { SaveDocument } from "../rules/contract";
import { migrateSave } from "../rules/engine";

export const SAVE_KEY = "guiyi.divergence-island.save.v1";
export interface StorageLike { getItem(key: string): string | null; setItem(key: string, value: string): void; removeItem(key: string): void; }
export type PersistenceResult = { ok: true; state?: PersistedSaveDocument } | { ok: false; error: { code: string; message: string; cause?: unknown } };
export type NarrativePersistenceExtension = { seenCharacters: string[]; triggeredEvents: string[] };
export type PersistedSaveDocument = SaveDocument & { narrativeState: SaveDocument["narrativeState"] & NarrativePersistenceExtension };

const failure = (code: string, message: string, cause?: unknown): PersistenceResult => ({ ok: false, error: { code, message, ...(cause === undefined ? {} : { cause }) } });

export function createLocalStorageAdapter(storage: StorageLike) {
  return {
    load(): PersistenceResult {
      try {
        const raw = storage.getItem(SAVE_KEY);
        if (raw === null) return { ok: true };
        let parsed: unknown;
        try { parsed = JSON.parse(raw); } catch (cause) { return failure("INVALID_JSON", "存档不是有效 JSON", cause); }
        const migrated = migrateSave(parsed);
        if ("ok" in migrated && migrated.ok === false) return failure(migrated.error.code, migrated.error.message, migrated.error.details);
        const state = migrated as PersistedSaveDocument;
        state.narrativeState.seenCharacters ??= [];
        state.narrativeState.triggeredEvents ??= [];
        return { ok: true, state };
      } catch (cause) { return failure("STORAGE_READ_FAILED", "读取本地存储失败", cause); }
    },
    save(state: SaveDocument, savedAt: string, narrative: Partial<NarrativePersistenceExtension> = {}): PersistenceResult {
      try {
        const existing = state.narrativeState as SaveDocument["narrativeState"] & Partial<NarrativePersistenceExtension>;
        const narrativeState = { ...existing, seenCharacters: narrative.seenCharacters ?? existing.seenCharacters ?? [], triggeredEvents: narrative.triggeredEvents ?? existing.triggeredEvents ?? [] };
        storage.setItem(SAVE_KEY, JSON.stringify({ ...state, narrativeState, savedAt })); return { ok: true };
      }
      catch (cause) { return failure("STORAGE_WRITE_FAILED", "写入本地存储失败", cause); }
    },
    clear(): PersistenceResult {
      try { storage.removeItem(SAVE_KEY); return { ok: true }; }
      catch (cause) { return failure("STORAGE_CLEAR_FAILED", "清除本地存储失败", cause); }
    },
  };
}
