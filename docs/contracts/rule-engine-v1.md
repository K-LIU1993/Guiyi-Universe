# 规则引擎契约 v1（分歧岛 · R/S 唯一接缝）

- 状态：**已冻结 1.0.0**（AU 起草；已吸收 J1/K1 对 rc1 的双侧审阅意见；rc2 已经 J1/K1 双侧结构化回执确认后冻结，回执定位符存档于 §0）
- 所有权：本文件归 D 流（Mac）维护；src/game/rules/ 归 R 流（Mac）；src/game/stage/ 归 S 流（Kira）。
- 依据：deliverables/归一-Universe-v3.1-迭代方案.md 第 3/4/5/9 节。
- 冻结生效后，任何变更只能由 AU 提案，经两侧 AUA 回执确认，并递增版本号（类型变更递增 minor，存档 schema 破坏性变更递增 major 并写迁移）。

## 0. 版本记录

- rc1 → rc2：结构化冻结回执（§9）；createInitialState 显式 seed 注入（§4）；SceneBinding 经 bind_scene 登记（§3/§4）；eventLog 载荷补全并新增 stance_recorded/scene_bound 事件（§4）；Condition.field 白名单与 opening 完成判据（§4/§5）；旧存档隔离与 preview 禁持久化（§6）；无 URL 教学样例来源约定（§3）；S 流分层起步说明（§8）。
- rc2 → 1.0.0（冻结）：双侧结构化回执确认（§9），双方 head/remoteHead 均为 edab449，blockers 均为空。J1 回执定位符：threadId `01a0a3ed-0ce2-7e62-8322-c5bbb7c38878`、turnId `01a0a402-766e-7740-a0ad-fd1ddf2f0aa7`、messageId `fco_01a0a402-7691-7742-b9aa-90028eaa6355`。K1 回执定位符（Argus 原生回执，action `stage_5dbab814730245229bc36dcf`）：threadId `01a0a408-781e-7bc1-b5df-465ef67024bb`、turnId `01a0a4a7-54a4-7862-a3cc-a71acc8f616d`、messageId `fco_01a0a4a7-54e9-7961-b75e-09abb7c5330e`。

## 1. 边界与禁令

- R 流产出 src/game/rules/：纯函数规则引擎。**禁止** import three、react、DOM API（document/window）、fetch、Date.now、Math.random。
- S 流产出 src/game/stage/：Three.js 舞台、输入、镜头、HUD 接线。S 只允许通过第 4 节 API 调用规则引擎，**禁止**直接改写存档字段或绕过 reducer 写状态。
- 同一游戏事实（如"桥已修复"）只允许存在一处：存档（第 6 节 SaveDocument）。React/面板开合用 UI 状态；逐帧位置用渲染层局部引用，均不入存档。
- 奖励只围绕认知动作（经历/条件/分歧/共鸣/盲点/整合），不做积分、排行榜（沿用仓库 AGENTS.md 内容约定）。
- 表现层局部状态（regionChoices、pack 选择、动画时序、镜头插值等）留存于 S 层组件状态，不入存档、不进 eventLog；只有跨会话需恢复的游戏事实才走 SaveDocument/eventLog。旧 modes 演示数据不迁移、不映射为证据关系。

## 2. 证据关系四值（不可简化为赞成/反对）

    type EvidenceRelationKind = 'support' | 'challenge' | 'limit_scope' | 'uncertain';

- support 支持；challenge 挑战；limit_scope 限制范围（不反驳原结论，只说明不适用于某情境）；uncertain 尚不确定。
- 反例幕的判定动作必须映射到这四值之一；"不相关"表达为 limit_scope 并附注，不新增第五值。

## 3. 保存对象八类与稳定 ID

八类保存对象：来源、主张、适用条件、证据关系、用户动作、任务状态、叙事状态、场景绑定。

所有跨层引用一律用稳定 ID（SourceId/ClaimId/ConditionId/RelationId），**禁止**用显示名称或数组下标做标识。ID 由 R 流显式分配器生成（前缀 + 序号 + 短随机段，随机段由注入的 seeded rng 产生），生成后不可变。

场景绑定：S 流通过 bind_scene 动作登记"场景节点 → 稳定 ID"映射表（sceneBindings）；R 流只存 ID，不感知 Three.js 对象。
来源字段约定：外部抓取来源必须携带 url 与 fetchedAt；isTeachingSample=true 的教学样例允许无 url（fetchedAt 取导入时间）。无 url 来源不影响规则判定，仅不参与跳转类 UI。

## 4. 规则引擎 API（R/S 接缝，normative）

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

### 4.1 语义细则

