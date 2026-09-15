// 归一宇宙 — /api/world 客户端。安全边界：来源仅收 http(s) 绝对链接；前端不持有模型凭据。

export const CARD_TYPES = ['story', 'fact', 'view', 'person', 'blind'];

export const REQUEST_TIMEOUT_MS = 330 * 1000;

export class WorldError extends Error {
  constructor(userMessage, opts) {
    super(userMessage);
    this.name = 'WorldError';
    this.status = (opts && opts.status) || 0;
  }
}

function isStr(v) { return typeof v === 'string'; }

function isPlainObject(v) {
  return !!v && typeof v === 'object' && !Array.isArray(v);
}

/** 安全：仅 http/https 绝对链接，拒绝 javascript:/data:/相对路径。 */
export function isSafeHttpUrl(u) {
  if (!isStr(u)) return false;
  try {
    const parsed = new URL(u);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch (err) { return false; }
}

/** 归一化来源：仅保留带有效 http(s) 链接的条目，按 id 去重 → { sources, warnings }。 */
export function normalizeSources(raw) {
  const warnings = [];
  const sources = [];
  const seen = new Set();
  if (raw === undefined || raw === null) return { sources, warnings };
  if (!Array.isArray(raw)) {
    warnings.push('sources 不是数组，已忽略全部来源');
    return { sources, warnings };
  }
  for (const s of raw) {
    if (!isPlainObject(s)) continue;
    if (!isStr(s.id) || !s.id.trim()) { warnings.push('一条来源缺少 id，已丢弃'); continue; }
    const id = s.id.trim();
    if (!isSafeHttpUrl(s.url)) { warnings.push('来源「' + id + '」链接不是 http(s)，已丢弃'); continue; }
    if (seen.has(id)) { warnings.push('来源 id 重复：' + id); continue; }
    seen.add(id);
    sources.push({
      id: id,
      title: isStr(s.title) && s.title.trim() ? s.title.trim() : s.url,
      url: s.url,
      author: isStr(s.author) ? s.author.trim() : '',
      excerpt: isStr(s.excerpt) ? s.excerpt.trim() : ''
    });
  }
  return { sources: sources, warnings: warnings };
}

/** 归一化单卡：sourceIds 过滤到真实存在的来源；缺 id / 类型不合法返回 null。 */
export function normalizeCard(raw, validSourceIds) {
  if (!isPlainObject(raw)) return null;
  if (!isStr(raw.id) || !raw.id.trim()) return null;
  if (CARD_TYPES.indexOf(raw.type) === -1) return null;
  const idsSeen = new Set();
  const sourceIds = [];
  if (Array.isArray(raw.sourceIds)) {
    for (const sid of raw.sourceIds) {
      if (!isStr(sid)) continue;
      const k = sid.trim();
      if (!k || idsSeen.has(k) || !validSourceIds.has(k)) continue;
      idsSeen.add(k);
      sourceIds.push(k);
    }
  }
  const body = Array.isArray(raw.body)
    ? raw.body.filter((p) => { return isStr(p) && p.trim(); })
    : [];
  const card = {
    id: raw.id.trim(),
    type: raw.type,
    t: isStr(raw.t) && raw.t.trim() ? raw.t.trim() : raw.id.trim(),
    who: isStr(raw.who) ? raw.who.trim() : '',
    body: body,
    ask: isStr(raw.ask) ? raw.ask.trim() : '',
    tags: Array.isArray(raw.tags) ? raw.tags.filter(isStr) : [],
    sourceIds: sourceIds
  };
  if (isStr(raw.stance) && raw.stance.trim()) card.stance = raw.stance.trim();
  if (isStr(raw.quote) && raw.quote.trim()) card.quote = raw.quote.trim();
  return card;
}

/** 校验 /api/world 返回 → { pack, warnings }；非对象 / 缺 q / 五类卡不齐抛 WorldError。 */
export function normalizePack(json) {
  if (!isPlainObject(json)) throw new WorldError('生成服务返回的不是 JSON 对象');
  if (!isStr(json.q) || !json.q.trim()) throw new WorldError('生成服务返回缺少问题文本（q）');

  const warnings = [];
  const norm = normalizeSources(json.sources);
  for (const w of norm.warnings) warnings.push(w);
  const validSourceIds = new Set(norm.sources.map((s) => { return s.id; }));

  if (!Array.isArray(json.cards)) throw new WorldError('生成服务返回的 cards 不是数组');
  const cards = [];
  const seenIds = new Set();
  for (const raw of json.cards) {
    const card = normalizeCard(raw, validSourceIds);
    if (!card) { warnings.push('一张卡缺少 id 或类型不合法，已丢弃'); continue; }
    if (seenIds.has(card.id)) { warnings.push('卡 id 重复：' + card.id + '，保留第一张'); continue; }
    seenIds.add(card.id);
    cards.push(card);
  }
  const missing = CARD_TYPES.filter((t) => { return !cards.some((c) => { return c.type === t; }); });
  if (missing.length) {
    throw new WorldError('返回的问题包缺少卡片类型：' + missing.join(' / '));
  }

  let islandPlans;
  if (json.islandPlans !== undefined && json.islandPlans !== null) {
    if (isPlainObject(json.islandPlans)) {
      islandPlans = json.islandPlans;
    } else {
      warnings.push('islandPlans 形状不是对象，已忽略');
    }
  }

  const pack = {
    id: isStr(json.id) && json.id.trim() ? json.id.trim() : 'remote',
    q: json.q.trim(),
    sub: isStr(json.sub) ? json.sub : '',
    cards: cards,
    sources: norm.sources,
    provenance: isPlainObject(json.provenance) ? json.provenance : {}
  };
  if (!isPlainObject(json.provenance) && json.provenance !== undefined) {
    warnings.push('provenance 形状不是对象，已置空');
  }
  if (islandPlans) pack.islandPlans = islandPlans;
  return { pack: pack, warnings: warnings };
}

/** POST /api/world {question} → { pack, warnings }；失败抛 WorldError（message 可直接展示）。 */
export async function requestWorldPack(question, opts) {
  const q = String(question || '').trim();
  if (!q) throw new WorldError('问题不能为空');
  const timeoutMs = (opts && opts.timeoutMs) || REQUEST_TIMEOUT_MS;
  const doFetch = (opts && opts.fetchImpl) || (typeof fetch === 'function' ? fetch : null);
  if (!doFetch) throw new WorldError('当前环境没有 fetch，无法请求生成服务');

  const ctrl = typeof AbortController === 'function' ? new AbortController() : null;
  let timer = null;
  if (ctrl) {
    timer = setTimeout(() => { try { ctrl.abort(); } catch (err) { /* noop */ } }, timeoutMs);
  }
  let res;
  try {
    res = await doFetch('/api/world', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: q, withIslandPlans: true }),
      signal: ctrl ? ctrl.signal : undefined
    });
  } catch (err) {
    if (err && err.name === 'AbortError') {
      throw new WorldError('生成超时（' + Math.round(timeoutMs / 1000) + ' 秒）。服务端可能仍在计算。仍在进行的同一问题请求会合并；结束后重试可能重新生成。');
    }
    throw new WorldError('无法连接生成服务（/api/world）：' + (err && err.message ? err.message : '网络错误'));
  } finally {
    if (timer) clearTimeout(timer);
  }
  if (!res.ok) {
    let detail = '';
    try {
      const data = await res.json();
      if (isPlainObject(data && data.error) && isStr(data.error.message)) {
        detail = '：[' + (isStr(data.error.code) ? data.error.code : '错误') + '] ' + data.error.message;
      } else if (data && isStr(data.message)) {
        detail = '：' + data.message;
      } else if (isStr(data && data.error)) {
        detail = '：' + data.error;
      }
    } catch (err) { /* 非 JSON 响应体：不带详情 */ }
    if (res.status === 429 && !detail) detail = '：服务忙，请稍后重试';
    throw new WorldError('生成服务返回 ' + res.status + detail, { status: res.status });
  }
  let json;
  try { json = await res.json(); } catch (err) {
    throw new WorldError('生成服务返回的不是有效 JSON');
  }
  return normalizePack(json);
}

