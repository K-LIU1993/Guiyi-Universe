import { cleanId, cleanText, cleanStringArray } from './sanitize.js';
import { HttpError } from './respond.js';

export const TYPE_REGION = { story: 'lai', fact: 'cidi', view: 'cha', person: 'yu', blind: 'wei' };
export const REGIONS = ['lai', 'cidi', 'cha', 'yu', 'wei', 'form'];

function invalid(message) { throw new HttpError(502, 'LLM_PACK_INVALID', message); }

export function validatePlan(raw, cards) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) invalid('岛屿计划缺失');
  const ids = new Set(cards.map(card => card.id));
  if (!Array.isArray(raw.steps) || !raw.steps.length || raw.steps.length > 12) invalid('岛屿任务数无效');
  const steps = raw.steps.map(step => {
    if (!step || !ids.has(step.cardId)) invalid('岛屿任务引用了不存在的卡片');
    const prompt = cleanText(step.prompt, 180);
    if (!prompt) invalid('岛屿任务缺少具体提示');
    return { cardId: step.cardId, prompt };
  });
  return {
    source: 'llm', hint: cleanText(raw.hint, 180), steps,
    completion: cleanText(raw.completion, 180),
    relHints: cleanStringArray(raw.relHints, 6, 120)
  };
}

export function validatePack(raw, { question, sources, withIslandPlans = false }) {
  if (!raw || !Array.isArray(raw.cards) || raw.cards.length < 10 || raw.cards.length > 16) invalid('必须生成 10–16 张完整卡片');
  const sourceMap = new Map(sources.map(source => [source.id, source]));
  const ids = new Set();
  const cards = raw.cards.map((card, index) => {
    if (!card || !Object.hasOwn(TYPE_REGION, card.type)) invalid('卡片类型无效');
    const id = cleanId(card.id) || `card-${index + 1}`;
    if (ids.has(id)) invalid('卡片 ID 重复');
    ids.add(id);
    const sourceIds = [...new Set(Array.isArray(card.sourceIds) ? card.sourceIds : [])].slice(0, 5);
    if (sourceIds.some(sourceId => !sourceMap.has(sourceId))) invalid('卡片引用了不存在的来源');
    const t = cleanText(card.t, 80);
    const ask = cleanText(card.ask, 180);
    const body = cleanStringArray(typeof card.body === 'string' ? [card.body] : card.body, 4, 400);
    if (!t || !ask || !body.length) invalid('卡片标题、正文或任务不完整');
    const tags = cleanStringArray(card.tags, 4, 24);
    let who = cleanText(card.who, 80);
    if (!sourceIds.length) {
      who = '待验证的假设';
      tags.push('假设');
      body.unshift('以下为待验证的推演，不是已证实的事实或真实人物经历。');
    } else if (card.type === 'person') {
      who = sourceIds.map(sourceId => sourceMap.get(sourceId).author).join(' / ') + ' · 来源摘要整理';
    }
    const result = { id, type: card.type, t, who, body, ask, tags, sourceIds };
    if (card.type === 'view') result.stance = cleanText(card.stance, 80) || t;
    if (card.type === 'person') result.quote = sourceIds.length ? sourceMap.get(sourceIds[0]).excerpt.slice(0, 180) : '尚无来源支持，需要进一步检索。';
    return result;
  });
  for (const type of Object.keys(TYPE_REGION)) {
    if (cards.filter(card => card.type === type).length < 2) invalid(`缺少足够的 ${type} 卡片（至少两张）`);
  }
  const pack = { q: question, sub: cleanText(raw.sub, 160) || '沿着证据探索，留下自己的判断', cards };
  if (withIslandPlans) {
    pack.islandPlans = {};
    for (const region of REGIONS) {
      const pool = region === 'form' ? cards : cards.filter(card => TYPE_REGION[card.type] === region);
      pack.islandPlans[region] = validatePlan(raw.islandPlans?.[region], pool);
    }
  }
  return pack;
}
