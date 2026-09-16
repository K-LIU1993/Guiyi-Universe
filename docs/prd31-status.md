# PRD 3.1 状态账

刷新：2026-09-17T07:31:51+08:00；下次应复核：2026-09-17T09:31:51+08:00。刷新依赖 AU 再次调度；本会话未配置后台定时任务。

VERIFIED 表示 D 核实的文件、Git 或命令事实；INFERRED 表示据他流报告推断实现；HYPOTHESIZED 表示设计假设；UNKNOWN 表示证据不足。所有下表读取时间均为本次刷新时间，来源相对本文目录。

## 本轮更正

此前顶层搜索漏掉嵌套 PROGRESS.md，“仅 stage 有进度文件”结论撤回。此前把自报 passed 等同于 P1/P2 整体验收的结论撤回。旧 PRD-v2 只有六章，不得用契约章节或 D 流任务伪造 PRD 3.1 十章标题；十章映射待取得 3.1 原文。

## M0/P0/P1/P2

| 项目 | 状态 | 当前结论 | 来源与时间 |
|---|---|---|---|
| M0 契约冻结文档 | VERIFIED | 文件声明 1.0.0 冻结；D 未改契约 | contracts/rule-engine-v1.md；本次读取 |
| M0 PRD 3.1 十章 | UNKNOWN | 当前工作树仅有旧 PRD-v2，十章映射未验证 | PRD-v2.md；本次复核 |
| P0 R-M2 | INFERRED | 自报 31/31、build 通过；UI 未接 | ../../wt-rules/src/game/persistence/PROGRESS.md；本次读取 |
| P0 服务 | INFERRED | 自报缺凭证/失效处理与教学降级通过；真实成功态未证实 | ../../wt-server/server/PROGRESS.md；本次读取，采用末尾更正 |
| P1 六幕舞台 | INFERRED | 自报独立六幕浏览器链路通过，不等于主应用集成 | ../../wt-stage/PROGRESS.md；本次读取 |
| P1 资产 | INFERRED | 自报导出、回读、三视图、Meshopt 完成；KTX2 未见通过证据 | ../../wt-blender/blender/PROGRESS.md；本次读取 |
| P1 内容 | INFERRED | 自报模板测试10/10、三套 seed、HTTP 200；下游集成未验证 | ../../wt-content/content/PROGRESS.md；本次读取 |
| P1 遇见 | INFERRED | 自报浏览器通过；API 使用 fixture，真实5203未通 | ../../wt-meet/src/meet/PROGRESS.md；本次读取 |
| P1 探索 | INFERRED | 自报 Mock/fixture 通过；真实5203失败，不是整体完成 | ../../wt-explore/src/explore/PROGRESS.md；本次读取 |
| P1 visual | UNKNOWN | 顶层进度是继承的 S-M2 文本，不能据此证明 visual 专项完成 | ../../wt-visual/PROGRESS.md；本次读取 |
| P2 六屏测试报告 | VERIFIED | acceptance.json 声明 passed；核实的是报告存在及内容 | ../../wt-app/src/app/evidence/acceptance.json；文件时间07:11:17，本次读取 |
| P2 产品排除项合规 | VERIFIED | 发现冲突：回执宣称水晶奖励；shell.ts 有 crystals 展示和多个累加路径 | ../../wt-app/src/app/receipt.json；../../wt-app/src/app/shell.ts:8,28,49,50,54,56；本次读取 |
| P2 跨流完整验收 | UNKNOWN | 未独立重跑；排除项冲突尚未解决，不能整体通过 | 上述 U-APP/探索/遇见证据；本次读取 |
| D 内容初稿 | HYPOTHESIZED | 六幕台词是拟稿，尚未证明已接入产品 | act-content-divergence.md；本次核验 |

## 回执与版本

U-APP receipt.json 的 head 为 4cea22f502fc39c00afffd7badac09b57b22fd05；当前 Git HEAD 为 436d81cec5cb17fe2e6e3879045acc1c95ccac23，二者不一致，回执不能自动覆盖当前版本。回执包含 crystal balance and action rewards，与 AU 本轮排除要求冲突。历史 failure.json 只作历史排障记录，不单独构成当前失败。

| 流 | Git HEAD | 脏文件数 | 证据/采集时间 |
|---|---|---:|---|
| rules | 899c403725fd463744a79d249ed48c8c7388c650 | 0 | wt-rules 的 rev-parse HEAD / status --porcelain --untracked-files=all；2026-09-17T07:31:51+08:00 |
| stage | 632e1e680b18ab692647f04bd582e474fcddc2a1 | 0 | wt-stage 的 rev-parse HEAD / status --porcelain --untracked-files=all；2026-09-17T07:31:51+08:00 |
| assets | eba128bf2e7b70459d3f7555d3c1f447b7ed60f9 | 0 | wt-blender 的 rev-parse HEAD / status --porcelain --untracked-files=all；2026-09-17T07:31:51+08:00 |
| server | 5f00fea1fe7f04daea5bd3be5a2253a252a1e114 | 0 | wt-server 的 rev-parse HEAD / status --porcelain --untracked-files=all；2026-09-17T07:31:51+08:00 |

## PRD 十章映射待补

| 章节 | 状态 | 原文证据 |
|---|---|---|
| §1 | UNKNOWN | 未取得本轮 PRD 3.1 原文章节；不能引用 PRD-v2 冒充 |
| §2 | UNKNOWN | 未取得本轮 PRD 3.1 原文章节；不能引用 PRD-v2 冒充 |
| §3 | UNKNOWN | 未取得本轮 PRD 3.1 原文章节；不能引用 PRD-v2 冒充 |
| §4 | UNKNOWN | 未取得本轮 PRD 3.1 原文章节；不能引用 PRD-v2 冒充 |
| §5 | UNKNOWN | 未取得本轮 PRD 3.1 原文章节；不能引用 PRD-v2 冒充 |
| §6 | UNKNOWN | 未取得本轮 PRD 3.1 原文章节；不能引用 PRD-v2 冒充 |
| §7 | UNKNOWN | 未取得本轮 PRD 3.1 原文章节；不能引用 PRD-v2 冒充 |
| §8 | UNKNOWN | 未取得本轮 PRD 3.1 原文章节；不能引用 PRD-v2 冒充 |
| §9 | UNKNOWN | 未取得本轮 PRD 3.1 原文章节；不能引用 PRD-v2 冒充 |
| §10 | UNKNOWN | 未取得本轮 PRD 3.1 原文章节；不能引用 PRD-v2 冒充 |

契约可独立核对：§2 四值关系、§3 稳定 ID、§4 API/预览分离、§5 六幕、§6 保存、§8 七回归。它们不是 PRD 章节标题。

## 三项抽查

1. VERIFIED：stage HEAD 632e1e680b18ab692647f04bd582e474fcddc2a1，脏文件 0；来源本次 Git 采集。
2. VERIFIED：六屏报告 status=passed；来源 acceptance.json，D 未将其当作独立浏览器复验。
3. VERIFIED：U-APP 存在 crystals 奖励代码，与 AU 排除要求冲突；来源 shell.ts 上述行和 receipt.json。

K1 已落地通知未收到，继续不整理 docs/GRD3-*。冻结契约与提案文件保持不变。
