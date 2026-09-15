import { execFile } from 'node:child_process';
import { cleanText, isHttpUrl } from './sanitize.js';

const EXCERPT_KEYS = ['ContentText', 'Excerpt', 'Summary', 'Description'];

export function extractItems(raw) {
  if (!raw || typeof raw !== 'object') return [];
  if (Array.isArray(raw.Data && raw.Data.Items)) return raw.Data.Items;
  if (Array.isArray(raw.data && raw.data.items)) return raw.data.items;
  if (Array.isArray(raw.items)) return raw.items;
  return [];
}

export function normalizeItems(raw, maxItems) {
  const seenUrls = new Set();
  const out = [];
  for (const item of extractItems(raw)) {
    if (!item || typeof item !== 'object') continue;
    const title = cleanText(item.Title, 120);
    const url = typeof item.Url === 'string' && isHttpUrl(item.Url.trim()) ? item.Url.trim() : null;
    if (!title || !url || seenUrls.has(url)) continue;
    seenUrls.add(url);
    let excerpt = '';
    for (const key of EXCERPT_KEYS) {
      const v = cleanText(item[key], 280);
      if (v) { excerpt = v; break; }
    }
    out.push({
      id: 'z' + (out.length + 1),
      title,
      url,
      author: cleanText(item.AuthorName, 40) || '知乎用户',
      excerpt
    });
    if (out.length >= maxItems) break;
  }
  return out;
}

export function createZhihuClient({ cliPath, accessSecret, timeoutMs = 30_000 }) {
  const childEnv = { ...process.env, ...(accessSecret ? { ZHIHU_ACCESS_SECRET: accessSecret } : {}) };

  function run(args) {
    return new Promise((resolve, reject) => {
      if (!cliPath) {
        reject({ code: 'ZHIHU_CLI_MISSING', message: 'Zhihu CLI 未配置' });
        return;
      }
      execFile(
        cliPath,
        args,
        { env: childEnv, timeout: timeoutMs, maxBuffer: 8 * 1024 * 1024, windowsHide: true, shell: false },
        (err, stdout, stderr) => {
          if (err) {
            if (err.killed) {
              reject({ code: 'ZHIHU_TIMEOUT', message: 'Zhihu CLI 超时' });
              return;
            }
            if (err.code === 'ENOENT') {
              reject({ code: 'ZHIHU_CLI_MISSING', message: 'Zhihu CLI 不存在' });
              return;
            }
            let cliCode = 'ZHIHU_CLI_ERROR';
            let cliMessage = cleanText(stderr, 200) || 'Zhihu CLI 调用失败';
            for (const chunk of [stderr, stdout]) {
              try {
                const parsed = JSON.parse(String(chunk));
                if (parsed && parsed.ok === false && parsed.error) {
                  cliCode = cleanText(parsed.error.code, 40) || cliCode;
                  cliMessage = cleanText(parsed.error.message, 200) || cliMessage;
                  break;
                }
              } catch (parseErr) { /* 非 JSON 输出按原样使用 */ }
            }
            reject({ code: 'ZHIHU_ERROR', cliCode, message: cliMessage });
            return;
          }
          let parsed;
          try {
            parsed = JSON.parse(String(stdout));
          } catch (parseErr) {
            reject({ code: 'ZHIHU_BAD_OUTPUT', message: 'Zhihu CLI 输出不是 JSON' });
            return;
          }
          if (parsed && parsed.Code !== undefined && String(parsed.Code) !== '0') {
            reject({ code: 'ZHIHU_API_ERROR', message: '知乎 API 返回错误' });
            return;
          }
          if (parsed && parsed.ok === false && parsed.error) {
            reject({
              code: 'ZHIHU_ERROR',
              cliCode: cleanText(parsed.error.code, 40) || 'ZHIHU_ERROR',
              message: cleanText(parsed.error.message, 200) || 'Zhihu CLI 返回错误'
            });
            return;
          }
          resolve(parsed);
        }
      );
    });
  }

  return {
    available: Boolean(cliPath),
    async searchZhihu(query, count = 5) {
      return run(['search', 'zhihu', '--query', query, '--count', String(count)]);
    },
    async searchGlobal(query, count = 5) {
      return run(['search', 'global', '--query', query, '--count', String(count)]);
    },
    async questionAnswers(questionUrl, limit = 3) {
      return run(['question', 'answers', '--question-url', questionUrl, '--limit', String(limit)]);
    },
    async hot(limit = 10) {
      return run(['hot', '--limit', String(limit)]);
    },
    normalize(raw, maxItems = 10) {
      return normalizeItems(raw, maxItems);
    }
  };
}
