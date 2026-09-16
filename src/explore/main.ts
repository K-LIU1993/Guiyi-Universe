import './style.css';
import { addToBasket, hasInBasket } from './basket';
import { Evidence, loadEvidence } from './data';
const root = document.querySelector<HTMLDivElement>('#explore-root')!;
let items: Evidence[] = [], filter = '全部', selected: Evidence | null = null, degraded = false;
const saved = new Set<string>(), tabs = ['全部', '证据', '观点', '相关话题'];
const saveButton = (id: string, label: string) => '<button class="save" data-save="' + id + '" aria-pressed="' + saved.has(id) + '">' + (saved.has(id) ? '♥ ' : '♡ ') + label + '</button>';
function render() { const shown = filter === '全部' ? items : items.filter((x) => x.type === filter); root.innerHTML = selected ? detail(selected) : page(shown); bind(); }
function page(shown: Evidence[]) { return '<main><header><div class="eyebrow">X-EXPLORE / 证据流</div><h1>我们如何知道，什么值得继续追问？</h1><div class="stats"><span>♡ 1,284 人关注</span><span>⌁ ' + (items.length || 3) + ' 条证据</span></div></header><nav class="tabs" aria-label="证据类型">' + tabs.map((t) => '<button class="tab ' + (filter === t ? 'active' : '') + '" data-filter="' + t + '">' + t + '</button>').join('') + '</nav>' + (degraded ? '<div class="notice" role="status">当前展示本地示例数据（Mock 降级）</div>' : '<div class="notice live" role="status">当前来自内容服务（真实数据）</div>') + '<section class="cards">' + shown.map(card).join('') + '</section></main>'; }
function card(x: Evidence) { return '<article class="card" data-id="' + x.id + '"><div class="tag">' + x.type + '</div><h2>' + x.title + '</h2><p>' + x.summary + '</p><div class="meta"><span>' + x.source + '</span>' + saveButton(x.id, String(x.saves)) + '</div></article>'; }
function detail(x: Evidence) { return '<main><button class="back" data-back="1">← 返回证据流</button><div class="detail"><div class="tag">' + x.type + '</div><h1>' + x.title + '</h1><p class="lead">' + x.summary + '</p><blockquote>“' + x.excerpt + '”</blockquote><div class="source"><strong>来源</strong><br>' + x.source + '<br><strong>作者</strong><br>' + x.author + (x.authorNote ? '<em>' + x.authorNote + '</em>' : '') + '</div><div class="actions"><button class="primary" data-basket="' + x.id + '">' + (hasInBasket(x.id) ? '✓ 已加入对照' : '＋ 加入对照') + '</button><button data-share="' + x.id + '">分享</button>' + saveButton(x.id, '收藏') + '</div></div></main>'; }
function bind() { document.querySelectorAll<HTMLElement>('[data-filter]').forEach((b) => b.onclick = () => { filter = b.dataset.filter!; selected = null; render(); }); document.querySelectorAll<HTMLElement>('[data-id]').forEach((c) => c.onclick = (e) => { if ((e.target as HTMLElement).closest('button')) return; selected = items.find((x) => x.id === c.dataset.id) || null; render(); }); document.querySelectorAll<HTMLElement>('[data-back]').forEach((b) => b.onclick = () => { selected = null; render(); }); document.querySelectorAll<HTMLElement>('[data-basket]').forEach((b) => b.onclick = () => { const x = items.find((i) => i.id === b.dataset.basket)!; addToBasket({ id: x.id, title: x.title, excerpt: x.excerpt, source: x.source }); render(); }); document.querySelectorAll<HTMLElement>('[data-save]').forEach((b) => b.onclick = (e) => { e.stopPropagation(); const id = b.dataset.save!; saved.has(id) ? saved.delete(id) : saved.add(id); render(); }); document.querySelectorAll<HTMLElement>('[data-share]').forEach((b) => b.onclick = async () => { try { await navigator.clipboard.writeText(location.href + '#' + b.dataset.share); alert('链接已复制'); } catch { alert('请复制当前页面地址'); } }); }
function restoreDetail() { selected = items.find(x => x.id === decodeURIComponent(location.hash.slice(1))) || null; render(); }
window.addEventListener('hashchange', restoreDetail);
root.addEventListener('click', async event => {
 const target = (event.target as HTMLElement).closest<HTMLElement>('[data-share], [data-id], [data-back]');
 if (!target) return;
 if (target.dataset.share) {
   event.stopImmediatePropagation();
   const url = new URL(location.href); url.hash = target.dataset.share;
   try { await navigator.clipboard.writeText(url.href); } catch { window.prompt('复制此详情链接', url.href); }
 } else if (target.dataset.back) { history.replaceState(null, '', location.pathname + location.search); }
 else if (!(event.target as HTMLElement).closest('button')) { history.replaceState(null, '', '#' + encodeURIComponent(target.dataset.id!)); }
}, true);
loadEvidence().then((r) => { items = r.items; degraded = r.degraded; restoreDetail(); });
