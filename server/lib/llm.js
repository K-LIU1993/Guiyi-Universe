import { HttpError } from './respond.js';

export function createLlmClient({ baseUrl, model, apiKey, timeoutMs = 120_000, maxOutputTokens = 6000 }) {
  const configured = Boolean(baseUrl && apiKey);
  let lastResponse = null;
  return {
    configured,
    get lastResponse() { return lastResponse; },
    async generate({ system, user, maxTokens }) {
      if (!configured) {
        throw new HttpError(503, 'LLM_NOT_CONFIGURED', 'OpenCodex API key 未配置');
      }
      let resp;
      try {
        const isChatCompletions = /\/chat\/completions\/?$/i.test(baseUrl || '');
        const headers = {
          'content-type': 'application/json',
          ...(isChatCompletions ? { Authorization: 'Bearer ' + apiKey } : { 'X-OpenCodex-API-Key': apiKey })
        };
        const body = isChatCompletions
          ? {
              model,
              stream: false,
              messages: [{ role: 'system', content: system }, { role: 'user', content: user }],
              max_tokens: maxTokens || maxOutputTokens
            }
          : {
              model,
              stream: false,
              reasoning: { effort: 'low' },
              text: { format: { type: 'json_object' } },
              input: [{ role: 'system', content: system }, { role: 'user', content: user }],
              max_output_tokens: maxTokens || maxOutputTokens
            };
        resp = await fetch(baseUrl, {
          method: 'POST',
          headers,
          body: JSON.stringify(body),
          signal: AbortSignal.timeout(timeoutMs)
        });
      } catch (err) {
        if (err && err.name === 'TimeoutError') {
          throw new HttpError(504, 'LLM_TIMEOUT', 'LLM 请求超时');
        }
        throw new HttpError(502, 'LLM_UNREACHABLE', 'LLM 服务不可达');
      }
      if (!resp.ok) {
        await resp.text().catch(() => '');
        if (resp.status === 401 || resp.status === 403) throw new HttpError(401, 'LLM_CREDENTIAL_INVALID', 'LLM credential invalid or expired; update API key');
        throw new HttpError(503, 'LLM_UPSTREAM_ERROR', 'LLM service is temporarily unavailable; retry later');
      }
      let data;
      try {
        data = await resp.json();
      } catch (err) {
        throw new HttpError(502, 'LLM_BAD_RESPONSE', 'LLM 响应不是 JSON');
      }
      lastResponse = { requestedModel: model, returnedModel: data.model || null, responseId: data.id || null, status: data.status || null, usage: data.usage || null };
      if (data.status === 'incomplete') throw new HttpError(502, 'LLM_INCOMPLETE', '模型输出达到长度上限，请重试或调整生成长度');
      return extractOutputText(data);
    }
  };
}

export function extractOutputText(data) {
  if (typeof data.output_text === 'string' && data.output_text.trim()) {
    return data.output_text;
  }
  if (Array.isArray(data.output)) {
    const parts = [];
    for (const item of data.output) {
      if (item && Array.isArray(item.content)) {
        for (const block of item.content) {
          if (block && block.type === 'output_text' && typeof block.text === 'string') {
            parts.push(block.text);
          }
        }
      }
    }
    const joined = parts.join('').trim();
    if (joined) return joined;
  }
  const choiceText = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
  if (typeof choiceText === 'string' && choiceText.trim()) {
    return choiceText;
  }
  throw new HttpError(502, 'LLM_EMPTY_OUTPUT', 'LLM 未返回文本');
}

export function extractJsonText(text) {
  if (typeof text !== 'string' || !text.trim()) {
    throw new HttpError(502, 'LLM_BAD_JSON', 'LLM 输出为空');
  }
  let candidate = text.trim();
  const fence = /\`\`\`(?:json)?\s*([\s\S]*?)\`\`\`/m.exec(candidate);
  if (fence && fence[1].trim()) candidate = fence[1].trim();
  const start = candidate.indexOf('{');
  const end = candidate.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) {
    throw new HttpError(502, 'LLM_BAD_JSON', 'LLM 输出中未找到 JSON 对象');
  }
  let parsed;
  try {
    parsed = JSON.parse(candidate.slice(start, end + 1));
  } catch (err) {
    throw new HttpError(502, 'LLM_BAD_JSON', 'LLM 输出 JSON 解析失败');
  }
  if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new HttpError(502, 'LLM_BAD_JSON', 'LLM 输出不是 JSON 对象');
  }
  return parsed;
}
