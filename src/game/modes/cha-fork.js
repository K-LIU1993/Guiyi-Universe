// 岔路 · 分岔桥：转动路牌选一条桥过谷，读彼岸之卡，可折返走另一条。
import { el, esc, short, fallbackSpots } from './util.js';

const GENERIC = [
  { t: '左岸的路', body: ['你还没走的那一条。'], ask: '如果不选它，你错过了什么？' },
  { t: '右岸的路', body: ['另一条看起来更稳的路。'], ask: '如果只走它，你又错过了什么？' },
];

export default {
  id: 'cha',
  title: '岔路 · 分岔桥',
  hint: '转动路牌选一条桥，走过去看看对岸',
  mount(ctx) {
    const { body, cards, placer, anchor, bloomy, effects } = ctx;
    const src = cards.length >= 2 ? cards : GENERIC;
    const sides = src.slice(0, 2).map((c) => ({ label: short(c.t ?? '岸'), card: c }));
    const spots = anchor.spots?.length >= 2
      ? [anchor.spots[0], anchor.spots[anchor.spots.length - 1]]
      : fallbackSpots(anchor.center, 2, 5);
    let side = 0;
    let walking = false;
    let doneFlag = false;
    const crossed = new Set();

    const sign = el('div', 'mode-fork__sign');
    sign.innerHTML =
      '<span class="mode-fork__arm mode-fork__arm--left">' + esc(sides[0].label) + '</span>' +
      '<span class="mode-fork__arm mode-fork__arm--right">' + esc(sides[1].label) + '</span>' +
      '<span class="mode-fork__pole"></span>';
    const tip = el('p', 'mode-card', '路牌现在指向 ' + sides[0].label + '。点路牌可以换一条。');
    const walk = el('div', 'mode-fork__path', '<div class="mode-fork__walk"><i></i></div>');
    const go = el('button', 'mode-btn', '过桥去对岸');
    const view = el('div', 'mode-card', '先选一条路，然后走过去。');
    sign.addEventListener('click', () => {
      if (walking) return;
      side = 1 - side;
      sign.classList.toggle('mode-fork__sign--right', side === 1);
      tip.textContent = '路牌现在指向 ' + sides[side].label + '。点路牌可以换一条。';
    });
    go.addEventListener('click', () => {
      if (walking) return;
      walking = true;
      go.disabled = true;
      walk.querySelector('i').style.width = '100%';
      try { bloomy?.flyTo?.(spots[side]); } catch { /* noop */ }
      setTimeout(() => {
        walking = false;
        go.disabled = false;
        walk.querySelector('i').style.width = '0';
        const c = sides[side].card;
        view.innerHTML =
          '<b>' + esc(sides[side].label) + ' · ' + esc(c.t ?? '') + '</b><br>' +
          esc((c.body ?? []).join(' ')) +
          (c.ask ? '<br><span style="color:#ffd166">' + esc(c.ask) + '</span>' : '');
        if (!crossed.has(side)) {
          crossed.add(side);
          try { effects?.burst?.(spots[side], '#e2604f'); } catch { /* noop */ }
        }
        if (!doneFlag) {
          doneFlag = true;
          body.appendChild(el('div', 'mode-done', '✦ 已过一次桥 · 岔路已选择'));
          try { bloomy?.hud?.say?.('另一条路还在那里。想回头的时候，随时可以再走一次。'); } catch { /* noop */ }
          ctx.done();
        }
        go.textContent = '再走另一条看看';
      }, 1700);
    });
    body.append(sign, tip, walk, go, view);
    try { placer?.place?.(el('div', 'mode-wall__tiplabel', '↗ 岔路'), anchor.center); } catch { /* noop */ }
    return () => { /* noop */ };
  },
};
