# U-APP 验收报告

状态：VERIFIED — 原任务范围内实现与本地浏览器验收完成。

- 开发入口：localhost:5206/app.html；命令 npm.cmd run dev -- --port 5206 --strictPort。
- main.ts 加载 shell.ts：六屏 hash 路由，问题、筛选、收藏、对照、标记、成形草稿与保存状态跨屏及刷新保持。
- 首页四岛俯瞰、中央水晶地标、岛屿入口及进度占位；其它页面纯 DOM。
- 证据详情含原文/来源/收藏/加入对照/分享占位；A/B 并排及三型标记；遇见显著标注虚构角色。
- 成形五要素由用户填写，保存后打开相关话题新路径。
- api.ts 使用本地 mock，预留 127.0.0.1:5203 接口；未调用未知服务路径。

## VERIFIED

- npm.cmd run build 零错误，双入口成功。
- Edge 完整链路与刷新恢复通过，console.error/pageerror 均为 0。
- 375/390/430px × 六屏共 18 组：无横向溢出、按钮及输入框热区均 ≥44px、A/B 左右并排。
- 首页离屏销毁画布，其它屏 0 画布，返回重建；5 次往返正常。
- evidence/acceptance.json 为最终机器验收；18 张成功页面截图在 evidence/。failure.* 保留先前排障历史，以 acceptance.json 为准。
- 人工查看首页和375px对照截图，文字、地图及并排结构正常。
- git diff --check 通过；仅 app.html、src/app/**、vite.config.js 入口增量变更。

## 边界

- 五要素解释沿用任务及进度记录；未获取附件 PDF/B3 原件。
- 真实 server 契约对接不属于当前 mock 验收范围。
- 无 Argus 后台绑定，不宣称后台调度已接通。
- 未创建提交；HEAD 为 ca5c68d16173b73d10bb59b2f221ac46d9a30279，交付在工作区。

## 复现

设置 U_APP_PLAYWRIGHT 为本机已安装的 playwright 包绝对路径，启动5206服务后执行 node src/app/acceptance.cjs。测试使用已安装 Edge，不新增依赖。
