// Vercel 部署专用：用知乎开放平台 HTTP API 替代本地 zhihu-cli。
// 返回形状与 CLI 一致（raw.Data.Items），normalize 直接复用 normalizeItems。

import { normalizeItems } from './zhihu.js';

export function createHttpZhihuClient({ accessSecret, timeoutMs = 15000, baseUrl = 'https://developer.zhihu.com' }) {
  async function request(path) {
    if (!accessSecret) throw { code: 'ZHIHU_NOT_CONFIGURED', status: 503, message: '知乎凭证未配置，请设置 ZHIHU_ACCESS_SECRET' };
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const resp = await fetch(baseUrl + path, {
        headers: {
          Authorization: 'Bearer ' + accessSecret,
          'X-Request-Timestamp': String(Math.floor(Date.now() / 1000)),
          'Content-Type': 'application/json'
        },
        signal: controller.signal,
        cache: 'no-store'
      });
      if (!resp.ok) {
        await resp.text().catch(() => '');
        const status = resp.status === 401 || resp.status === 403 ? 401 : 503;
        throw { code: status === 401 ? 'ZHIHU_CREDENTIAL_INVALID' : 'ZHIHU_HTTP_' + resp.status, status, message: status === 401 ? '知乎凭证无效或已过期，请更新 ZHIHU_ACCESS_SECRET' : '知乎服务暂不可用，请稍后重试' };
      }
      const text = await resp.text();
      try { return JSON.parse(text); }
      catch (err) {
        console.error('[zhihu-http] bad json:', text.slice(0, 300));
        throw { code: 'ZHIHU_BAD_JSON', message: '知乎 API 响应不是 JSON' };
      }
    } catch (err) {
      if (controller.signal.aborted) throw { code: 'ZHIHU_TIMEOUT', message: '知乎 API 超时' };
      throw err;
    } finally {
      clearTimeout(timer);
    }
  }

  return {
    available: Boolean(accessSecret),
    async searchZhihu(query, count = 5) {
      const raw = await request('/api/v1/content/zhihu_search?Query=' + encodeURIComponent(query) + '&Count=' + count);
      if (!raw || String(raw.Code) !== '0' || !Array.isArray(raw.Data && raw.Data.Items)) {
        console.error('[zhihu-http] search failed:', JSON.stringify(raw).slice(0, 300));
        throw { code: 'ZHIHU_SEARCH_FAILED', message: '知乎检索返回异常' };
      }
      return raw;
    },
    normalize(raw, maxItems = 10) {
      return normalizeItems(raw, maxItems);
    }
  };
}
