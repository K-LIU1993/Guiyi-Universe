import './style.css';
import { loadAppData } from './api';
import { mountMap } from './map';

const routes = ['home', 'explore', 'detail', 'compare', 'meet', 'shape'];
const names = ['世界', '探索', '卡片', '对照', '遇见', '成形'];
const storageKey = 'guiyi-u-app-v1';
const state = { filter: '全部', island: '', selected: 'a', favorites: [] as string[], compare: ['a', 'b'], marks: [] as string[], question: '', draft: ['', '', '', ''], saved: false };
try {
  const stored = JSON.parse(localStorage.getItem(storageKey) || 'null');
  if (stored && typeof stored.question === 'string' && ['favorites', 'compare', 'marks', 'draft'].every(k => Array.isArray(stored[k]) && stored[k].every((v: unknown) => typeof v === 'string')) && stored.draft.length === 4) Object.assign(state, stored);
} catch { /* 会话内状态仍可使用。 */ }
const root = document.querySelector<HTMLDivElement>('#app')!;
const escape = (s: string) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
function persist() { try { localStorage.setItem(storageKey, JSON.stringify(state)); return true; } catch { return false; } }
function route() { const value = location.hash.slice(1); return routes.includes(value) ? value : 'home'; }
function go(value: string) { location.hash = value; }
const title = (label: string, heading: string, note: string) => '<p class="eyebrow">' + label + '</p><h1>' + heading + '</h1><p class="muted">' + note + '</p>';

