# X-EXPLORE 复核记录

- VERIFIED：根AGENTS已重读，根Vite仅增量多入口；独立5203代理在src/explore/dev.config.js。
- VERIFIED：evidence/acceptance.json记录受控Mock和API夹具均通过；四类筛选、详情、收藏aria-pressed、对照篮、390px无横溢出、44px热区通过，两组console.error/pageerror=0。
- VERIFIED：截图mock-*、api-fixture-*为本次受控测试；live-source.png为未拦截真实请求。
- VERIFIED：实际5203直连不可用，代理返回500；真实成功态未通过，不能标为整体done。
- VERIFIED：npm.cmd run build零错误，git diff --check通过，详情截图已目视检查。
- VERIFIED：虚构教学来源明确标注，分享链接可恢复详情。
- INFERRED：K-CONTENT恢复后的字段契约待验证；API夹具不等于真实数据。
- INFERRED：未绑定外部Argus运行时，本次执行已授权本地任务。

启动：npm.cmd run dev -- --port 5207 --strictPort --config src/explore/dev.config.js
验收：node src/explore/acceptance.cjs
旧explore-*截图为历史结果，以acceptance.json和新截图为准。
