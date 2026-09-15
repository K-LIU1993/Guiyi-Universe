# 归一 · 自适应玩法与数据契约

本文描述前端「一问一世界」如何消费后端生成的知识包、如何做岛屿级任务适配，以及哪些能力是真实在线、哪些是本地规则。前端零凭据：默认后端模型为 amd/Qwen3.8-Flash-Next，模型路由和认证由服务端处理。

## API 契约

### POST /api/world

请求：

    { "question": "用户的原话", "withIslandPlans": true }

成功响应（HTTP 200）：

    {
      "ok": true,
      "id": "pack id",
      "q": "规范化后的问题",
      "sub": "",
      "cards": [ /* 五类 story/fact/view/person/blind 各≥2 */
        { "id": "c1", "type": "view", "t": "标题", "who": "作者",
          "body": ["段落", "…"], "ask": "卡片追问", "tags": [],
          "sourceIds": ["s1"] }
      ],
      "sources": [
        { "id": "s1", "title": "知乎问答", "url": "https://…",
          "author": "答主", "excerpt": "摘录" }
      ],
      "provenance": { "engine": "llm", "model": "amd/Qwen3.8-Flash-Next" },
      "islandPlans": {
        "lai":   { "steps": [{ "cardId": "c1", "prompt": "任务指令" }], "hint": "", "completion": "", "relHints": [], "source": "llm" },
        "cidi":  { … }, "cha": { … }, "yu": { … }, "wei": { … }, "form": { … }
      }
    }

约束：islandPlans 以六岛 key（lai/cidi/cha/yu/wei/form）映射；steps 里 cardId 必须属于本包该岛类型的卡池（form 为全量卡）；前端截断 steps≤6、relHints≤6，无效 cardId 丢弃。错误统一 `{ "ok": false, "error": { "code": "…", "message": "…" } }`，429 BUSY 前端显示「服务忙」。前端超时 330 秒。后台只合并仍在进行中的同一问题请求；请求结束后重试可能重新生成，不承诺避免重复计费。

### POST /api/island/adapt（可选，按钮触发）

请求：

    { "question": "…", "region": "cha",
      "cards": [ /* 当前岛可见卡 */ ],
      "priorChoices": ["用户此前的选择/反馈摘要", "…"] }

响应：

    { "ok": true, "plan": { /* 同 islandPlans 单岛结构 */ }, "provenance": { … } }

只在用户点「在线重规划」时调用，不阻塞到访；成功后新计划写入 state.pack.islandPlans 并存档、立即刷新当前岛任务（含已挂载模式的实时读取点），离岛后的过期响应会被忽略；失败时保留本地规则引导并如实提示。

## 六岛 输入 → 动作 → 适应 → 输出

| 岛 | 输入（卡类型） | 玩家动作 | 适应变化 | 输出 |
|---|---|---|---|---|
| 来路 lai | story | 沿小径点亮经历石，读正文与追问，可收下/标存疑 | 任务引用卡的 t 与 ask；存疑卡换成「审一审」措辞 | 点亮后显示卡 ask + 来源引用，完成后提示去比较 |
| 此地 cidi | fact | 在条件台查看数据/条件，逐条归档 | 已收条件在汇总里带追问；choice 问题把两个选项写进追问 | 汇总读数含来源引用与追问 |
| 岔路 cha | view | 拉动岔路杆看两种立场，可上对照桌 | 计划追问来自观点卡的 ask；上过对照桌的卡带「对照桌」前缀 | 对岸显示计划追问 + 来源引用，完成语引导点 Bloomy → 比较观点 |
| 遇见 yu | person | 阅读真实作者的来源摘要，回应与自身观察相符或不同 | AI 探索追问独立标注；具体态度进入重规划上下文 | 两位观点都回应后完成 |
| 未至 wei | blind | 雾门里读盲点证据并检查 | 证据首句做「雾中之证」，任务用盲点追问 | 打开传送门条件：三条主路都走过 |
| 成形 form | 全量 | 选 1–3 张证据卡，自己写暂时答案和未解问题 | 显示本包整合计划；「在线调整整合提示」结合已选证据和探索历史，保留用户草稿 | 保存成形卡与所选证据 |

