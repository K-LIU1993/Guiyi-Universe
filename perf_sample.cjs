const { chromium } = require(process.env.U_APP_PLAYWRIGHT);
const fs = require('node:fs');
const path = require('node:path');
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--enable-unsafe-swiftshader'] });
  const samples = [];
  for (const viewport of [{ width: 390, height: 844, name: 'mobile' }, { width: 1280, height: 800, name: 'desktop' }]) {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();
    await page.goto('http://localhost:5205/', { waitUntil: 'networkidle' });
    await page.waitForFunction(() => !!window.__visualMoments);
    const result = await page.evaluate(() => new Promise(resolve => {
      const started = performance.now(); let frames = 0; const calls = [], triangles = [];
      function sample(now) {
        frames++; const info = window.__perf.renderer.info.render;
        calls.push(info.calls); triangles.push(info.triangles);
        if (now - started < 8500) return requestAnimationFrame(sample);
        const gl = window.__perf.renderer.getContext();
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        resolve({ fps: (frames - 1) * 1000 / (now - started), durationMs: now - started, frames,
          drawCallsMax: Math.max(...calls), trianglesMax: Math.max(...triangles),
          renderer: ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER), visualReady: true });
      }
      requestAnimationFrame(sample);
    }));
    samples.push({ viewport: viewport.name, result, softwareRaster: true, durationSeconds: 8.5, timestamp: new Date().toISOString() });
    fs.mkdirSync('evidence', { recursive: true });
    await page.screenshot({ path: path.join('evidence', 'p1-' + viewport.name + '-overview.png'), fullPage: true });
    await context.close();
  }
  fs.writeFileSync('evidence/perf-sample.json', JSON.stringify(samples, null, 2));
  console.log(JSON.stringify(samples));
  await browser.close();
})().catch((error) => { console.error(error); process.exit(1); });
