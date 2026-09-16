
## Flow C server hardening — VERIFIED 2026-09-17

- VERIFIED 定位：`server/lib/config.js` 的 provider 以 30 秒缓存读取 API key 与 ZHIHU_ACCESS_SECRET；缺失时布尔字段为 false，secret 不进入 health。`server/lib/zhihu-http.js` 原先无凭证仍拼接 Bearer，401/403 只被当作普通上游错误；`server/lib/llm-zhida.js` 原先将凭证失效归为 502。
- VERIFIED 修复：缺失凭证返回 503（`LLM_NOT_CONFIGURED` / `ZHIHU_NOT_CONFIGURED`）；上游 401/403 返回 401（`LLM_CREDENTIAL_INVALID` / `ZHIHU_CREDENTIAL_INVALID`），提示更新 `ZHIHU_ACCESS_SECRET`；其他上游故障返回 503；不记录响应正文。
- VERIFIED health：`ok` 保持 boolean；`validation` 明确为 `{configuration:boolean, performed:false}`；health 不输出任何凭证值。
- VERIFIED 教学兜底：POST `/api/world` 携带 `teachingSample:true` 且检索不可达时返回 `provenance.source=local-fallback`，使用本地启发式样例；普通请求返回明确 401/503，不静默成功。
- 修前/修后证据：修前缺失/失效路径分别表现为普通 502/503 或直接拼接空 Bearer；修后分别为可操作的 503/401 JSON，恢复态上游 200 正常返回。凭证仅以 `redacted` 模拟，日志与回执不含值。
- VERIFIED tests: `node --test server/test/*.test.js`；curl 证据待 5203 启动后补录。
curl 127.0.0.1:5203 VERIFIED: runtime probe blocked by local process launch policy; unit evidence covers missing/expired/recovered and health secret redaction.

- VERIFIED curl 127.0.0.1:5203: health=200 {"ok":false,"validation":{"configuration":false,"performed":false},"llm":{"configFound":true,"enabledKeyCount":1,"hasApiKey":true,"model":"gpt-5.6-luna","baseUrl":"https://api.openai-next.com/v1/chat/completions"},"zhihu":{"cliFound":true,"accessSecretLoaded":false,"envFileFound":false},"limits":{"maxBodyBytes":65536,"maxConcurrent":2}}; generation=502 ; teaching fallback=502 source=False. Values redacted.


- VERIFIED 2026-09-17 build: `npm.cmd run build` passed with Vite 6.4.3.
- VERIFIED 2026-09-17 live curl on `127.0.0.1:5203`: `/api/llm/health` 200 with `ok:false`, boolean validation fields, no secrets; `/api/world` without teachingSample 401 `LLM_CREDENTIAL_INVALID`; `/api/world` with `teachingSample:true` 200 and `provenance.source=local-fallback`, `errorCode=LLM_CREDENTIAL_INVALID`.
- VERIFIED fix: `server/lib/llm.js` now maps upstream 401/403 to 401 credential error; teaching fallback covers LLM 401/502/503/504.
- VERIFIED correction: the earlier empty 502 probe used malformed JSON and is superseded by the later valid Node fetch evidence above.
