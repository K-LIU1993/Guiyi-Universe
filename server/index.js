import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { createApp } from './app.js';
import { loadSettings } from './lib/config.js';
import { existsSync, readFileSync } from 'node:fs';

function loadLocalEnv() {
  const path = fileURLToPath(new URL('../.env.local', import.meta.url));
  if (!existsSync(path)) return {};
  const out = {};
  for (const line of readFileSync(path, 'utf8').split(/\r?\n/)) {
    const m = /^\s*([A-Z][A-Z0-9_]*)\s*=\s*(.*)\s*$/.exec(line);
    if (m && !m[1].startsWith('VERCEL_')) out[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
  }
  return out;
}

const settings = loadSettings({
  ...loadLocalEnv(),
  ...process.env,
  GUIYI_ZHIHU_ENV_FILE: process.env.GUIYI_ZHIHU_ENV_FILE || fileURLToPath(new URL('../../knowledge-islands/.env.local', import.meta.url))
});
const server = createServer(createApp({ settings }));
server.requestTimeout = 300_000;
server.listen(settings.port, settings.host, () => console.log(`归一 API 已启动：http://${settings.host}:${settings.port}`));
