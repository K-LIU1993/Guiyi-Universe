// Vercel 部署专用：用知乎直答 chat/completions 替代本机 OpenCodex 代理。
// 接口与 lib/llm.js 的客户端一致：generate({system,user,maxTokens}) → 文本。

import { HttpError } from './respond.js';

export function createZhidaLlmClient({ accessSecret, model = 'zhida-thinking-1p5', timeoutMs = 48000, baseUrl = 'https://developer.zhihu.com/v1/chat/completions' }) {
  let lastResponse = null;
  return {
    configured: Boolean(accessSecret),
    get lastResponse() { return lastResponse; },
    async generate({ system, user, maxTokens }) {
      if (!accessSecret) throw new HttpError(503, 'LLM_NOT_CONFIGURED', '直答凭证未配置，请设置 ZHIHU_ACCESS_SECRET');
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      let resp;
      try {
        resp = await fetch(baseUrl, {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + accessSecret,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model,
            messages: [
              { role: 'system', content: system },
              { role: 'user', content: user }
            ],
            stream: false,
            max_tokens: maxTokens || 12000
          }),
          signal: controller.signal
        });
      } catch (err) {
        if (controller.signal.aborted) throw new HttpError(504, 'LLM_TIMEOUT', '直答请求超时');
        throw new HttpError(502, 'LLM_UNREACHABLE', '直答服务不可达');
      } finally {
        clearTimeout(timer);
      }
      if (!resp.ok) {
        await resp.text().catch(() => '');
        if (resp.status === 401 || resp.status === 403) throw new HttpError(401, 'LLM_CREDENTIAL_INVALID', '直答凭证无效或已过期，请更新 ZHIHU_ACCESS_SECRET');
        throw new HttpError(503, 'LLM_UPSTREAM_ERROR', '直答服务暂不可用，请稍后重试');
      }
      let data;
      try { data = await resp.json(); } catch (err) { throw new HttpError(502, 'LLM_BAD_RESPONSE', '直答响应不是 JSON'); }
      lastResponse = { model, returnedModel: data && data.model || null, responseId: data && data.id || null, usage: data && data.usage || null };
      const content = data && Array.isArray(data.choices) && data.choices[0] && data.choices[0].message
        ? data.choices[0].message.content
        : null;
      if (typeof content !== 'string' || !content.trim()) throw new HttpError(502, 'LLM_EMPTY', '直答返回内容为空');
      return content;
    }
  };
}
