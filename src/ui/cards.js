// 卡片抽屉 · 阅读器 · 对照桌
import { TYPE_META } from '../game/content.js';

const VERDICTS = [
  ['a', '我更信左边'],
  ['b', '我更信右边'],
  ['half', '各取一半'],
  ['unsure', '先都存疑']
];

const MOODS = [['agree', '认同'], ['doubt', '存疑'], ['wow', '惊讶']];

export class CardsUI {
  constructor(cb, getState, getCollected) {
    this.cb = cb;
    this.getState = getState;
    this.getCollected = getCollected;
    this.drawerEl = null;
    this.readerEl = null;
    this.compareEl = null;
  }

  el(tag, cls, parent, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    if (parent) parent.appendChild(e);
    return e;
  }

  closeDrawer() { if (this.drawerEl) { this.drawerEl.remove(); this.drawerEl = null; } }
  closeReader() { if (this.readerEl) { this.readerEl.remove(); this.readerEl = null; } }
  closeCompare() { if (this.compareEl) { this.compareEl.remove(); this.compareEl = null; } }
  closeAll() { this.closeDrawer(); this.closeReader(); this.closeCompare(); }

  // ---------- 区域抽屉 ----------
  openDrawer(regionMeta, cards) {
    this.closeDrawer();
    const d = this.el('div', 'drawer panel', document.getElementById('ui'));
    this.drawerEl = d;
    const head = this.el('div', 'drawer-head', d);
    const dot = this.el('span', 'd-dot', head);
    dot.style.background = regionMeta.color;
    this.el('span', 'd-name', head, regionMeta.name);
    this.el('span', 'd-sub', head, regionMeta.sub + ' · ' + cards.length + ' 张卡');
    const close = this.el('button', 'drawer-close btn small', head, '×');
    close.addEventListener('click', () => this.closeDrawer());
    const body = this.el('div', 'drawer-body', d);
    const st = this.getState();
    for (const c of cards) {
      const meta = TYPE_META[c.type];
      const got = st.collected.indexOf(c.id) !== -1;
      const it = this.el('div', 'mini-card' + (got ? ' got' : ''), body);
      const ty = this.el('span', 'mc-type', it, meta.icon + ' ' + meta.name);
      ty.style.background = meta.color;
      const tt = this.el('div', 'mc-title', it);
      tt.textContent = c.t;
      const tw = this.el('div', 'mc-who', it);
      tw.textContent = c.who;
      if (got) this.el('span', 'mc-badge', it, '✓ 已收下');
      it.addEventListener('click', () => this.openReader(c));
    }
  }

  // ---------- 阅读器 ----------
  openReader(card) {
    this.closeReader();
    const bg = this.el('div', 'modal-bg', document.getElementById('ui'));
    this.readerEl = bg;
    const m = this.el('div', 'modal panel', bg);
    const x = this.el('button', 'modal-close', m, '×');
    x.addEventListener('click', () => this.closeReader());
    bg.addEventListener('click', (e) => { if (e.target === bg) this.closeReader(); });
    const meta = TYPE_META[card.type];
    const ty = this.el('span', 'cr-type', m, meta.icon + ' ' + meta.name);
    ty.style.background = meta.color;
    const title = this.el('div', 'cr-title', m);
    title.textContent = card.t;
    const who = this.el('div', 'cr-who', m);
    who.textContent = card.who;
    if (card.type === 'view' && card.stance) {
      const views = this.el('div', 'cr-views', m);
      const v = this.el('div', 'cr-view', views);
      this.el('span', 'vw-k', v, '主张');
      const vs = this.el('span', '', v);
      vs.textContent = card.stance;
    }
    if (card.quote) {
      const q = this.el('div', 'cr-quote', m);
      this.el('span', 'cr-quote-mark', q, '「');
      const qt = this.el('span', '', q);
      qt.textContent = card.quote;
    }
    const body = this.el('div', 'cr-body', m);
    for (const p of card.body) {
      const pe = this.el('div', '', body);
      pe.textContent = p;
    }
    this.el('div', 'cr-ask', m, '✦ ' + card.ask);
    const tags = this.el('div', 'cr-tags', m);
    for (const tg of card.tags) this.el('span', '', tags, tg);

    const st = this.getState();
    const actions = this.el('div', 'cr-actions', m);
    const got = st.collected.indexOf(card.id) !== -1;
    const btn = this.el('button', 'btn primary', actions, got ? '✓ 已收下' : '收下这张卡');
    if (got) btn.disabled = true;
    btn.addEventListener('click', () => {
      this.cb.onCollect(card);
      this.closeReader();
    });
    const cmpBtn = this.el('button', 'btn ghost', actions, '放上对照桌');
    cmpBtn.addEventListener('click', () => {
      this.closeReader();
      this.openCompare(card.id);
    });
    const marks = this.el('div', 'markrow', actions);
    for (const mm of MOODS) {
      const active = st.marked[card.id] === mm[0];
      const b = this.el('button', 'markbtn' + (active ? ' active' : ''), marks, mm[1]);
      b.addEventListener('click', () => {
        this.cb.onMark(card.id, mm[0]);
        b.classList.toggle('active', this.getState().marked[card.id] === mm[0]);
      });
    }
  }

