# 归一：AMD + 知乎后台

浏览器向归一同源 `/api/*` 发请求。Vite 开发和预览服务器将请求转发到本机 `127.0.0.1:5201`，独立 Node API 再调用 OpenCodex 和知乎 CLI。这样 API 不依赖 Codex 任务启动前端时的文件访问权限。

默认模型为 `amd/Qwen3.8-Flash-Next`，调用 `http://127.0.0.1:10100/v1/responses`，使用 low 推理档位与 JSON 输出模式。这只是归一的后台默认模型，不改变 Codex 对话的模型或 OpenCodex V1/V2 模式。DeepSeek-V4-Flash 的短文本连通测试通过，但完整六岛生成多次超时，因此没有选为默认模型。

## 启动与检查

Kira 的 Windows 已配置登录启动任务 `Guiyi-LLM-Backend`，运行 `server/index.js`，仅监听本机回环地址。OpenCodex 也需运行。开发页面仍使用原来的 Vite 启动方式：`npm.cmd run dev -- --port 5199 --strictPort`。

手动运行 API：`npm.cmd run api`。已有后台实例时不要重复启动。查询状态可用 `Get-ScheduledTask -TaskName Guiyi-LLM-Backend`；需要重启本项目 API 时用 `Stop-ScheduledTask` 后 `Start-ScheduledTask`，无需重启 Codex 或 OpenCodex。

`GET /api/llm/health` 只检查配置可用性，不代表模型已成功生成。真实调用证据在成功问题包的 `provenance.response`，记录请求模型、返回模型、响应 ID 和时间。`GET /api/health` 只检查 API 进程存活。

## 接口

- `POST /api/world`：`{"question":"为什么鸟在清晨鸣叫","withIslandPlans":true}`。返回问题包本体，含 `id,q,sub,cards,sources,islandPlans,provenance`。五类卡每类至少两张，六岛计划引用已有卡片 ID。世界中的知识内容来自知乎检索摘要，经模型整理；来源链接不能替代对全文与事实的核查。
- `POST /api/island/adapt`：`{question,region,cards,priorChoices}`。`region` 为 `lai/cidi/cha/yu/wei/form`；`cards` 是当前岛的卡片；`priorChoices` 是最多 12 条历史选择摘要。返回 `{ok,plan,provenance}`。计划为 `{source,hint,steps:[{cardId,prompt}],completion,relHints}`，只有受控文本字段，不执行生成代码。
- 错误为 `{ok:false,error:{code,message}}`。知乎失败、模型超时和生成格式无效均明确报错，不伪装成真实生成；最多修复一次格式。相同问题的进行中请求共用一次生成，并发上限默认 2。

## 凭据与配置

服务端读取当前 Windows 用户 `.opencodex/config.json` 内启用的 API key，通过 `X-OpenCodex-API-Key` 调用现有代理。缺少 `enabled` 字段按现有 OpenCodex 格式视为启用。不复制 AMD 上游密钥到项目。

知乎 CLI 默认位于 `%LOCALAPPDATA%\ZhihuCLI\current\zhihu-cli.exe`，只从相邻 `knowledge-islands/.env.local` 读取 `ZHIHU_ACCESS_SECRET`，注入 CLI 子进程。凭据不进入页面、问题包、前端构建或文档。公开部署前需要独立的服务端账号与应用鉴权；当前部署是本机项目服务。

可配置环境变量：`GUIYI_PORT`、`GUIYI_HOST`、`GUIYI_LLM_BASE_URL`、`GUIYI_LLM_MODEL`、`GUIYI_OPENCODEX_CONFIG`、`GUIYI_ZHIHU_CLI`、`GUIYI_ZHIHU_ENV_FILE`、`GUIYI_LLM_TIMEOUT_MS`、`GUIYI_LLM_MAX_OUTPUT_TOKENS`、`GUIYI_MAX_CONCURRENT`。默认模型输出上限 6000 tokens，每次 LLM 请求超时 120 秒。

## 知乎能力边界

当前 CLI 支持知乎搜索、全网搜索、热榜、按问题查询回答摘要，以及知乎问答模型。当前归一主线使用 `search zhihu` 检索，未自动访问用户私有内容、未自动上传知识库。来源摘要不等于全文。

已检查的官方接口没有发布新问题的能力。页面“问题漂流”只能说明其实际本机保存范围，不能声称已发布知乎或已进入跨用户社区。后续若要发布，应使用官方允许的发布机制并单独完成用户授权与验收。

验证：`npm.cmd run test:api` 与 `npm.cmd run build`；浏览器另需验证提问、岛屿任务、选择影响、对照和存档恢复。