话题适应性示例——「天亮了，鸟会叫吗」：cidi 岛追问引用鸟鸣卡自身的 ask（如「这个规律的前提是什么」）；cha 岛用观点卡各自的 ask 引导比较有材料支撑的解释——例如「清晨鸣叫是领地宣示」与「是求偶鸣唱」哪种解释有观察证据支持、各自忽略了什么，而不是拿「天亮」和「鸟叫」硬凑两个立场。换成「该画画还是上班」：cidi/cha 的 choice 追问自动变成「它把『画画』还是『上班』说得更有分量」。同样机制，不同措辞——任务文本取自本轮生成内容，不是固定模板。

各岛的真实决策（点亮哪块故事石、汇总哪些条件、过桥去了哪条岸、回应了谁、拨开了哪团雾、给哪两张卡命名了什么关系）通过 recordChoice 存入 state.regionChoices，按岛保留最近 12 条，作为 adapt 的 priorChoices 决策输入——收集进度之外，用户的岛上选择同样参与重规划。

## 来源引用与 provenance

- 卡片旁的来源链接只接受 http(s) 绝对地址，一律 `target="_blank" rel="noopener noreferrer"`，且以 textContent 写入，不进 innerHTML。
- 左上角问题贴纸下标注实际来源模型，例如 `LLM 生成 · amd/Qwen3.8-Flash-Next` / 本地规则生成 / 本地规则重建（legacy）/ 手工预设包。判定见 `src/game/adaptive.js` 的 `packOrigin`。
- 每岛任务条带徽标：LLM（后端 islandPlans 或在线 adapt）/ 规则（本地 derivePlan）/ 未标注。在线 adapt 成功后徽标显示在线 LLM。

## 诚实边界

**已实现（实际验收记录见 AMD-ZHIHU-ACCEPTANCE.md）**

1. 内容级：/api/world 返回的 LLM 知识包（五类卡 + 真实知乎来源 + provenance）整体持久化在 localStorage，刷新后原样恢复，不重新生成。
2. 声明式计划：后端可选 islandPlans 按六岛映射注入，校验 cardId 归属后截断使用；无 islandPlans 时本地 derivePlan 按 card.ask / 问题形状 / collected / marked / compares 派生规则级任务。
3. 规则级自适应仅在没有有效 LLM 声明式计划时生效。有效 LLM 计划优先；玩家反馈通过按钮提交后才参与新的在线计划。
4. 在线岛适配客户端：按钮触发 POST /api/island/adapt，priorChoices 按 决策（存疑/惊讶标记、对照对）→ 岛内选择记录（state.regionChoices）→ 近期收集 的优先级携带卡片标题而非裸 id；成功后新计划写入 state.pack.islandPlans 并存档（恢复后仍按 LLM 徽标显示）、当前岛任务实时刷新；离岛后的过期响应被忽略；失败保留规则引导并如实报错。

**边界（按事实区分）**

1. 自动 vs 按钮：/api/island/adapt 后端已实现，但前端只在用户点「在线重规划」时调用，不是每次到访自动 LLM 重规划；当前交付 = 内容级（LLM 包 + islandPlans）+ 规则级自适应 + 按钮触发的在线岛适配，不是逐岛实时二次生成。
2. 真实知乎发布：当前集成未实现。已核查 CLI 0.6.0 的 search zhihu/global、question answers、hot、answer 等读取能力，本轮只调用知乎搜索。检索摘要不等于全文，也不等于对所有事实的独立核验；前端不含凭据。
3. 模型生成受控的知识卡、任务提示和声明式计划，3D 动作、完成条件和解锁仍由应用代码执行，不运行模型生成的任意代码。

## 本地数据边界

localStorage 里的「漂流池」（历史问题）只存在于当前浏览器，不跨用户、不与知乎互通、不发布到任何远端。存档 key 为 `guiyi-save-v1`，v2 结构含整包 pack 与 packOrigin。

## 安全实现

- 全程无 eval / new Function；后端与模型文本一律经 normalize + textContent 或受控模板写入 DOM。
- 来源 URL 白名单校验后才能成为可点链接。

## 测试

    node --test

覆盖：worldClient 归一化与错误解析、adaptive 计划派生确定性 / 声明式校验 / 来源标注 / 存档可用性；具体数量见验收记录。构建：`npm run build`。
