// 遇见 · 篝火围坐：点人物听经历，对方反问你，用态度按钮回应，火随共鸣变亮。
import { el, esc } from './util.js';
import { sourceRefsEl, stepPromptFor, completionText } from '../../ui/evidence.js';

const FACES = ['🧣', '🎒', '🧢', '🍂'];
const GENERIC = [
  { who: '同行者', t: '一段相似的经历', body: ['我也在类似的地方停了很久。'], ask: '你当时是怎么熬过来的？' },
  { who: '同行者', t: '一段不同的经历', body: ['我的路好像和你相反。'], ask: '如果换成我这样走，你会怎么选？' },
  { who: '同行者', t: '一句心里话', body: ['其实我到现在也没完全想明白。'], ask: '没想明白的部分，你还愿意带着走吗？' },
];

export default {
  id: 'yu',
  title: '遇见 · 篝火围坐',
  hint: '查看作者观点摘要，用自己的态度回应',
  mount(ctx) {
    const { body, cards, placer, anchor, bloomy, effects, sources } = ctx;
    const nodes = (cards.length ? cards : GENERIC).slice(0, 3);
    const fire = el('div', 'mode-fire', '🔥');
    fire.setAttribute('role', 'img');
    body.appendChild(fire);
    let shared = 0;

    nodes.forEach((card, i) => {
      const fig = el('div', 'mode-figure');
      fig.innerHTML = '<span class="mode-figure__face">' + FACES[i % FACES.length] + '</span>' +
        '<span class="mode-figure__bubble"><b>' + esc(card.who ?? '同行者') + '</b>' +
        '<small style="display:block;opacity:.7">点这里，查看来源摘要</small></span>';
      fig.addEventListener('click', () => {
        if (fig.classList.contains('mode-figure--done')) return;
        const b = fig.querySelector('.mode-figure__bubble');
        const ask = stepPromptFor(ctx.plan, card) || card.ask || '';
        b.innerHTML = '<b>' + esc(card.who ?? '同行者') + ' · ' + esc(card.t ?? '') + '</b><br>' +
          esc((card.body ?? []).join(' ')) +
          (ask ? '<div class="mode-figure__ask">AI 探索追问：' + esc(ask) + '</div>' : '') +
          '<div class="mode-figure__acts"></div>';
        const refs = sourceRefsEl(card, sources);
        if (refs) b.appendChild(refs);
        const acts = b.querySelector('.mode-figure__acts');
        ['这与我的观察相符', '这与我的观察不同'].forEach((txt) => {
          const bt = el('button', 'mode-btn mode-btn--ghost', txt);
          bt.addEventListener('click', () => answer(bt));
          acts.appendChild(bt);
        });
        function answer(button) {
          ctx.recordChoice?.('对「' + (card.t || '来源观点') + '」选择：' + button.textContent);
          fig.classList.add('mode-figure--done');
          fig.style.cursor = 'default';
          acts.remove();
          const ask = b.querySelector('.mode-figure__ask');
          if (ask) ask.insertAdjacentHTML('beforeend', ' <span style="opacity:.7">（你回应了）</span>');
          shared += 1;
          fire.style.filter = 'drop-shadow(0 0 ' + (10 + shared * 5) + 'px rgba(255,150,60,.9))';
          if (shared === nodes.length) {
            fire.classList.add('mode-fire--bright');
            body.appendChild(el('div', 'mode-done', '✦ 篝火烧旺 · 遇见已围坐'));
            try { effects?.burst?.(anchor.center, '#ff9640'); } catch { /* noop */ }
            try { bloomy?.hud?.say?.(completionText(ctx.plan, '火光把每个人的样子都照清楚了。')); } catch { }
            ctx.done();
          } else {
            try { bloomy?.hud?.toast?.('火光亮了一些'); } catch { /* noop */ }
          }
        }
      });
      body.appendChild(fig);
    });
    try { placer?.place?.(el('div', 'mode-wall__tiplabel', '🔥 篝火'), anchor.center); } catch { /* noop */ }
    return () => { /* noop */ };
  },
};
