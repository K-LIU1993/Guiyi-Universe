import { test } from 'node:test';
import assert from 'node:assert/strict';
import { derivePlan, planForRegion, normalizeDeclaredPlan, packOrigin, buildPriorChoices } from '../game/adaptive.js';
import { storedPackUsable } from '../game/state.js';

function mkPack(over = {}) {
  return {
    id: 'p1',
    q: '画画还是上班？',
    sub: '',
    cards: [
      { id: 's1', type: 'story', t: '来路卡', who: '林晚', body: ['她高中退学去画画。'], ask: '她的来路里哪一步最关键？', tags: [], sourceIds: [] },
      { id: 'f1', type: 'fact', t: '事实卡', who: '', body: ['某年艺考人数上涨。'], ask: '这个数据撑得住哪个判断？', tags: [], sourceIds: [] },
      { id: 'v1', type: 'view', t: '观点卡', who: '答主A', body: ['画画养不活自己。'], ask: '这个立场忽略了什么条件？', tags: [], sourceIds: [] },
      { id: 'p1', type: 'person', t: '人物卡', who: '老柯', body: ['他三十岁转行画插画。'], ask: '他的转折点是什么？', tags: [], sourceIds: [] },
      { id: 'b1', type: 'blind', t: '盲点卡', who: '', body: ['没人讨论沉没成本。'], ask: '这个问题里最被忽略的盲点是什么？', tags: [], sourceIds: [] }
    ],
    sources: [],
    provenance: { engine: 'llm', model: 'amd/DeepSeek-V4-Flash' },
    ...over
  };
}

const SNAP = { collected: ['v1'], marked: { s1: 'doubt', v1: 'wow' }, compares: [['v1', 'b1']] };

test('derivePlan 同输入两次输出完全一致', () => {
  const a = JSON.stringify(derivePlan(mkPack(), 'cha', SNAP));
  const b = JSON.stringify(derivePlan(mkPack(), 'cha', SNAP));
  assert.equal(a, b);
});

test('choice 问题在 cha 岛生成含两个选项的追问', () => {
  const plan = derivePlan(mkPack(), 'cha', null);
  const step = plan.steps.find((s) => s.cardId === 'v1');
  assert.ok(step.prompt.includes('画画'));
  assert.ok(step.prompt.includes('上班'));
  assert.ok(step.prompt.includes('说得更有分量'));
});

test('存疑标记改变 lai 岛任务措辞', () => {
  const plan = derivePlan(mkPack(), 'lai', SNAP);
  const step = plan.steps.find((s) => s.cardId === 's1');
  assert.ok(step.prompt.includes('存疑'));
  assert.ok(step.prompt.includes('她的来路里哪一步最关键'));
});

test('对照过的卡在 wei 岛带对照桌前缀', () => {
  const plan = derivePlan(mkPack(), 'wei', SNAP);
  const step = plan.steps.find((s) => s.cardId === 'b1');
  assert.ok(step.prompt.includes('对照桌'));
  assert.ok(step.prompt.includes('最被忽略的盲点'));
});

test('已收集 + 惊讶 + 对照的卡提示三层状态', () => {
  const plan = derivePlan(mkPack(), 'cha', SNAP);
  const step = plan.steps.find((s) => s.cardId === 'v1');
  assert.ok(step.prompt.includes('已收下'));
  assert.ok(step.prompt.includes('让你惊讶'));
  assert.ok(step.prompt.includes('对照桌'));
});

test('form 岛 relHints 非空且 steps 覆盖全部五张卡', () => {
  const plan = derivePlan(mkPack(), 'form', null);
  assert.ok(plan.relHints.length >= 1);
  assert.equal(plan.steps.length, 5);
});

test('normalizeDeclaredPlan 过滤无效 cardId 与空字段', () => {
  const pool = mkPack().cards.filter((c) => c.type === 'view');
  const plan = normalizeDeclaredPlan({
    steps: [
      { cardId: 'v1', prompt: ' 在线计划问 ' },
      { cardId: 'ghost', prompt: '无效' },
      { cardId: 'v1', prompt: '   ' }
    ],
    hint: ' 在线提示 ',
    completion: ' 在线完成语 ',
    relHints: ['r1', '  ', 42],
    source: 'llm'
  }, pool);
  assert.deepEqual(plan.steps, [{ cardId: 'v1', prompt: '在线计划问' }]);
  assert.equal(plan.hint, '在线提示');
  assert.equal(plan.completion, '在线完成语');
  assert.deepEqual(plan.relHints, ['r1']);
  assert.equal(plan.source, 'llm');
});

