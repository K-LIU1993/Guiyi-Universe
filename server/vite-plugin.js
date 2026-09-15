import { createApp } from './app.js';

export function guiyiBackendPlugin(options = {}) {
  const middleware = createApp(options);
  return {
    name: 'guiyi-backend',
    configureServer(server) { server.middlewares.use(middleware); },
    configurePreviewServer(server) { server.middlewares.use(middleware); }
  };
}

export default guiyiBackendPlugin;
