// 未至 · 迷雾光门：拨散三团迷雾，收集隐藏节点，唤醒绿光门。
import { el, esc, fallbackSpots } from './util.js';

export default {
  id: 'wei',
  title: '未至 · 迷雾光门',
  hint: '拨散三团迷雾，收集隐藏的节点，唤醒光门',
  mount(ctx) {
    const { body, cards, placer, anchor, world, effects, bloomy } = ctx;
    const spots = anchor.spots?.length ? anchor.spots.slice(0, 3) : fallbackSpots(anchor.center, 3, 6);
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
        m.querySelector('.mode-mist__text').innerHTML =
          '<b>节点 ' + (i + 1) + '</b><small>' + esc(card?.t ?? '一段还没走到的关系') + '</small>';
        cleared += 1;
        try { effects?.burst?.(pos, '#8ef2b1'); } catch { /* noop */ }
        if (cleared === spots.length) {
          gate.classList.add('mode-gate--open');
          try { world?.awakenPortal?.(); } catch { /* noop */ }
          body.appendChild(el('div', 'mode-done', '✦ 光门已醒 · 未至在靠近'));
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
