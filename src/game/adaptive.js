// 归一宇宙 — 话题自适应引导。纯函数：同一 (pack, snapshot) 永远同一输出，不用 eval。
import { analyzeQuestion } from './personalize.js';
import { TYPE_REGION } from './state.js';

const REGION_COMPLETIONS = {
  lai: (t) => '小径走完——这些来路都通向「' + t + '」的问法本身。',
  cidi: (t) => '条件摆齐了。对着「' + t + '」再看一遍，哪一条最硬？',
  cha: () => '两条岸都看过了。点 Bloomy → ⚖️ 比较观点，把最不一样的两张摆上桌。',
  yu: () => '火光里都是真实的人。哪一句话你听进去了？',
  wei: (t) => '雾散了。「' + t + '」被检查出了什么？',
  form: () => '连线织成网，你的答案已经在长出来。'
};

export function packOrigin(pack, savedOrigin) {
  if (savedOrigin === 'local-demo') return { kind: 'rule', text: '本地规则生成（演示）' };
  if (savedOrigin === 'legacy') return { kind: 'rule', text: '本地规则重建' };
  const p = (pack && pack.provenance) || {};
  const llmMeta = p.llm && typeof p.llm === 'object' && !Array.isArray(p.llm) ? p.llm : {};
  const engine = p.engine || p.source || (llmMeta.model ? 'llm' : '');
  const model = (typeof p.model === 'string' && p.model) || (typeof llmMeta.model === 'string' && llmMeta.model) || '';
  if (engine === 'llm') {
    return { kind: 'llm', text: 'LLM 生成' + (model ? ' · ' + model : '') };
  }
  if (engine === 'rule') return { kind: 'rule', text: '规则生成' };
  if (savedOrigin === 'api') return { kind: 'unknown', text: '来源未标注' };
  return { kind: 'unknown', text: '手工预设包' };
}

function poolForRegion(pack, regionKey) {
  if (regionKey === 'form') return pack.cards;
  return pack.cards.filter((c) => TYPE_REGION[c.type] === regionKey);
}

export function normalizeDeclaredPlan(raw, pool) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
  const ids = new Set(pool.map((c) => c.id));
  const steps = [];
  if (Array.isArray(raw.steps)) {
    for (const st of raw.steps.slice(0, 6)) {
      if (!st || typeof st !== 'object') continue;
      if (!ids.has(st.cardId)) continue;
      if (typeof st.prompt !== 'string' || !st.prompt.trim()) continue;
      steps.push({ cardId: st.cardId, prompt: st.prompt.trim() });
    }
  }
  const completion = typeof raw.completion === 'string' ? raw.completion.trim() : '';
  const hint = typeof raw.hint === 'string' ? raw.hint.trim() : '';
  const relHints = Array.isArray(raw.relHints)
    ? raw.relHints.filter((h) => typeof h === 'string' && h.trim()).map((h) => h.trim()).slice(0, 6)
    : [];
  if (!steps.length && !completion && !hint && !relHints.length) return null;
  return {
    source: raw.source === 'llm' || raw.source === 'rule' ? raw.source : 'unknown',
    hint: hint,
    steps: steps,
    completion: completion,
    relHints: relHints
  };
}

function firstSentence(s) {
  const i = s.indexOf('。');
  return i > 0 ? s.slice(0, i + 1) : s;
}

function cardPrompt(card, a, snap) {
  const parts = [];
  if ((snap.collected || []).indexOf(card.id) !== -1 && snap.marked[card.id] !== 'doubt') {
    parts.push('你已收下「' + card.t + '」——');
  }
  if (snap.marked[card.id] === 'doubt') {
    parts.push('你给「' + card.t + '」标过存疑，正好审一审：');
  } else if (snap.marked[card.id] === 'wow') {
    parts.push('「' + card.t + '」让你惊讶。');
  }
  if ((snap.compares || []).some((pair) => pair.indexOf(card.id) !== -1)) {
    parts.push('它上过对照桌。');
  }
  let base = card.ask;
  if (!base && card.body && card.body[0]) base = '回到证据本身：' + firstSentence(card.body[0]);
  if (!base) base = '它给你的问题是什么？';
  const region = TYPE_REGION[card.type];
  if (a.shape === 'choice' && a.optA && (region === 'cha' || region === 'cidi')) {
    base += '（它把「' + a.optA + '」还是「' + a.optB + '」说得更有分量？）';
  }
  parts.push(base);
  return parts.join(' ');
}

function deriveRelHints(pool) {
  const has = (t) => pool.some((c) => c.type === t);
  const hints = [];
  if (has('fact') && has('view')) hints.push('事实 × 立场：这条数据撑得住那个观点吗？');
  if (has('story') && has('view')) hints.push('来路 × 立场：TA 的经历和观点对得上吗？');
  if (has('person') && has('story')) hints.push('两段经历：差的是哪一步？');
  if (has('blind')) hints.push('盲点卡挑中了哪张的毛病？');
  hints.push('它们在你的问题里各占哪一块？');
  return hints.slice(0, 4);
}

export function derivePlan(pack, regionKey, snapshot) {
  const pool = poolForRegion(pack, regionKey);
  const a = analyzeQuestion(pack.q);
  const snap = snapshot || { collected: [], marked: {}, compares: [] };
  return {
    source: 'rule',
    hint: '',
    steps: pool.map((c) => ({ cardId: c.id, prompt: cardPrompt(c, a, snap) })),
    completion: REGION_COMPLETIONS[regionKey] ? REGION_COMPLETIONS[regionKey](a.topic || pack.q) : '',
    relHints: regionKey === 'form' ? deriveRelHints(pool) : []
  };
}

export function planForRegion(pack, regionKey, snapshot) {
  if (!pack || !Array.isArray(pack.cards)) return null;
  const pool = poolForRegion(pack, regionKey);
  if (!pool.length && regionKey !== 'form') return null;
  const declared = pack.islandPlans ? normalizeDeclaredPlan(pack.islandPlans[regionKey], pool) : null;
  if (declared) {
    if (declared.source === 'unknown') {
      declared.source = packOrigin(pack).kind === 'rule' ? 'rule' : 'llm';
    }
    return declared;
  }
  return derivePlan(pack, regionKey, snapOrDefault(snapshot));
}

export function buildPriorChoices(snapshot, regionKey, titleOf) {
  const st = snapshot || {};
  const name = typeof titleOf === 'function' ? titleOf : (id) => id;
  const out = [];
  const marked = st.marked || {};
  for (const id in marked) {
    if (Object.prototype.hasOwnProperty.call(marked, id)) out.push((marked[id] || '标记') + ':' + name(id));
  }
  for (const pr of st.compares || []) out.push('对照:' + name(pr[0]) + '×' + name(pr[1]));
  const rc = st.regionChoices && typeof st.regionChoices === 'object' ? st.regionChoices[regionKey] : null;
  if (Array.isArray(rc)) out.push(...rc);
  const collected = Array.isArray(st.collected) ? st.collected : [];
  for (const id of collected.slice(-4)) out.push('已收下:' + name(id));
  return out.slice(0, 24);
}

function snapOrDefault(snapshot) {
  return snapshot || { collected: [], marked: {}, compares: [] };
}