  // ---------- 对照桌 ----------
  openCompare(preselectId) {
    this.closeCompare();
    const collected = this.getCollected();
    if (collected.length < 2) return;
    const bg = this.el('div', 'modal-bg', document.getElementById('ui'));
    this.compareEl = bg;
    const m = this.el('div', 'modal panel', bg);
    const x = this.el('button', 'modal-close', m, '×');
    x.addEventListener('click', () => this.closeCompare());
    bg.addEventListener('click', (e) => { if (e.target === bg) this.closeCompare(); });
    this.el('div', 'cmp-title', m, '⚖ 对照桌');
    this.el('div', 'cmp-hint', m, '挑两张收下的卡放在一起。差异自己会说话，裁决只对你自己生效。');
    const pick = this.el('div', 'cmp-pick', m);
    const grid = this.el('div', 'cmp-grid', m);
    const note = this.el('div', 'cmp-note', m);
    const vrow = this.el('div', 'cmp-verdict', m);
    let selA = preselectId || null;
    let selB = null;
    const chipMap = {};

    const findCard = (id) => {
      for (const c of collected) if (c.id === id) return c;
      return null;
    };

    const cardFace = (c) => {
      const meta = TYPE_META[c.type];
      const box = this.el('div', 'cmp-card', grid);
      const ty = this.el('span', 'mc-type', box, meta.icon + ' ' + meta.name);
      ty.style.background = meta.color;
      const tt = this.el('div', 'cc-title', box);
      tt.textContent = c.t;
      const r1 = this.el('div', 'cc-row', box);
      this.el('b', '', r1, '谁在说');
      const s1 = this.el('span', '', r1);
      s1.textContent = ' ' + (c.stance || c.who);
      const r2 = this.el('div', 'cc-row', box);
      this.el('b', '', r2, '核心一句');
      const s2 = this.el('span', '', r2);
      const line = c.body[0] || c.quote || '';
      s2.textContent = ' ' + (line.length > 56 ? line.slice(0, 56) + '……' : line);
    };

    const makeNote = (a, b) => {
      const pa = a.stance || a.who;
      const pb = b.stance || b.who;
      return '「' + a.t + '」说：' + pa + '；「' + b.t + '」说：' + pb + '。它们各有来处，也各有代价——差异先摆在这里，你的裁决只对你自己生效。';
    };

    const refreshChips = () => {
      for (const id in chipMap) {
        chipMap[id].classList.toggle('sel-a', id === selA);
        chipMap[id].classList.toggle('sel-b', id === selB);
      }
    };

    const render = () => {
      grid.innerHTML = '';
      note.textContent = '';
      vrow.innerHTML = '';
      const a = selA ? findCard(selA) : null;
      const b = selB ? findCard(selB) : null;
      if (a) cardFace(a);
      if (b) cardFace(b);
      if (a && b) {
        note.textContent = makeNote(a, b);
        for (const vd of VERDICTS) {
          const vb = this.el('button', 'btn small ghost', vrow, vd[1]);
          vb.addEventListener('click', () => {
            this.cb.onCompareConfirm(selA, selB, vd[0]);
            this.closeCompare();
          });
        }
      } else {
        note.textContent = '再选一张，对照桌就会亮起来。';
      }
    };

    for (const c of collected) {
      const chip = this.el('button', 'cmp-chip', pick);
      chip.textContent = c.t;
      chipMap[c.id] = chip;
      chip.addEventListener('click', () => {
        if (selA === c.id) { selA = null; }
        else if (selB === c.id) { selB = null; }
        else if (!selA) { selA = c.id; }
        else if (!selB) { selB = c.id; }
        else { selB = c.id; }
        refreshChips();
        render();
      });
    }
    refreshChips();
    render();
  }
}
