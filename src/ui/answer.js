// 成形作曲器 · 成形卡
import { TYPE_META } from '../game/content.js';
import { addCommunityQuestion } from '../game/questionPool.js';

export class AnswerUI {
  constructor(cb) {
    this.cb = cb;
    this.bg = null;
  }

  el(tag, cls, parent, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    if (parent) parent.appendChild(e);
    return e;
  }

  close() {
    if (this.bg) { this.bg.remove(); this.bg = null; }
  }

  // 作曲器：question 为当前问题文本，cards 为已收集卡对象
  openComposer(question, cards) {
    this.close();
    const bg = this.el('div', 'modal-bg', document.getElementById('ui'));
    this.bg = bg;
    const m = this.el('div', 'modal panel', bg);
    this.el('div', 'fm-title', m, '✦ 成形 · 把看见放在一起');
    this.el('div', 'fm-sub', m, '挑 1 到 3 张陪你走到这里的卡作为依据，写下你此刻的答案。');
    this.el('div', 'fm-q', m, question);
    this.el('div', 'fm-label', m, '① 我的依据');
    const pick = this.el('div', 'fm-pick', m);
    const picks = new Set();
    for (const c of cards) {
      const meta = TYPE_META[c.type];
      const it = this.el('div', 'fm-item', pick);
      this.el('span', 'fm-box', it);
      const t = this.el('span', 'fm-t', it);
      t.textContent = meta.icon + ' ' + c.t + ' — ' + c.who;
      it.addEventListener('click', () => {
        if (picks.has(c.id)) { picks.delete(c.id); it.classList.remove('sel'); }
        else if (picks.size >= 3) return;
        else { picks.add(c.id); it.classList.add('sel'); }
        refresh();
      });
    }
    this.el('div', 'fm-label', m, '② 我的答案');
    const ta = this.el('textarea', 'fm-textarea', m);
    ta.placeholder = '此刻，属于你自己的答案是……';
    this.el('div', 'fm-label', m, '③ 还带着的问题（可以不填）');
    const ta2 = this.el('textarea', 'fm-textarea', m);
    ta2.placeholder = '没有答案的问题，也值得被带着走';
    const foot = this.el('div', '', m);
    foot.style.cssText = 'display:flex;justify-content:flex-end;gap:10px;align-items:center;';
    const hint = this.el('span', '', foot);
    hint.style.cssText = 'font-size:11.5px;color:#8a8064;font-weight:700;margin-right:auto;';
    hint.textContent = '答案没有对错，只有是不是你的。';
    const btn = this.el('button', 'btn primary', foot, '写下成形卡 ✦');
    btn.disabled = true;
    const refresh = () => {
      btn.disabled = picks.size < 1 || ta.value.trim().length < 1;
    };
    ta.addEventListener('input', refresh);
    btn.addEventListener('click', () => {
      if (picks.size < 1 || ta.value.trim().length < 1) return;
      this.cb.onSubmit({ picks: Array.from(picks), text: ta.value.trim(), open: ta2.value.trim() });
    });
  }

  // 成形卡：ans 含 picks/text/open/date，stat 含 cards/compares/persons
  showAnswer(ans, question, stat, pack) {
    this.close();
    const bg = this.el('div', 'modal-bg', document.getElementById('ui'));
    this.bg = bg;
    const m = this.el('div', 'modal panel', bg);
    const x = this.el('button', 'modal-close', m, '×');
    x.addEventListener('click', () => this.close());
    const head = this.el('div', 'ans-head', m);
    this.el('div', 'ans-brand', head, 'GUIYI · 归一');
    this.el('div', 'ans-big', head, '成 形 卡');
    const qw = this.el('div', 'ans-qwrap', m);
    this.el('div', 'ans-q sticker', qw, question);
    const row1 = this.el('div', 'ans-row', m);
    this.el('div', 'ar-label', row1, '我带着这些看见');
    const finds = this.el('div', 'ans-finds', row1);
    for (const id of ans.picks) {
      let card = null;
      for (const c of pack.cards) if (c.id === id) card = c;
      if (!card) continue;
      const meta = TYPE_META[card.type];
      const f = this.el('div', 'ans-find', finds);
      const dot = this.el('span', 'af-dot', f);
      dot.style.background = meta.color;
      this.el('span', 'af-t', f, card.t);
      this.el('span', 'af-q', f, card.who);
    }
    const row2 = this.el('div', 'ans-row', m);
    this.el('div', 'ar-label', row2, '我的答案');
    const ansEl = this.el('div', 'ans-answer', row2);
    ansEl.textContent = ans.text;
    if (ans.open) {
      const row3 = this.el('div', 'ans-row', m);
      this.el('div', 'ar-label', row3, '还带着的问题');
      const openEl = this.el('div', 'ans-open', row3);
      openEl.textContent = ans.open;
    }
    const row4 = this.el('div', 'ans-row', m);
    this.el('div', 'ar-label', row4, '这条路');
    const path = this.el('div', 'ans-path', row4);
    const nodes = ['提问', '探索 ' + stat.cards + ' 张', '对照 ' + stat.compares + ' 次', '遇见 ' + stat.persons + ' 位', '成形'];
    for (let i = 0; i < nodes.length; i++) {
      if (i > 0) this.el('span', 'ap-arrow', path, '→');
      this.el('span', 'ap-node', path, nodes[i]);
    }
    // 问题漂流：留下一个问题，飞回入口成为下一位旅人的参考标签
    const drift = this.el('div', 'ans-row', m);
    this.el('div', 'ar-label', drift, '留给下一位旅人的问题');
    const driftWrap = this.el('div', 'drift-wrap', drift);
    const driftInput = this.el('input', 'drift-input', driftWrap);
    driftInput.maxLength = 40;
    driftInput.value = String(ans.open || question || '').slice(0, 40);
    driftInput.placeholder = '写下你想留给下一位旅人的问题……';
    const flyBtn = this.el('button', 'btn small primary', driftWrap, '🕊 让它飞回入口');
    this.el('div', 'drift-note', drift, '点「换个问题，再来一次」，它就会出现在入口标签里。');
    flyBtn.addEventListener('click', () => {
      const q = driftInput.value.trim();
      if (q.length < 2) { driftInput.focus(); return; }
      addCommunityQuestion(q);
      const rect = flyBtn.getBoundingClientRect();
      const flyEl = this.el('div', 'fly-question', document.body, '📮 ' + q);
      flyEl.style.left = Math.round(rect.left) + 'px';
      flyEl.style.top = Math.round(rect.top) + 'px';
      requestAnimationFrame(() => requestAnimationFrame(() => flyEl.classList.add('fly-away')));
      setTimeout(() => { if (flyEl.parentNode) flyEl.parentNode.removeChild(flyEl); }, 1700);
      driftInput.disabled = true;
      flyBtn.disabled = true;
      flyBtn.textContent = '✓ 已飞回入口';
      this.cb.onFlyBack(q);
    });
    const foot = this.el('div', 'ans-foot', m);
    this.el('span', 'ans-date', foot, ans.date || '');
    const again = this.el('button', 'btn ghost', foot, '换个问题，再来一次');
    again.addEventListener('click', () => this.cb.onNewUniverse());
    this.el('span', 'ans-note', foot, '答案归你，问题还给宇宙。');
  }
}