- **预览与提交分离**：place_preview 只返回判定结果供吸附预览，永不产生事件或状态变化；正式状态只在 place_commit 时更新一次。拖动全流程（按下→锁定→候选→预览→提交/取消）由 S 实现，边界场景（移出画布/Esc/切后台/触摸取消）按方案第 5 节处理。
- **事件顺序（硬规则）**：规则确认操作 → 追加领域事件到 eventLog → 持久化层写存档 → 才驱动镜头/桥梁/粒子/声音/DOM。动画中断、跳过、重载都不得改变游戏事实。
- **重载重建**：桥梁与关系状态一律从 SaveDocument 重建（relations + bridge.relationIds）；eventLog 是可重放依据，undo_last = 按 eventLog 去掉最后一条事件后确定性重放（本契约所有领域事件均由玩家 RuleAction 产生；若未来引入系统事件，必须显式携带 actor，且 undo 仅回退玩家事件）。
- **确定性**：reducer 内禁 Date.now/Math.random；需要时间由持久化层写 savedAt，需要随机由 deps.nextId 注入 seeded 实现。
- **错误不抛异常**：无效放置、资料不足、接口失败统一返回 RuleResult{ok:false}，S 层把它映射为温和的非羞辱反馈与音效语义。
- **opening 完成判据**：opening 幕唯一写动作是 record_stance（空文本返回 INVALID_PLACEMENT）；stance_recorded 入账即本幕完成，advance_act 方可用。record_stance 不发奖励、不判人格。
- **sceneBindings 登记**：S 只能经 applyAction({type:'bind_scene'}) 登记；重复 objectId 返回 SCENE_ALREADY_BOUND；禁止直接改写 sceneBindings 数组。bind_scene 属管线动作，任何幕可用。
- **preview 载荷**：place_preview 的判定经 RuleResult.preview 返回；无论允许与否都不产生事件、不改变状态、不持久化。

## 5. 六幕关卡状态机（normative）

| 幕 | ActId | 允许的动作 |
|---|---|---|
| 立幕 | opening | record_stance（记录暂时立场；只用开场只读交互，不发奖励、不判人格） |
| 结构卡 | structure | place_preview / place_commit / commit_relation |
| 条件切换 | condition | switch_condition / revise_relation |
| 反例幕 | counterexample | judge_counterexample / revise_relation |
| 有解释的桥 | bridge | save_bridge / revise_relation |
| 潘多拉下一问 | next_question | form_card（形成卡完成即本岛闭环） |

- advance_act 仅在当前幕完成条件满足时生效（完成条件由 R 流用例逐条断言），顺序固定为上表从上到下。
- 每幕的"完成条件"由 R 流实现并在 Vitest 用例中逐条覆盖（见第 8 节）。

## 6. 存档 schema 与持久化

- schemaVersion 固定 1；破坏性变更加版本 + migrateSave 迁移函数，禁止原地改旧档。
- 持久化时机：每次 applyAction 返回 ok:true 后由 S 层立即持久化（localStorage，键 guiyi.divergence-island.save.v1）；持久化失败向玩家呈现明确提示但不得阻塞规则状态（内存态仍有效，恢复后重写）。
- 存档内不含 DOM/Three.js 对象引用；sceneBindings 只含稳定 ID 与角色。
- 旧存档隔离：state.js 旧版存档（五步推进/直接变更）不自动迁移；migrateSave 对不认识的形状返回 SCHEMA_UNSUPPORTED，旧档按只读遗留数据处理，绝不静默丢弃或就地改写。
- preview 结果与任何未提交交互（拖拽中、未确认判定）禁止写入持久化层。

## 7. 工具链裁决（对 AGENTS.md"新依赖需先说明"的说明）

- 方案第 9 节已裁定 R 流为"纯 TS + Vitest"。因此 typescript、vitest 及 @types/* 仅作为 **devDependencies** 引入，且仅 R 流测试使用；构建门仍是 npm run build 零错误（vite 对 src/game/rules/*.ts 原生转译，无运行时新依赖）。R 流 PR 必须附带此说明，避免与仓库约定冲突。

## 8. 验收与回归用例（R 流 DoD，冻结后不得裁剪）

1. 四值证据关系：每值各 1 例提交与修订；尝试把判定写成二值 → 用例失败。
2. 三插槽：同源卡重复放入 → SLOT_OCCUPIED；缺来源提交关系 → MISSING_SOURCE。
3. 条件切换：8h/周计划 vs 5h/周设定的可判定例（时间不足分支）断言通过；不可判定的"现实人生"字段被拒绝（NOT_JUDGEABLE）。
4. 反例幕：处境不同案例 → limit_scope 不误判为 challenge。
5. 桥：save_bridge 后从空内存仅凭 SaveDocument 重建，关系标记完整可见。
6. 重放/撤销：eventLog 重放幂等；undo_last 后状态与事件一致。
7. 幕状态机：越幕动作（如 structure 幕调 judge_counterexample）→ ACT_FORBIDDEN。

S 流联调 DoD：六幕关卡浏览器可玩、退出续玩、预览不产生事件、错误反馈与音效语义齐全。S 流以 src/game/stage/ 统一 dispatch → 持久化 → 表现分层起步，再接六幕接线与拖拽取消。

## 9. 冻结流程

1. AU 将本契约经账本/桌面消息派给 Kira AUA 与 Mac AUA 确认。
2. 双侧回执必须为结构化确认：包含各自 threadId、turnId、messageId 定位符与"确认契约 1.0.0-rc2"字样；缺任一定位符的确认不构成冻结回执（对齐 Argus 账本四要素回执语义）。
3. 双侧结构化回执齐备后，AU 把状态行改为"已冻结 1.0.0"并合并本 PR。
4. 冻结前双侧可提修正意见；冻结后按第 0 节变更协议执行。
