import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { createApp } from './app.js';
import { loadSettings } from './lib/config.js';

const settings = loadSettings({
  ...process.env,
  GUIYI_ZHIHU_ENV_FILE: process.env.GUIYI_ZHIHU_ENV_FILE || fileURLToPath(new URL('../../knowledge-islands/.env.local', import.meta.url))
});
const server = createServer(createApp({ settings }));
server.requestTimeout = 300_000;
server.listen(settings.port, settings.host, () => console.log(`归一 API 已启动：http://${settings.host}:${settings.port}`));
