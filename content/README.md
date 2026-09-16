# 受控内容管线 v1

五类模板位于 schemas/*.schema.json；src/content/validate.js 提供对应具名校验器和 validateTemplate。无依赖，不调用模型、外部来源或凭证模块。

三级标注：real（真实原文，human 导入且必须有 URL/作者/摘录/复核人）、teaching（虚构教学）、ai_inference（AI 推断，不能标为真实）。真实问答 text 必须与复核摘录逐字相同。结构校验不能证明来源真实性，verifiedBy 需要上游人工核验，测试夹具不是可发布的真实内容。本次所有 seed 均为 AI 填充的 teaching；不包含真实人物、伪造研究或成形卡。

seed 的 format 为 guiyi.divergence-island.seed，内层 sources/claims/conditions 对齐冻结规则契约。外层 schemaVersion、contentVersion、provenance 为内容层扩展；传入 createInitialState 时选取这三个数组即可，ID 由规则层重新分配。条件仅支持白名单两个字段与数值 eq/neq/gte/lte（0–168 小时），是规则契约的受控子集，不推断人生结论。

运行：

    node --test content/test/
    node content/validate-seeds.mjs
    npm.cmd run build
    node server/content/index.js 0

启动输出实际本地端口。GET /api/content/list 返回含版本的 id；GET /api/content/get?id=work-passion@1.0.0 返回原包与 SHA-256。仅有一个版本时支持无版本 ID；多个版本时返回 409 VERSION_REQUIRED，避免静默切换。未知 ID 为 404，坏查询 400，写入方法 405。独立服务仅监听 127.0.0.1，不修改现有服务，不自动挂载到 Vite 或游戏 UI。

每次启动先完整校验全部 seed；任一包失败则不创建处理器、不监听。请求 ID 只查内存 Map，不拼磁盘路径。服务运行中使用启动快照。

版本策略：已发布文件 seeds/<id>/<contentVersion>.json 保留；改文案也递增版本并新建文件，在 CHANGELOG 添加原因及校验记录，禁止原地覆写。build-initial-seeds.mjs 仅用于初始生成，wx 拒绝覆盖；发布哈希由 release-manifest.json 固定并通过测试检验。JSON Schema 描述结构，逐字原文、ID 唯一、教学来源禁止冒充等语义由校验器补充。语义真实性仍需人工来源审查。
