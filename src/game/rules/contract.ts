// 契约 §2 冻结定义（与 docs/contracts/rule-engine-v1.md §2 代码逐字一致，仅补 export 供跨层引用）
export type EvidenceRelationKind = 'support' | 'challenge' | 'limit_scope' | 'uncertain';

// src/game/rules/contract.ts —— 冻结后 R 流 PR 中必须与本节逐字一致
export type ActId = 'opening' | 'structure' | 'condition' | 'counterexample' | 'bridge' | 'next_question';

export interface Source { id: string; title: string; url?: string; author?: string;
  publishedAt?: string; fetchedAt: string; excerpt: string; isTeachingSample: boolean; }

export interface Claim { id: string; text: string; scope?: string; }

// 条件是存档内显式字段上的可判定谓词；"现实人生结论"不得伪装成可计算结论
// 字段白名单：非白名单字段一律 NOT_JUDGEABLE；集合扩展属 minor 变更
export type ConditionField = 'time.weekly_hours_plan' | 'time.weekly_hours_actual';
export type ConditionOp = 'eq' | 'neq' | 'gte' | 'lte' | 'in';
export interface Condition { id: string; field: ConditionField; op: ConditionOp; value: number | string | string[]; label: string; }

export interface EvidenceRelation { id: string; sourceId: string; claimId: string;
  kind: EvidenceRelationKind; note?: string; createdBy: 'player' | 'system'; }

export type SlotKey = 'description' | 'dependency' | 'generalization';
// 三插槽语义：描述了什么 / 依赖什么条件 / 支持多大范围结论

export interface FormingCard {
  tentativeJudgment: string;        // 我的暂时判断
  supportingSourceIds: string[];    // 支持它的来源
  applicableConditionIds: string[]; // 适用条件
  openQuestions: string[];          // 仍然无法解释的地方
  revisionTriggers: string[];      // 什么新信息会让我修改判断
}

export interface SceneBinding { objectId: string; role: 'mechanism' | 'camera' | 'prop' | 'zone'; label?: string; }

export interface TaskState { act: ActId; stepIndex: number; completed: boolean; }
export interface NarrativeState { bloomyLastLine?: string; openingStance?: string; visitedActs: ActId[]; }

export interface SaveDocument {
  schemaVersion: 1;
  sessionId: string;
  questionId: string;
  sources: Source[]; claims: Claim[]; conditions: Condition[]; relations: EvidenceRelation[];
  slots: Record<SlotKey, string | null>;   // 已放入的 SourceId
  bridge: { visible: boolean; relationIds: string[] };
  formingCard: FormingCard | null;
  taskState: TaskState; narrativeState: NarrativeState;
  sceneBindings: SceneBinding[];
  eventLog: DomainEvent[];
  savedAt: string;                         // 仅由持久化层写入，reducer 不产生时间
}

export type DomainEvent =
  | { type: 'relation_committed'; relationId: string; sourceId: string; claimId: string; kind: EvidenceRelationKind; note?: string }
  | { type: 'relation_revised'; relationId: string; from: EvidenceRelationKind; to: EvidenceRelationKind }
  | { type: 'slot_committed'; slot: SlotKey; sourceId: string }
  | { type: 'condition_switched'; conditionId: string }
  | { type: 'counterexample_judged'; relationId: string; verdict: EvidenceRelationKind }
  | { type: 'bridge_saved'; relationIds: string[] }
  | { type: 'card_formed'; card: FormingCard }
  | { type: 'stance_recorded'; text: string }
  | { type: 'scene_bound'; objectId: string; role: SceneBinding['role']; label?: string }
  | { type: 'act_advanced'; from: ActId; to: ActId };

export type RuleAction =
  | { type: 'place_preview'; slot: SlotKey; sourceId: string }     // 只读，见下
  | { type: 'place_commit'; slot: SlotKey; sourceId: string }
  | { type: 'commit_relation'; sourceId: string; claimId: string; kind: EvidenceRelationKind; note?: string }
  | { type: 'revise_relation'; relationId: string; to: EvidenceRelationKind; note?: string }
  | { type: 'switch_condition'; conditionId: string }
  | { type: 'judge_counterexample'; relationId: string; verdict: EvidenceRelationKind }
  | { type: 'record_stance'; text: string }
  | { type: 'bind_scene'; objectId: string; role: SceneBinding['role']; label?: string }
  | { type: 'save_bridge' }
  | { type: 'form_card'; card: FormingCard }
  | { type: 'advance_act' }
  | { type: 'undo_last' };

export type RuleError = { code: RuleErrorCode; message: string; details?: unknown };
export type RuleErrorCode =
  | 'INVALID_PLACEMENT' | 'SLOT_OCCUPIED' | 'MISSING_SOURCE' | 'ACT_FORBIDDEN'
  | 'NOT_JUDGEABLE' | 'SCENE_UNBOUND' | 'SCHEMA_UNSUPPORTED' | 'NOTHING_TO_UNDO' | 'SCENE_ALREADY_BOUND';

export type RuleResult =
  | { ok: true; state: SaveDocument; events: DomainEvent[]; preview?: { allowed: boolean; reason?: RuleErrorCode } }
  | { ok: false; error: RuleError };   // 失败时原状态不变

export interface RuleEngineDeps { nextId: (prefix: string) => string; }  // seeded，测试可复现
// seed 的 ID 由 deps.nextId 按前缀 src/clm/cnd 依数组顺序分配，分配后不可变
export function createInitialState(input: { sessionId: string; questionId: string;
  seed: { sources: Source[]; claims: Claim[]; conditions: Array<Omit<Condition, 'id'>> };
  deps: RuleEngineDeps }): SaveDocument;
export function applyAction(state: SaveDocument, action: RuleAction, deps: RuleEngineDeps): RuleResult;
export function migrateSave(raw: unknown): SaveDocument;  // schemaVersion 升级入口
