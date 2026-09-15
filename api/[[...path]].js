// Vercel Serverless 入口：复用 server/app.js 全部路由与校验逻辑，
// 仅把本机依赖（zhihu-cli、OpenCodex 代理）替换为知乎开放平台 HTTP API 与直答。

import { createApp } from '../server/app.js';
import { loadSettings } from '../server/lib/config.js';
import { createHttpZhihuClient } from '../server/lib/zhihu-http.js';
import { createZhidaLlmClient } from '../server/lib/llm-zhida.js';

const settings = loadSettings({
  ...process.env,
  GUIYI_ZHIHU_ENV_FILE: '',
  GUIYI_LLM_MODEL: process.env.GUIYI_LLM_MODEL || 'zhida-thinking-1p5'
});

const secret = (process.env.ZHIHU_ACCESS_SECRET || '').trim();

const app = createApp({
  settings,
  clients: () => ({
    zhihu: createHttpZhihuClient({ accessSecret: secret, timeoutMs: settings.zhihuTimeoutMs }),
    llm: createZhidaLlmClient({
      accessSecret: secret,
      model: settings.llmModel,
      timeoutMs: Math.min(settings.llmTimeoutMs, 48000)
    })
  })
});

export default async function handler(req, res) {
  await app(req, res);
}
