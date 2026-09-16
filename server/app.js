import { loadSettings, createCredentialProvider } from './lib/config.js';
import { createLlmClient } from './lib/llm.js';
import { createZhihuClient } from './lib/zhihu.js';
import { generateWorldPack } from './lib/pack.js';
import { generateIslandAdapt } from './lib/adapt.js';
import { HttpError, readJsonBody, sendJson, sendError } from './lib/respond.js';

export function createApp(options = {}) {
  const settings = options.settings || loadSettings();
  const getCredentials = options.credentials || createCredentialProvider(settings);
  const pending = new Map();
  let active = 0;

  function clients() {
    const credentials = getCredentials();
    return {
      llm: options.clients?.llm || createLlmClient({
        baseUrl: settings.llmBaseUrl,
        model: settings.llmModel,
        apiKey: credentials.apiKeySecret,
        timeoutMs: settings.llmTimeoutMs,
        maxOutputTokens: settings.llmMaxOutputTokens
      }),
      zhihu: options.clients?.zhihu || createZhihuClient({
        cliPath: credentials.zhihu.cliPath,
        accessSecret: credentials.accessSecret,
        timeoutMs: settings.zhihuTimeoutMs
      })
    };
  }

  return async function app(req, res, next) {
    const pathname = (req.url || '').split('?')[0];
    if (!pathname.startsWith('/api/')) {
      if (next) return next();
      return sendError(res, 404, 'NOT_FOUND', '接口不存在');
    }
    try {
      const origin = req.headers.origin;
      if (origin && origin !== settings.allowedOrigin) {
        let sameOrigin = false;
        try { sameOrigin = new URL(origin).host === req.headers.host; } catch {}
        if (!sameOrigin) throw new HttpError(403, 'ORIGIN_DENIED', '请从归一页面调用此接口');
      }
      if (origin && origin === settings.allowedOrigin) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Vary', 'Origin');
      }
      if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.writeHead(204); res.end(); return;
      }
      if (req.method === 'GET' && pathname === '/api/llm/health') {
        const credentials = getCredentials();
        return sendJson(res, 200, {
          ok: Boolean(credentials.llm.hasApiKey && credentials.zhihu.accessSecretLoaded),
          validation: { configuration: Boolean(credentials.llm.hasApiKey && credentials.zhihu.accessSecretLoaded), performed: false },
          llm: { ...credentials.llm, model: settings.llmModel, baseUrl: settings.llmBaseUrl },
          zhihu: {
            cliFound: credentials.zhihu.cliFound,
            accessSecretLoaded: credentials.zhihu.accessSecretLoaded,
            envFileFound: credentials.zhihu.envFileFound
          },
          limits: { maxBodyBytes: settings.maxBodyBytes, maxConcurrent: settings.maxConcurrent }
        });
      }
      if (req.method === 'GET' && pathname === '/api/health') return sendJson(res, 200, { ok: true });
      if (!['/api/world', '/api/island/adapt'].includes(pathname)) throw new HttpError(404, 'NOT_FOUND', '接口不存在');
      if (req.method !== 'POST') throw new HttpError(405, 'METHOD_NOT_ALLOWED', '请使用 POST');
      if (!(req.headers['content-type'] || '').toLowerCase().startsWith('application/json')) throw new HttpError(415, 'JSON_REQUIRED', '请求必须使用 application/json');
      if (Number(req.headers['content-length']) > settings.maxBodyBytes) throw new HttpError(413, 'BODY_TOO_LARGE', '请求内容过大');
      const body = await readJsonBody(req, settings.maxBodyBytes);
      if (pathname === '/api/island/adapt') {
        if (active >= settings.maxConcurrent) throw new HttpError(429, 'BUSY', '生成服务忙，请稍后重试');
        active++;
        try { return sendJson(res, 200, await (options.adapt || generateIslandAdapt)({ body, settings, ...clients() })); }
        finally { active--; }
      }
      const question = String(body.question ?? body.q ?? '').trim();
      if (question.length < 2 || question.length > 80) throw new HttpError(422, 'INVALID_QUESTION', '问题需为 2–80 个字符');
      let generation = pending.get(question);
      if (!generation) {
        if (active >= settings.maxConcurrent) throw new HttpError(429, 'BUSY', '生成服务忙，请稍后重试');
        active++;
        generation = Promise.resolve().then(() => generateWorldPack({ question, options: body, settings, ...clients() }));
        pending.set(question, generation);
        generation.finally(() => { active--; pending.delete(question); }).catch(() => {});
      }
      const pack = await generation;
      if (!res.destroyed && !res.writableEnded) sendJson(res, 200, pack);
    } catch (error) {
      if (res.destroyed || res.writableEnded) return;
      if (error instanceof HttpError) return sendError(res, error.status, error.code, error.message, error.extra);
      sendError(res, 500, 'INTERNAL_ERROR', '生成服务发生内部错误，请重试');
    }
  };
}
