// 未至 · 迷雾光门：拨散三团迷雾，收集隐藏节点，唤醒绿光门。
import { el, esc, fallbackSpots } from './util.js';
import { askLineEl, sourceRefsEl, completionText } from '../../ui/evidence.js';

export default {
  id: 'wei',
  title: '未至 · 迷雾光门',
  hint: '逐一拨散迷雾，收集隐藏的节点，唤醒光门',
  mount(ctx) {
    const { body, cards, placer, anchor, world, effects, bloomy, sources } = ctx;
    const count = cards.length;
    const spots = anchor.spots?.length >= count ? anchor.spots.slice(0, count) : fallbackSpots(anchor.center, count, 6);
    const gate = el('div', 'mode-gate', '⛩️');
    body.appendChild(gate);
    let cleared = 0;

    spots.forEach((pos, i) => {
      const card = cards[i];
      const m = el('div', 'mode-mist');
      m.innerHTML = '<span class="mode-mist__icon">🌫️</span>' +
        '<span class="mode-mist__text"><b>迷雾 ' + (i + 1) + '</b><small>拨开看看</small></span>' +
        '<span class="mode-mist__gem">💎</span>';
      m.addEventListener('click', () => {
        if (m.classList.contains('mode-mist--cleared')) return;
        m.classList.add('mode-mist--cleared');
        const textEl = m.querySelector('.mode-mist__text');
        textEl.innerHTML =
          '<b>节点 ' + (i + 1) + '</b><small>' + esc(card?.t ?? '一段还没走到的关系') + '</small>';
        if (card?.body?.[0]) {
          const ev = el('div', 'plan-evidence');
          ev.textContent = card.body[0];
          textEl.appendChild(ev);
        }
        const ask = askLineEl(ctx.plan, card);
        if (ask) textEl.appendChild(ask);
        const refs = card ? sourceRefsEl(card, sources) : null;
        if (refs) textEl.appendChild(refs);
        cleared += 1;
        try { ctx.recordChoice?.('拨开迷雾看「' + (card?.t || '') + '」'); } catch { }
        try { effects?.burst?.(pos, '#8ef2b1'); } catch { /* noop */ }
        if (cleared === spots.length) {
          gate.classList.add('mode-gate--open');
          try { world?.awakenPortal?.(); } catch { /* noop */ }
          body.appendChild(el('div', 'mode-done', completionText(ctx.plan, '✦ 光门已醒 · 未至在靠近')));
          try { bloomy?.hud?.say?.('迷雾散开的地方，门就亮了。还没到的，正在靠近。'); } catch { /* noop */ }
          ctx.done();
        } else {
          try { bloomy?.hud?.toast?.('散开了一团，还有 ' + (spots.length - cleared) + ' 团'); } catch { /* noop */ }
        }
      });
      body.appendChild(m);
      try { placer?.place?.(el('div', 'mode-wall__tiplabel', '🌫️'), pos); } catch { /* noop */ }
    });
    return () => { /* noop */ };
  },
};