loadAppData().then(data => {
  let dispose: (() => void) | undefined;
  state.question ||= data.question;
  if (!data.cards.some(c => c.id === state.selected)) state.selected = 'a';
  state.compare = [...new Set(state.compare)].filter(id => data.cards.some(c => c.id === id)).slice(0, 2);
  if (state.compare.length !== 2) state.compare = ['a', 'b'];
  function view(page: string) {
    const current = data.cards.find(c => c.id === state.selected)!;
    if (page === 'home') return title('归一 UNIVERSE / 01', '一问，一座世界', '不急着下结论，先让不同的线索相遇。') + '<form id="question-form" class="question-card"><label for="question">你正在问什么？</label><textarea id="question" maxlength="160" required>' + escape(state.question) + '</textarea><button class="primary">进入这座世界 →</button></form><div class="section-row"><h2>四座岛，慢慢探索</h2><span class="muted">探索进度 · 占位</span></div><div id="map" class="map-wrap"></div><p class="center-note">中央归一水晶 · 世界地标</p><div class="island-grid">' + data.islands.map(i => '<button data-island="' + i.id + '" style="background:' + i.color + '"><b>' + i.name + '</b><small>' + i.note + '</small></button>').join('') + '</div>' + (state.saved ? '<button class="full" data-path>已解锁：可逆的小步尝试 →</button>' : '');
    if (page === 'explore') {
      const cards = data.cards.filter(c => (state.filter === '全部' || c.type === state.filter) && (!state.island || c.island === state.island));
      return title('探索 / 02', '收集不同的线索', escape(state.question)) + '<div class="chips">' + ['全部', '证据', '观点', '相关话题'].map(f => '<button data-filter="' + f + '" aria-pressed="' + (f === state.filter) + '">' + f + '</button>').join('') + '</div>' + (state.island ? '<button data-clear-island>查看所有岛屿 ×</button>' : '') + '<div class="card-list">' + cards.map(c => '<button class="card-tile" data-card="' + c.id + '"><span class="tag">' + c.type + '</span><h2>' + escape(c.title) + '</h2><p>' + escape(c.text) + '</p><small>' + escape(c.source) + '</small><span class="card-link">打开线索 ↗</span></button>').join('') + '</div>' + (!cards.length ? '<p>这个筛选下暂无线索，请切换分类。</p>' : '');
    }
    if (page === 'detail') return '<button data-go="explore">← 返回探索</button>' + title(current.type + ' / 03', escape(current.title), '本地演示材料') + '<article class="detail-card"><span class="tag">原文</span><blockquote>' + escape(current.text) + '</blockquote><h2>来源</h2><p>' + escape(current.source) + '</p><h2>处境</h2><p>' + escape(current.context) + '</p></article><div class="actions"><button data-favorite aria-pressed="' + state.favorites.includes(current.id) + '">' + (state.favorites.includes(current.id) ? '已收藏' : '收藏') + '</button><button data-add-compare>加入对照</button><button disabled>分享 · 敬请期待</button></div>';
    if (page === 'compare') return title('对照 / 04', '给不同理解留位置', '并排看见处境，差异不必马上得到解决。') + '<div class="compare-grid">' + state.compare.map((id, index) => { const c = data.cards.find(x => x.id === id)!; return '<article class="compare-card"><span class="tag">观点 ' + (index ? 'B' : 'A') + '</span><h2>' + escape(c.title) + '</h2><p>' + escape(c.text) + '</p><small>' + escape(c.context) + '</small></article>'; }).join('') + '</div><h2>我的标记</h2><p class="muted">本地标记占位，可以多选。</p><div class="marks">' + ['发现差异', '发现张力', '新的启发'].map(m => '<button data-mark="' + m + '" aria-pressed="' + state.marks.includes(m) + '">' + m + '</button>').join('') + '</div><button class="primary full" data-go="meet">遇见更多处境 →</button>';
    if (page === 'meet') return title('遇见 / 05', '换一个位置，再看一遍', '以下均为虚构练习角色，不代表真实人物。') + '<article class="character"><span class="tag">虚构角色 · 林</span><h2>“选择的代价是谁在承担？”</h2><p>林正在照顾家人，也在考虑新的学习计划。他想先整理固定支出与可以支配的时间。</p></article><article class="character"><span class="tag">虚构角色 · 周</span><h2>“能不能先试一小步？”</h2><p>周有一段过渡期储蓄，计划从周末项目开始，了解另一种工作的日常。</p></article><p class="muted">Bloomy：你愿意把哪些条件，也放进自己的问题里？</p><button class="primary full" data-go="shape">让理解成形 →</button>';
    return title('成形 / 06', '留下一份暂时的理解', '由你填写，也可以在之后继续修改。') + '<form id="shape-form" class="form-card"><span class="tag">成形卡 · 五要素</span><h2>① 我的问题</h2><p>' + escape(state.question) + '</p>' + ['② 当前理解', '③ 我的依据', '④ 适用条件', '⑤ 仍待探索'].map((label, index) => '<label for="draft-' + index + '">' + label + '</label><textarea id="draft-' + index + '" data-draft="' + index + '" maxlength="1000" required placeholder="写下此刻的线索…">' + escape(state.draft[index]) + '</textarea>').join('') + '<button class="primary full">' + (state.saved ? '更新成形卡' : '保存并解锁新路径') + '</button></form>' + (state.saved ? '<p role="status">已保存 · 新路径已解锁</p><button class="full" data-path>探索：可逆的小步尝试 →</button>' : '');
  }
  function render() {
    dispose?.(); dispose = undefined;
    const page = route();
    root.innerHTML = '<main class="screen">' + view(page) + '<p id="notice" role="status"></p></main><nav class="bottom-nav" aria-label="主导航">' + routes.map((r, i) => '<button data-go="' + r + '" class="nav-item" ' + (r === page ? 'aria-current="page"' : '') + '><span aria-hidden="true">' + ['⌂', '◌', '▱', '◎', '◉', '✦'][i] + '</span>' + names[i] + '</button>').join('') + '</nav>';
    if (page === 'home') dispose = mountMap(root.querySelector('#map')!);
    root.querySelectorAll<HTMLElement>('[data-go]').forEach(e => e.onclick = () => go(e.dataset.go!));
    root.querySelectorAll<HTMLElement>('[data-card]').forEach(e => e.onclick = () => { state.selected = e.dataset.card!; persist(); go('detail'); });
    root.querySelectorAll<HTMLElement>('[data-filter]').forEach(e => e.onclick = () => { state.filter = e.dataset.filter!; persist(); render(); });
    root.querySelectorAll<HTMLElement>('[data-island]').forEach(e => e.onclick = () => { state.island = e.dataset.island!; state.filter = '全部'; persist(); go('explore'); });
    root.querySelector('[data-clear-island]')?.addEventListener('click', () => { state.island = ''; persist(); render(); });
    root.querySelector<HTMLTextAreaElement>('#question')?.addEventListener('input', e => { state.question = (e.target as HTMLTextAreaElement).value; state.saved = false; persist(); });
    root.querySelector('#question-form')?.addEventListener('submit', e => { e.preventDefault(); if (!state.question.trim()) return; state.island = ''; persist(); go('explore'); });
    root.querySelector('[data-favorite]')?.addEventListener('click', () => { state.favorites = state.favorites.includes(state.selected) ? state.favorites.filter(x => x !== state.selected) : [...state.favorites, state.selected]; persist(); render(); });
    root.querySelector('[data-add-compare]')?.addEventListener('click', () => { if (!state.compare.includes(state.selected)) state.compare = [state.compare[1], state.selected]; persist(); go('compare'); });
    root.querySelectorAll<HTMLElement>('[data-mark]').forEach(e => e.onclick = () => { const m = e.dataset.mark!; state.marks = state.marks.includes(m) ? state.marks.filter(x => x !== m) : [...state.marks, m]; persist(); render(); });
    root.querySelectorAll<HTMLTextAreaElement>('[data-draft]').forEach(e => e.oninput = () => { state.draft[Number(e.dataset.draft)] = e.value; state.saved = false; persist(); });
    root.querySelector('#shape-form')?.addEventListener('submit', e => { e.preventDefault(); if (state.draft.some(x => !x.trim())) return; state.saved = true; const stored = persist(); render(); root.querySelector('#notice')!.textContent = stored ? '已保存到本机。' : '仅保留于本次会话；浏览器禁止本机存储。'; });
    root.querySelector('[data-path]')?.addEventListener('click', () => { state.island = ''; state.filter = '相关话题'; persist(); go('explore'); });
  }
  window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); });
  window.addEventListener('pagehide', () => { dispose?.(); dispose = undefined; });
  window.addEventListener('pageshow', e => { if (e.persisted) render(); });
  render();
}).catch(() => { root.textContent = '世界暂时未能载入，请刷新重试。'; });