test('normalizeDeclaredPlan 全无效返回 null 且截断超长 steps', () => {
  const pool = mkPack().cards.filter((c) => c.type === 'view');
  assert.equal(normalizeDeclaredPlan({ steps: [{ cardId: 'ghost', prompt: 'x' }] }, pool), null);
  assert.equal(normalizeDeclaredPlan([], pool), null);
  assert.equal(normalizeDeclaredPlan(null, pool), null);
  const many = { steps: [] };
  for (let i = 0; i < 9; i++) many.steps.push({ cardId: 'v1', prompt: 's' + i });
  assert.equal(normalizeDeclaredPlan(many, pool).steps.length, 6);
});

test('planForRegion 声明式计划优先且无效计划回退规则', () => {
  const declared = mkPack({ islandPlans: { cha: { steps: [{ cardId: 'v1', prompt: '在线计划问' }], hint: '在线提示', completion: '完成语', relHints: ['r1'], source: 'llm' } } });
  const plan = planForRegion(declared, 'cha', SNAP);
  assert.equal(plan.source, 'llm');
  assert.equal(plan.steps[0].prompt, '在线计划问');

  const fallbackPack = mkPack({ provenance: { engine: 'rule' } });
  const rule = planForRegion(fallbackPack, 'cha', null);
  assert.equal(rule.source, 'rule');
  assert.ok(rule.steps[0].prompt.includes('忽略'));

  const broken = mkPack({ islandPlans: { cha: { steps: [{ cardId: 'ghost', prompt: 'x' }] } } });
  assert.equal(planForRegion(broken, 'cha', null).source, 'rule');
});

test('planForRegion 无 source 的声明式计划按 pack 来源补标', () => {
  const pack = mkPack({ islandPlans: { cha: { steps: [{ cardId: 'v1', prompt: '计划问' }] } } });
  assert.equal(planForRegion(pack, 'cha', null).source, 'llm');
});

test('packOrigin 各分支标注来源', () => {
  assert.equal(packOrigin(null, 'local-demo').kind, 'rule');
  assert.ok(packOrigin(null, 'legacy').text.includes('本地规则'));
  const llm = packOrigin(mkPack(), null);
  assert.equal(llm.kind, 'llm');
  assert.ok(llm.text.includes('amd/DeepSeek-V4-Flash'));
  const nested = packOrigin(mkPack({ provenance: { llm: { model: 'm2' } } }), null);
  assert.equal(nested.kind, 'llm');
  assert.ok(nested.text.includes('m2'));
  assert.equal(packOrigin(mkPack({ provenance: { engine: 'rule' } }), null).kind, 'rule');
  assert.equal(packOrigin(mkPack({ provenance: {} }), 'api').text, '来源未标注');
  assert.equal(packOrigin(mkPack({ provenance: null }), null).text, '手工预设包');
});

test('storedPackUsable 校验五类卡与问题', () => {
  assert.equal(storedPackUsable(mkPack()), true);
  const noBlind = mkPack();
  noBlind.cards = noBlind.cards.filter((c) => c.type !== 'blind');
  assert.equal(storedPackUsable(noBlind), false);
  assert.equal(storedPackUsable(mkPack({ q: '  ' })), false);
  assert.equal(storedPackUsable(null), false);
});

test('buildPriorChoices 决策优先且截断收集尾部', () => {
  const snap = {
    marked: { v1: 'doubt', s1: 'wow' },
    compares: [['v1', 'b1']],
    regionChoices: { cha: ['过桥到「右岸」读「观点卡」'] },
    collected: ['f1', 'p1', 'v1', 's1', 'b1']
  };
  const name = (id) => '「' + id + '」';
  const out = buildPriorChoices(snap, 'cha', name);
  assert.ok(out[0].startsWith('doubt:'));
  assert.ok(out[1].startsWith('wow:'));
  assert.equal(out[2], '对照:「v1」×「b1」');
  assert.ok(out.includes('过桥到「右岸」读「观点卡」'));
  assert.ok(out.some((x) => x === '已收下:「p1」'));
  assert.ok(!out.includes('已收下:「f1」'));
  const big = { collected: [], marked: {}, compares: [], regionChoices: { cha: [] } };
  for (let i = 0; i < 30; i++) big.regionChoices.cha.push('选择' + i);
  assert.equal(buildPriorChoices(big, 'cha', name).length, 24);
});