export async function requestIslandAdapt(payload, opts) {
  const timeoutMs = (opts && opts.timeoutMs) || 260 * 1000;
  const doFetch = (opts && opts.fetchImpl) || (typeof fetch === 'function' ? fetch : null);
  if (!doFetch) throw new WorldError('当前环境没有 fetch');
  const ctrl = typeof AbortController === 'function' ? new AbortController() : null;
  let timer = null;
  if (ctrl) timer = setTimeout(() => { try { ctrl.abort(); } catch (err) { /* noop */ } }, timeoutMs);
  try {
    const res = await doFetch('/api/island/adapt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: ctrl ? ctrl.signal : undefined
    });
    if (!res.ok) {
      let detail = '';
      try {
        const data = await res.json();
        if (isPlainObject(data && data.error) && isStr(data.error.message)) detail = '：' + data.error.message;
      } catch (err) { /* noop */ }
      throw new WorldError('island/adapt 返回 ' + res.status + detail, { status: res.status });
    }
    const json = await res.json();
    if (!isPlainObject(json) || json.ok !== true || !isPlainObject(json.plan)) {
      throw new WorldError('island/adapt 返回缺少 ok/plan');
    }
    return { plan: json.plan, online: true };
  } finally {
    if (timer) clearTimeout(timer);
  }
}
