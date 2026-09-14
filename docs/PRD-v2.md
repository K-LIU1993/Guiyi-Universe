# 归一 · 一问一世界 — 第二轮迭代 PRD（v2 三维场景与六岛专属交互）

## 1. 背景与目标

第一轮已交付可运行的 3D 知识探索宇宙（提交 fb0c1ec）。本轮依据 4 张参考图
(7f560c7f / cb5017ae / b9d2fbaa / 4f5d4113) 完成两件事：

1. 场景视觉升级为风格化微缩连体大陆：六大 biome、石桥、瀑布、发光门、中央水晶球、
   区域贴纸标签，分阶段点亮与解锁。
2. 废除"每个岛都开抽屉读卡"的单一模式，为六个岛各设计一种专属交互体验。

## 2. 设计语言（来自参考图）

- 连体大陆而非孤岛：区域之间以地形、桥、瀑布衔接，视觉上是一个世界。
- 中央"?"水晶球是提问核心：投入问题 → 地形升起 → 区域逐一点亮。
- 分阶段解锁：首轮只开放部分路线，其余区域呈锁态/迷雾态。
- 贴纸式标签：每个区域有手绘感标签，点击或到达后显示。
- 色彩：来路=暖橙村 + 樱花相框；此地=蓝白数据城；岔路=红岩峡谷；
  遇见=水村篝火；未至=墨绿迷雾光门；成形=中央水晶球场。

## 3. 六岛专属交互矩阵

| 岛 | 模式 | 核心交互 | 完成条件 |
|---|---|---|---|
| 来路 lai | 故事小径 | 沿小径依序点亮 3 块故事石，每石翻出一张经历卡 | 3 石全亮 |
| 此地 cidi | 条件控制台 | 翻动 3 个条件开关，屏幕读出条件叙述，拉杆汇总 | 拉下汇总杆 |
| 岔路 cha | 分岔桥 | 转动路牌选一条桥过谷，读彼岸之卡，可折返看另一条 | 完成一次过桥 |
| 遇见 yu | 篝火围坐 | 点人物听经历，对方反问你，用态度按钮回应，火随共鸣变亮 | 3 人分享完 |
| 未至 wei | 迷雾光门 | 拨散 3 团迷雾，收集隐藏节点，唤醒绿光门 | 3 节点集齐 |
| 成形 form | 关联壁 | 把已收集卡片拖到水晶球轨道，两两连线并命名关系，织成思路网 | ≥2 条连线 |

共同规则：完成任一岛 → progress.complete(key) → 能量脉冲 → 解锁下一阶段。
交互过程中卡片仍走既有收集链路（onCollect），不重写卡片系统。

## 4. 模块契约（src/game/modes/）

宿主（main.js，由原会话实现）构造 hooks 并在 onArrive 时调用：

    const modes = createModes(hooks);
    modes.enter(regionKey, anchor);   // anchor = { center:{x,y,z}, spots:[{x,y,z}...], land }
    modes.leave();

hooks 结构（所有字段均可选，模块内部做了防御）：

- state：当前问题包状态（pack / TYPE_REGION）
- progress：{ isDone(key), complete(key) }
- world：Universe（tweens / setEnergy / awakenPortal / interactives）
- engine：addLabel(el,pos) / removeLabel(handle)
- camera：CameraRig（focusOn）
- bloomy：flyTo / hud.toast / hud.say
- effects：burst(pos,color) / ripple(pos,color)
- ui：createStage(key,title,hint) / removeStage / openCard(card)（可选）

每个模式模块导出 { id, title, hint, mount(ctx) → dispose }，
ctx 含 ...hooks、stage、body、placer（3D 标签放置器）、anchor、cards（本区域卡）、done()。

## 5. 分工

- 原会话（01a0a11c）：world.js v2 视觉重建、运镜、rise 序列、分阶段解锁、
  main.js 接线（getAnchor / onArrive 调 modes.enter / onCollect 保留）。
- 本线程：docs/PRD-v2.md、src/game/modes/* 六个模块 + index.js + modes.css、
  构建与浏览器端到端验证、提交。

## 6. 验收标准

1. npm.cmd run build 零错误。
2. 六个岛交互各异、均可独立完成，完成后有能量反馈与 Bloomy 台词。
3. 浏览器实测完整链路：提问 → 世界生成 → 至少 4 个岛以新模式完成 → 对照 → 成形。
4. 场景符合参考图：连体大陆、中央水晶球、迷雾未至区、分阶段点亮。
5. 不引入 three/vite 之外的新依赖；Bloomy 台词遵守 AGENTS.md 内容约定。
