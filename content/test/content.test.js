import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdir, writeFile, mkdtemp } from 'node:fs/promises';
import { createServer } from 'node:http';
import { schemas, seedSchema } from '../../src/content/schemas.js';
import { validateTemplate, validateSeed } from '../../src/content/validate.js';
import { loadCatalog } from '../../server/content/catalog.js';
import { createContentApp } from '../../server/content/app.js';
const source = { url: 'https://example.org/review-fixture', author: '测试夹具（非真实入库内容）', fetchedAt: '2026-09-17T00:00:00Z', excerpt: '测试原文', verifiedBy: 'fixture-reviewer' };
const fixtures = {
  'real-question': { text: source.excerpt, source },
  'real-answer': { questionId: 'question-fixture', text: source.excerpt, source },
  viewpoint: { text: '待讨论观点', scope: '教学情境', sourceIds: ['fixture-source'] },
  'condition-scenario': { context: '教学时段', condition: { field: 'time.weekly_hours_plan', op: 'gte', value: 8, label: '至少8小时' } },
  'teaching-sample': { title: '虚构教学', excerpt: '虚构教学摘录', isTeachingSample: true },
};
for (const [name, fields] of Object.entries(fixtures)) {
  const value = { template: name, id: 'fixture', contentVersion: '1.0.0', provenance: { level: name.startsWith('real-') ? 'real' : 'teaching', createdBy: name.startsWith('real-') ? 'human' : 'ai' }, ...fields };
  test(name + ': accepts controlled fields and rejects invalid/missing fields', () => {
    assert.equal(validateTemplate(name, value).ok, true);
    for (const key of Object.keys(value)) { const invalid = structuredClone(value); delete invalid[key]; assert.equal(validateTemplate(name, invalid).ok, false, key); }
    assert.equal(validateTemplate(name, { ...value, formingCard: {} }).ok, false);
    assert.equal(validateTemplate(name, { ...value, contentVersion: '1x0x0' }).ok, false);
    const bad = structuredClone(value);
    if (name.startsWith('real-')) { bad.provenance.createdBy = 'ai'; }
    else if (name === 'viewpoint') { bad.provenance.level = 'real'; }
    else if (name === 'condition-scenario') { bad.condition.field = 'life.success'; }
    else { bad.isTeachingSample = false; }
    assert.equal(validateTemplate(name, bad).ok, false);
  });
}
test('exported JSON Schemas match the runtime schema source', async () => {
  for (const [name, schema] of Object.entries({ ...schemas, seed: seedSchema })) assert.deepEqual(JSON.parse(await readFile(new URL('../schemas/' + name + '.schema.json', import.meta.url))), schema);
});
test('real content rejects paraphrases, invalid dates and credential URLs', () => {
  const valid = { template: 'real-question', id: 'fixture', contentVersion: '1.0.0', provenance: { level: 'real', createdBy: 'human' }, ...fixtures['real-question'] };
  for (const patch of [{ text: 'AI改写' }, { source: { ...source, fetchedAt: '2026-02-30T00:00:00Z' } }, { source: { ...source, url: 'https://user:secret@example.org' } }, { text: '   ' }]) assert.equal(validateTemplate('real-question', { ...valid, ...patch }).ok, false);
  assert.equal(validateTemplate('__proto__', {}).ok, false);
});
test('three seed packs pass, reject malformed boundaries', async () => {
  const catalog = await loadCatalog(); assert.equal(catalog.size, 3);
  const manifest = JSON.parse(await readFile(new URL('../release-manifest.json', import.meta.url)));
  assert.deepEqual(Object.fromEntries([...catalog].map(([id, item]) => [id, item.sha256])), manifest);
  for (const { seed } of catalog.values()) {
    assert.equal(validateSeed(seed).ok, true);
    for (const mutate of [s => delete s.sources[0].excerpt, s => s.sources[0].isTeachingSample = false, s => s.sources[0].author = '假托作者', s => s.sources[1].id = s.sources[0].id, s => s.conditions[0].field = 'life.success', s => s.conditions[0].value = 169, s => s.conditions[0].value = '8', s => s.formingCard = {}, s => s.sources.pop()]) {
      const invalid = structuredClone(seed); mutate(invalid); assert.equal(validateSeed(invalid).ok, false);
    }
  }
});
test('HTTP list/get, pinned version, query errors and read-only enforcement', async (t) => {
  const server = createServer(await createContentApp());
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => { server.close(resolve); server.closeAllConnections(); }));
  const origin = 'http://127.0.0.1:' + server.address().port;
  const list = await fetch(origin + '/api/content/list'); assert.equal(list.status, 200);
  const { items } = await list.json(); assert.equal(items.length, 3);
  for (const item of items) {
    const response = await fetch(origin + '/api/content/get?id=' + item.id);
    assert.equal(response.status, 200); const data = await response.json();
    assert.equal(data.sha256, item.sha256); assert.equal(validateSeed(data.content).ok, true);
  }
  for (const [path, status] of [['/api/content/get?id=work-passion', 200], ['/api/content/get', 400], ['/api/content/get?id=missing', 404], ['/api/content/get?id=../../secret', 400], ['/api/content/get?id=a&id=b', 400], ['/api/content/get?id=a&x=b', 400], ['/api/content/list?x=1', 400], ['/missing', 404]]) assert.equal((await fetch(origin + path)).status, status);
  for (const method of ['POST', 'PUT', 'DELETE', 'PATCH']) assert.equal((await fetch(origin + '/api/content/list', { method })).status, 405);
});
test('invalid content never enters catalog; ambiguous versions require explicit pin', async (t) => {
  // Retain bounded fixtures under authorized content/evidence, never OS temp.
  const parent = new URL('../evidence/', import.meta.url); await mkdir(parent, { recursive: true });
  const { pathToFileURL } = await import('node:url');
  const { fileURLToPath } = await import('node:url');
  const dir = await mkdtemp(fileURLToPath(new URL('test-run-', parent)));
  const root = pathToFileURL(dir + '/');
  const seed = structuredClone((await loadCatalog()).values().next().value.seed);
  const folder = new URL(seed.id + '/', root); await mkdir(folder);
  await writeFile(new URL('1.0.0.json', folder), JSON.stringify(seed));
  const bad = { ...seed, contentVersion: '1.0.1', formingCard: {} };
  await writeFile(new URL('1.0.1.json', folder), JSON.stringify(bad));
  await assert.rejects(loadCatalog(root), /INVALID_CONTENT/);
  await writeFile(new URL('1.0.1.json', folder), JSON.stringify({ ...seed, contentVersion: '1.0.1' }));
  const server = createServer(await createContentApp({ seedRoot: root }));
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => { server.close(resolve); server.closeAllConnections(); }));
  const origin = 'http://127.0.0.1:' + server.address().port;
  assert.equal((await fetch(origin + '/api/content/get?id=' + seed.id)).status, 409);
  assert.equal((await fetch(origin + '/api/content/get?id=' + seed.id + '@1.0.0')).status, 200);
});
