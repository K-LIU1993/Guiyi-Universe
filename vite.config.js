import { defineConfig } from 'vite';

export default defineConfig({
  server: { port: 5173, strictPort: false, proxy: { '/api': { target: 'http://127.0.0.1:5201', changeOrigin: false } } },
  preview: { proxy: { '/api': { target: 'http://127.0.0.1:5201', changeOrigin: false } } },
  build: { chunkSizeWarningLimit: 1500, rollupOptions: { input: { main: "index.html", meet: "meet.html" } } }
});
