// 来源引用与计划徽标：全部 DOM 构建 + textContent，模型/后端文本绝不进 innerHTML。
import { isSafeHttpUrl } from '../game/worldClient.js';

function hostOf(u) {
  try { return new URL(u).host; } catch (err) { return u; }
}

/** 卡片的来源引用区（仅 http(s)，新窗 + noopener）；无有效来源返回 null。 */
export function sourceRefsEl(card, sources) {
  if (!card || !Array.isArray(card.sourceIds) || !card.sourceIds.length) return null;
  if (!Array.isArray(sources) || !sources.length) return null;
  const byId = new Map();
  for (const s of sources) { if (s && s.id) byId.set(s.id, s); }
  const refs = [];
  const seen = new Set();
  for (const id of card.sourceIds) {
    const s = byId.get(id);
    if (!s || seen.has(id) || !isSafeHttpUrl(s.url)) continue;
    seen.add(id);
    refs.push(s);
  }
  if (!refs.length) return null;
  const wrap = document.createElement('div');
  wrap.className = 'src-refs';
  wrap.addEventListener('click', event => event.stopPropagation());
  const label = document.createElement('span');
  label.className = 'src-refs__label';
  label.textContent = '来源';
  wrap.appendChild(label);
  for (const s of refs) {
    const a = document.createElement('a');
    a.className = 'src-refs__link';
    a.href = s.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = (s.title && String(s.title).trim()) || hostOf(s.url);
    const tip = [s.author, s.excerpt].filter((x) => { return typeof x === 'string' && x.trim(); }).join(' · ');
    a.title = tip || s.url;
    wrap.appendChild(a);
  }
  return wrap;
}

export function stepPromptFor(plan, card) {
  if (!plan || !Array.isArray(plan.steps) || !card) return '';
  for (const st of plan.steps) {
    if (st && st.cardId === card.id && typeof st.prompt === 'string' && st.prompt.trim()) return st.prompt.trim();
  }
  return '';
}

export function askLineEl(plan, card) {
  const p = stepPromptFor(plan, card) || (card && card.ask) || '';
  if (!p) return null;
  const d = document.createElement('div');
  d.className = 'plan-ask';
  d.textContent = '✦ ' + p;
  return d;
}

export function planBadgeEl(plan) {
  if (!plan) return null;
  const variant = plan.online || plan.source === 'llm' ? 'llm' : plan.source === 'rule' ? 'rule' : 'unknown';
  const text = plan.online ? 'LLM 引导 · 在线'
    : plan.source === 'llm' ? 'LLM 引导 · 本包计划'
      : plan.source === 'rule' ? '规则引导 · 本地推导'
        : '引导 · 来源未标注';
  const el = document.createElement('span');
  el.className = 'plan-badge plan-badge--' + variant;
  el.textContent = text;
  return el;
}

/** 顶部计划条（徽标 + hint）；可重复调用以刷新（在线适配返回后）。 */
export function renderPlanBar(bar, plan) {
  if (!bar) return;
  bar.textContent = '';
  const badge = planBadgeEl(plan);
  if (badge) bar.appendChild(badge);
  if (plan && typeof plan.hint === 'string' && plan.hint.trim()) {
    const hint = document.createElement('span');
    hint.className = 'plan-hint';
    hint.textContent = plan.hint.trim();
    bar.appendChild(hint);
  }
}

export function completionText(plan, fallback) {
  if (plan && typeof plan.completion === 'string' && plan.completion.trim()) return plan.completion.trim();
  return fallback || '';
}
