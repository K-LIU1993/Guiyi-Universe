import { loadCatalog } from './catalog.js';
function sendJson(res, status, body) {
  const data = Buffer.from(JSON.stringify(body));
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': data.length, 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'no-store' });
  res.end(data);
}
export async function createContentApp(options = {}) {
  const catalog = await loadCatalog(options.seedRoot);
  return function contentApp(req, res) {
    const fail = (status, code) => sendJson(res, status, { ok: false, error: { code } });
    let url;
    try { url = new URL(req.url, 'http://localhost'); } catch { return fail(400, 'INVALID_URL'); }
    if (!['/api/content/list', '/api/content/get'].includes(url.pathname)) return fail(404, 'NOT_FOUND');
    if (req.method !== 'GET') { res.setHeader('Allow', 'GET'); return fail(405, 'METHOD_NOT_ALLOWED'); }
    if (url.pathname === '/api/content/list') {
      if (url.search) return fail(400, 'INVALID_QUERY');
      const items = [...catalog.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([id, { seed, sha256 }]) => ({ id, seedId: seed.id, contentVersion: seed.contentVersion, title: seed.title, provenance: seed.provenance, isTeachingSample: seed.isTeachingSample, sha256 }));
      return sendJson(res, 200, { ok: true, items });
    }
    if ([...url.searchParams.keys()].some((key) => key !== 'id') || url.searchParams.getAll('id').length !== 1) return fail(400, 'INVALID_QUERY');
    const id = url.searchParams.get('id');
    if (!/^[a-z][a-z0-9-]{0,79}(?:@[1-9][0-9]*\.[0-9]+\.[0-9]+)?$/.test(id)) return fail(400, 'INVALID_ID');
    let item = catalog.get(id);
    if (!id.includes('@')) {
      const matches = [...catalog.values()].filter(({ seed }) => seed.id === id);
      if (matches.length > 1) return fail(409, 'VERSION_REQUIRED');
      item = matches[0];
    }
    if (!item) return fail(404, 'CONTENT_NOT_FOUND');
    return sendJson(res, 200, { ok: true, content: item.seed, sha256: item.sha256 });
  };
}
