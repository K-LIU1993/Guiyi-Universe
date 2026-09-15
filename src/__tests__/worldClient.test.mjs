import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  isSafeHttpUrl,
  normalizeSources,
  normalizeCard,
  normalizePack,
  requestWorldPack,
  requestIslandAdapt,
} from '../game/worldClient.js';

function okPack(over = {}) {
  return {
    ok: true,
    id: 'p1',
    q: '画画还是上班？',
    sub: '',
    cards: [
      { id: 'a1', type: 'story', t: 's1', who: '', body: ['x'], ask: 'a?', tags: [], sourceIds: ['src1'] },
      { id: 'a2', type: 'fact', t: 'f1', who: '', body: ['y'], ask: 'b?', tags: ['synthetic'], sourceIds: [] },
      { id: 'a3', type: 'view', t: 'v1', who: '', body: ['z'], ask: 'c?', tags: [], sourceIds: ['src1'] },
      { id: 'a4', type: 'person', t: 'p1', who: '', body: ['w'], ask: 'd?', tags: ['hypothesis'], sourceIds: [] },
      { id: 'a5', type: 'blind', t: 'b1', who: '', body: ['v'], ask: 'e?', tags: [], sourceIds: [] },
    ],
    sources: [
      { id: 'src1', title: '知乎问答', url: 'https://www.zhihu.com/question/1', author: '答主', excerpt: '摘录' },
      { id: 'bad', title: '危险链接', url: 'javascript:alert(1)' },
    ],
    provenance: { engine: 'llm', model: 'amd/DeepSeek-V4-Flash' },
    islandPlans: { cha: { steps: [{ cardId: 'a3', prompt: '计划问' }] } },
    ...over,
  };
}

function fakeFetch(body, status = 200) {
  return async (url, init) => ({
    ok: status >= 200 && status < 300,
    status,
    json: async () => (typeof body === 'function' ? body(init) : body),
  });
}

test('isSafeHttpUrl 只放行 http/https 绝对链接', () => {
  assert.equal(isSafeHttpUrl('https://a.com/x'), true);
  assert.equal(isSafeHttpUrl('http://a.com'), true);
  assert.equal(isSafeHttpUrl('javascript:alert(1)'), false);
  assert.equal(isSafeHttpUrl('/relative'), false);
  assert.equal(isSafeHttpUrl(null), false);
});

test('normalizeSources 丢弃非法链接并按 id 去重', () => {
  const { sources, warnings } = normalizeSources([
    { id: 's1', url: 'https://a.com', title: ' T ', author: ' a ', excerpt: ' e ' },
    { id: 's1', url: 'https://a.com/2', title: 'dup' },
    { id: 's2', url: 'ftp://a.com' },
    { id: ' ', url: 'https://a.com/3' },
  ]);
  assert.equal(sources.length, 1);
  assert.equal(sources[0].title, 'T');
  assert.equal(sources[0].author, 'a');
  assert.ok(warnings.length >= 2);
});

test('normalizeCard 过滤不存在的 sourceIds，非法类型返回 null', () => {
  const valid = new Set(['src1']);
  const c = normalizeCard({ id: 'c1', type: 'view', sourceIds: ['src1', 'ghost', 'src1'] }, valid);
  assert.deepEqual(c.sourceIds, ['src1']);
  assert.equal(normalizeCard({ id: 'c2', type: 'alien' }, valid), null);
  assert.equal(normalizeCard({ type: 'view' }, valid), null);
});

test('normalizePack 校验五类卡齐全并保留 islandPlans/provenance', () => {
  const { pack, warnings } = normalizePack(okPack());
  assert.equal(pack.cards.length, 5);
  assert.equal(pack.sources.length, 1);
  assert.equal(pack.provenance.engine, 'llm');
  assert.deepEqual(pack.islandPlans.cha.steps, [{ cardId: 'a3', prompt: '计划问' }]);
  assert.ok(warnings.some((w) => w.includes('bad')));
});

test('normalizePack 缺类型或缺 q 抛 WorldError', () => {
  const p = okPack();
  p.cards = p.cards.filter((c) => c.type !== 'blind');
  assert.throws(() => normalizePack(p), (e) => e.name === 'WorldError' && e.message.includes('blind'));
  assert.throws(() => normalizePack(okPack({ q: '  ' })), (e) => e.name === 'WorldError');
});

test('normalizePack 卡 id 重复保留第一张', () => {
  const p = okPack();
  p.cards.push({ id: 'a1', type: 'story', t: 'dup', body: [], ask: '', tags: [], sourceIds: [] });
  const { pack } = normalizePack(p);
  assert.equal(pack.cards.length, 5);
  assert.equal(pack.cards.find((c) => c.id === 'a1').t, 's1');
});

test('requestWorldPack 发送 question + withIslandPlans', async () => {
  let captured = null;
  const fetchImpl = async (url, init) => {
    captured = { url, init };
    return fakeFetch(okPack())(url, init);
  };
  const { pack } = await requestWorldPack('  画画还是上班？  ', { fetchImpl });
  assert.equal(captured.url, '/api/world');
  assert.equal(captured.init.method, 'POST');
  const body = JSON.parse(captured.init.body);
  assert.equal(body.question, '画画还是上班？');
  assert.equal(body.withIslandPlans, true);
  assert.equal(pack.q, '画画还是上班？');
});

test('requestWorldPack 解析 {ok:false,error:{code,message}}', async () => {
  const fetchImpl = fakeFetch({ ok: false, error: { code: 'INVALID_QUESTION', message: '问题太短' } }, 400);
  await assert.rejects(
    requestWorldPack('hi', { fetchImpl }),
    (e) => e.name === 'WorldError' && e.message.includes('INVALID_QUESTION') && e.message.includes('问题太短')
  );
});

test('requestWorldPack 429 无详情提示服务忙', async () => {
  const fetchImpl = fakeFetch({}, 429);
  await assert.rejects(requestWorldPack('hi', { fetchImpl }), (e) => e.message.includes('服务忙'));
});

test('requestWorldPack 超时抛出可读错误', async () => {
  const fetchImpl = (url, init) => new Promise((_, reject) => {
    init.signal.addEventListener('abort', () => {
      const err = new Error('aborted');
      err.name = 'AbortError';
      reject(err);
    });
  });
  await assert.rejects(
    requestWorldPack('hi', { fetchImpl, timeoutMs: 20 }),
    (e) => e.name === 'WorldError' && e.message.includes('生成超时')
  );
});

test('requestIslandAdapt 成功取 plan，404/缺 ok 抛错', async () => {
  const good = fakeFetch({ ok: true, region: 'cha', plan: { steps: [{ cardId: 'a3', prompt: '在线问' }] } });
  const res = await requestIslandAdapt({ question: 'q', region: 'cha', cards: [], priorChoices: [] }, { fetchImpl: good });
  assert.equal(res.online, true);
  assert.equal(res.plan.steps[0].prompt, '在线问');

  const notFound = async () => ({ ok: false, status: 404, json: async () => ({}) });
  await assert.rejects(
    requestIslandAdapt({ question: 'q', region: 'cha', cards: [], priorChoices: [] }, { fetchImpl: notFound })
  );

  const noOk = fakeFetch({ ok: false, error: { code: 'BUSY', message: '忙' } });
  await assert.rejects(
    requestIslandAdapt({ question: 'q', region: 'cha', cards: [], priorChoices: [] }, { fetchImpl: noOk })
  );
});
