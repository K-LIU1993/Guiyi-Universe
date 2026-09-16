# 七回归用例与证据位

| ID | 浏览器操作步骤 | 预期 | 证据 |
|---|---|---|---|
| R-01 四类关系 | 结构幕依次提交 support/challenge/limit_scope/uncertain，再试二值判定 | 四类保存，非法输入拒绝 | 时间/截图/日志：____ |
| R-02 三插槽 | 同源卡重复放置；缺 source 提交关系 | SLOT_OCCUPIED；MISSING_SOURCE | ____ |
| R-03 条件 | 切换 2h/周与 5h/周；尝试真人生活结论字段 | 合法条件通过；NOT_JUDGEABLE | ____ |
| R-04 反例 | 不同处境案例选择 limit_scope，再试 challenge | 保持范围限制 | ____ |
| R-05 桥 | 保存 bridge，刷新/清空内存后重建 | relationIds 和标记一致 | ____ |
| R-06 重放撤销 | 完成动作，undo_last，刷新重建 | 状态等于事件重放 | ____ |
| R-07 幕状态机 | 在 structure 调 counterexample；依次完成六幕 | ACT_FORBIDDEN；顺序固定 | ____ |

完整链路：提问→世界生成→至少 4 岛→对照→成形。截图/录屏/控制台/构建证据：____。
