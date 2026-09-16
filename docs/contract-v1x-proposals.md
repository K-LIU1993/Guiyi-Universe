# 契约 v1.x 增补提案

状态：仅提案，不修改冻结的 docs/contracts/rule-engine-v1.md。落地须经过 AU 提案、双侧 AUA 回执和版本递增流程。

## A. 对照记录

目的：让“观点对”保留两侧观点及来源、条件和关系，同时记录用户三型“我的标记”，不简化为赞成/反对。

建议字段：ComparisonRecord { id, leftClaimId, rightClaimId, relationKind, mark, conditionIds, sourceIds }。

建议 mark：

- difference_found：发现差异。
- tension_found：发现张力。
- new_insight：新的启发。

mark 建议结构：{ kind, note?, createdBy: 'player' }；三型标记是认知动作，不产生等级、积分、点赞或水晶奖励。

约束：发现差异不自动等同于 challenge；发现张力保留未决张力；新的启发允许附带条件、来源或开放问题，避免被误读为事实结论。

待决风险：需决定 ComparisonRecord 是否进入 SaveDocument，是否新增事件类型；这是 schema 影响，不能静默落地。

## B. 叙事状态

目的：记录当前会话已见角色和已触发事件，支持探索回访、叙事去重和恢复后继续，并保持表现层瞬时状态边界。

建议字段：NarrativeProgress { seenCharacters: string[], triggeredEvents: string[] }。

约束：两组值使用稳定 ID，不使用显示名称或数组位置；需定义写入时点，避免预览、悬停或中断动画误写；需定义重复触发、幂等、undo 和重放行为。

若进入 SaveDocument，需补 schema/migration、事件类型和旧存档行为；若只留在 S 层，需明确跨会话恢复边界。AI 或虚构角色事件须保留来源标注，不能写成真实人物经历。

## 待 AU 决策

1. ComparisonRecord 是保存对象、事件载荷，还是二者都保留？
2. 三型标记允许多选，还是每个观点对只保留一个当前标记？
3. seenCharacters 是否跨问题包复用，triggeredEvents 是否按 session 隔离？
4. 新字段版本号、迁移策略和旧存档只读策略是什么？
