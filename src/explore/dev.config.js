import { mergeConfig } from 'vite';
import base from '../../vite.config.js';
export default mergeConfig(base, { server: { port: 5207, strictPort: true, proxy: { '/api': { target: 'http://127.0.0.1:5203', changeOrigin: false } } } });
