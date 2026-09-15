import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createApp } from '../app.js';
import { loadSettings, readApiKeySecret, loadZhihuAccessSecret } from '../lib/config.js';
import { validatePack, validatePlan, TYPE_REGION, REGIONS } from '../lib/validate.js';
import { extractJsonText } from '../lib/llm.js';
import { generateIslandAdapt } from '../lib/adapt.js';

test('island adaptation repairs malformed schema once and keeps card validation', async () => {
  const cards = fixture().cards;
  let calls = 0;
  const result = await generateIslandAdapt({ body: { question: '测试问题', region: 'form', cards, priorChoices: ['已选依据'] }, settings: { llmModel: 'test' }, llm: { generate: async () => ++calls === 1 ? '{"hint":"缺少任务数组"}' : JSON.stringify(fixture().islandPlans.form) } });
  assert.equal(calls, 2);
  assert.equal(result.provenance.attempts, 2);
  assert.ok(result.plan.steps.every(step => cards.some(card => card.id === step.cardId)));
  calls = 0;
  await assert.rejects(generateIslandAdapt({ body: { question: '测试问题', region: 'form', cards }, settings: {}, llm: { generate: async () => { calls++; return '{"steps":[{"cardId":"foreign","prompt":"错误引用"}]}'; } } }), /不存在的卡片/);
  assert.equal(calls, 2);
});

test('island adaptation does not retry upstream failures', async () => {
  let calls = 0;
  await assert.rejects(generateIslandAdapt({ body: { question: '测试问题', region: 'form', cards: fixture().cards }, settings: {}, llm: { generate: async () => { calls++; throw Object.assign(new Error('upstream'), { code: 'LLM_TIMEOUT' }); } } }), /upstream/);
  assert.equal(calls, 1);
});

const sources = [{ id: 'z1', title: '来源标题', author: '来源作者', url: 'https://www.zhihu.com/question/1/answer/2', excerpt: '来源摘要内容' }];
function fixture() {
  const cards = Object.keys(TYPE_REGION).flatMap(type => [1, 2].map(n => ({ id: type + n, type, t: '具体卡片标题', who: '模型尝试编写的名字', body: ['整理后的来源摘要。', '待检查的解释。'], ask: '请检查哪一项证据？', tags: ['证据'], sourceIds: ['z1'] })));
  const islandPlans = Object.fromEntries(REGIONS.map(region => [region, { hint: '比较证据', steps: cards.filter(card => region === 'form' || TYPE_REGION[card.type] === region).map(card => ({ cardId: card.id, prompt: '检查这张卡是否支持你的判断' })), completion: '写下还缺的证据', relHints: [] }]));
  return { sub: '主题探索', cards, islandPlans };
}

test('reject malformed JSON, missing card types, unknown citations and foreign plan cards', () => {
  assert.throws(() => extractJsonText('not JSON'), /JSON/);
  const missing = fixture(); missing.cards = missing.cards.filter(card => card.type !== 'blind');
  assert.throws(() => validatePack(missing, { question: '测试问题', sources }), /完整卡片/);
  const invalid = fixture(); invalid.cards[0].sourceIds = ['invented'];
  assert.throws(() => validatePack(invalid, { question: '测试问题', sources }), /不存在的来源/);
  assert.throws(() => validatePlan({ steps: [{ cardId: 'foreign', prompt: '操作' }] }, fixture().cards), /不存在的卡片/);
});

test('person identity and excerpt come from real retrieval; unsourced content is labeled', () => {
  const input = fixture(); input.cards[0].sourceIds = [];
  const pack = validatePack(input, { question: '原始问题', sources, withIslandPlans: true });
  assert.equal(pack.q, '原始问题');
  assert.match(pack.cards[0].body[0], /不是已证实/);
  const person = pack.cards.find(card => card.type === 'person');
  assert.equal(person.quote, sources[0].excerpt);
  assert.match(person.who, /来源作者/);
  assert.equal(Object.keys(pack.islandPlans).length, 6);
});

test('model scalar body is normalized without inventing content; empty body still fails', () => {
  const input = fixture();
  input.cards[0].body = '模型确实生成的正文。';
  const pack = validatePack(input, { question: '测试问题', sources });
  assert.deepEqual(pack.cards[0].body, ['模型确实生成的正文。']);
  input.cards[0].body = '';
  assert.throws(() => validatePack(input, { question: '测试问题', sources }), /不完整/);
});

test('Windows enabled-absent credentials and UTF8 BOM env are supported', () => {
  const dir = mkdtempSync(join(tmpdir(), 'guiyi-config-'));
  try {
    writeFileSync(join(dir, 'config.json'), JSON.stringify({ apiKeys: [{ key: 'fixture-secret' }] }));
    writeFileSync(join(dir, 'secret.env'), '\uFEFFZHIHU_ACCESS_SECRET="zhihu-fixture"\nOTHER_SECRET=ignored\n');
    const settings = { opencexConfigPath: join(dir, 'config.json'), zhihuEnvFile: join(dir, 'secret.env') };
    assert.equal(readApiKeySecret(settings), 'fixture-secret');
    assert.equal(loadZhihuAccessSecret(settings).secret, 'zhihu-fixture');
  } finally { rmSync(dir, { recursive: true }); }
});

test('HTTP success, limits, origin protection, private credentials and request deduplication', async () => {
  let calls = 0;
  const settings = { ...loadSettings(), maxBodyBytes: 2000, maxConcurrent: 1 };
  const credentials = () => ({ apiKeySecret: 'never-in-health', accessSecret: 'also-private', llm: { hasApiKey: true, configFound: true, enabledKeyCount: 1 }, zhihu: { cliFound: true, accessSecretLoaded: true, envFileFound: true } });
  const llm = { generate: async () => { calls++; await new Promise(resolve => setTimeout(resolve, 60)); return JSON.stringify(fixture()); } };
  const zhihu = { searchZhihu: async () => ({}), normalize: () => sources };
  const server = createServer(createApp({ settings, credentials, clients: { llm, zhihu } }));
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  const post = (body, headers = {}) => fetch(base + '/api/world', { method: 'POST', headers: { 'content-type': 'application/json', ...headers }, body: typeof body === 'string' ? body : JSON.stringify(body) });
  try {
    const health = await (await fetch(base + '/api/llm/health')).text();
    assert.equal(health.includes('never-in-health'), false);
    assert.equal(health.includes('also-private'), false);
    assert.equal((await post('{')).status, 400);
    assert.equal((await post({ question: '测试问题' }, { origin: 'https://unrelated.example' })).status, 403);
    assert.equal((await post(' '.repeat(2001))).status, 413);
    const first = post({ question: '测试问题' });
    await new Promise(resolve => setTimeout(resolve, 10));
    const duplicate = post({ question: '测试问题' });
    assert.equal((await post({ question: '另外的问题' })).status, 429);
    const [a, b] = await Promise.all([first, duplicate]);
    assert.equal(a.status, 200); assert.equal(b.status, 200);
    assert.equal((await a.json()).id, (await b.json()).id);
    assert.equal(calls, 1);
  } finally { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); }
});
