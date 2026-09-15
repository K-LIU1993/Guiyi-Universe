// Vercel 部署专用：用知乎开放平台 HTTP API 替代本地 zhihu-cli。
// 返回形状与 CLI 一致（raw.Data.Items），normalize 直接复用 normalizeItems。

import { normalizeItems } from './zhihu.js';

export function createHttpZhihuClient({ accessSecret, timeoutMs = 15000, baseUrl = 'https://developer.zhihu.com' }) {
  async function request(path) {
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
      if (!resp.ok) throw { code: 'ZHIHU_HTTP_' + resp.status, message: '知乎 API HTTP ' + resp.status };
      return await resp.json();
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
        throw { code: 'ZHIHU_SEARCH_FAILED', message: '知乎检索返回异常' };
      }
      return raw;
    },
    normalize(raw, maxItems = 10) {
      return normalizeItems(raw, maxItems);
    }
  };
}
