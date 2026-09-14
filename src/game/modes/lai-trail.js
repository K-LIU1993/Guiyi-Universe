// 来路 · 故事小径：沿小径依序点亮三块故事石，每块石下翻出一段经历。
import { el, esc, fallbackSpots } from './util.js';

const GENERIC = [{ who: '小径', t: '出发之前', body: ['你还记得自己是带着什么问题上路的吗？'] }];

export default {
  id: 'lai',
  title: '来路 · 故事小径',
  hint: '依序点亮故事石，看看每块石下藏着什么',
  mount(ctx) {
    const { body, cards, placer, anchor, bloomy, effects } = ctx;
    const nodes = (cards.length ? cards : GENERIC).slice(0, 3);
    const spots = anchor.spots?.length ? anchor.spots : fallbackSpots(anchor.center, Math.max(nodes.length, 3));
    body.appendChild(el('p', 'mode-card', '这条小径通向你出发的地方。走到石头旁点亮它，它会先告诉你一段来路上的话。'));
    const stones = [];
    let lit = 0;

    nodes.forEach((card, i) => {
      const stone = el('div', 'mode-stone mode-stone--locked');
      stone.innerHTML = '<span class="mode-stone__gem">🪨</span><span class="mode-stone__text"><b>故事石 ' + (i + 1) + '</b><small>尚未点亮</small></span>';
      stone.addEventListener('click', () => {
        if (i !== lit || stone.classList.contains('mode-stone--lit')) return;
        stone.classList.remove('mode-stone--locked');
        stone.classList.add('mode-stone--lit');
        stone.querySelector('.mode-stone__text').innerHTML =
          '<b>' + esc(card.who ?? '经历') + ' · ' + esc(card.t ?? '') + '</b><small>' + esc(card.body?.[0] ?? '') + '</small>';
        lit += 1;
        try { effects?.burst?.(spots[i], '#ffb457'); } catch { /* noop */ }
        try { bloomy?.hud?.toast?.(lit < nodes.length ? '石头亮了，继续往前走' : '小径全亮了'); } catch { /* noop */ }
        if (lit === nodes.length) {
          body.appendChild(el('div', 'mode-done', '✦ 小径点亮 · 来路已回望'));
          try { bloomy?.hud?.say?.('来路上的这些话，你现在听到的不一样了。'); } catch { /* noop */ }
          ctx.done();
        }
      });
      body.appendChild(stone);
      stones.push(stone);
      try { placer?.place?.(el('div', 'mode-wall__tiplabel', '🪨 ' + (i + 1)), spots[i]); } catch { /* noop */ }
    });
    return () => { /* 面板随 stage 移除，无需额外清理 */ };
  },
};
