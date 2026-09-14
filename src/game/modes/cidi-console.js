// 此地 · 条件控制台：翻动三个条件开关，读屏后再拉下汇总杆。
import { el, esc, short } from './util.js';

const KEYS = ['A', 'B', 'C'];
const GENERIC = [
  { who: '此地', t: '当下的条件一', body: ['先看清此刻已经成立的部分。'] },
  { who: '此地', t: '当下的条件二', body: ['有些条件正在悄悄成立。'] },
  { who: '此地', t: '当下的条件三', body: ['还有一个条件，等你确认。'] },
];

export default {
  id: 'cidi',
  title: '此地 · 条件控制台',
  hint: '翻动三个条件开关，读屏后拉下汇总杆',
  mount(ctx) {
    const { body, cards, placer, anchor, effects } = ctx;
    const nodes = (cards.length ? cards : GENERIC).slice(0, 3);
    const total = Math.max(nodes.length, 1);
    const on = nodes.map(() => false);
    const readout = el('div', 'mode-readout', '条件待定 …');
    body.appendChild(readout);

    nodes.forEach((card, i) => {
      const row = el('div', 'mode-switch');
      row.innerHTML = '<span class="mode-switch__lever"></span><span class="mode-switch__label"><b>条件 ' + KEYS[i] + '</b> · ' + esc(short(card.t)) + '</span>';
      row.addEventListener('click', () => {
        on[i] = !on[i];
        row.classList.toggle('mode-switch--on', on[i]);
        render();
      });
      body.appendChild(row);
    });

    const lever = el('button', 'mode-btn', '拉下汇总杆');
    lever.disabled = true;
    lever.addEventListener('click', () => {
      readout.textContent = nodes.map((c) => '» ' + (c.ask ?? c.t ?? '')).join('\n') +
        '\n—— 这些条件叠在一起，你现在站在哪里？';
      body.appendChild(el('div', 'mode-done', '✦ 汇总完成 · 此地已校准'));
      try { effects?.burst?.(anchor.center, '#5aa9ff'); } catch { /* noop */ }
      ctx.done();
    });
    body.appendChild(lever);

    function render() {
      const count = on.filter(Boolean).length;
      const lines = nodes.map((c, i) => on[i]
        ? '✓ 条件 ' + KEYS[i] + '：' + (c.who ? c.who + ' · ' : '') + short(c.t) + ' — ' + (c.body?.[0] ?? '')
        : '□ 条件 ' + KEYS[i] + '：未开启').join('\n');
      readout.textContent = count < total
        ? lines + '\n» 还差 ' + (total - count) + ' 个条件'
        : lines + '\n» 条件齐了，可以拉杆汇总';
      lever.disabled = count < total;
    }
    render();
    try { placer?.place?.(el('div', 'mode-wall__tiplabel', '⚙ 条件控制台'), anchor.center); } catch { /* noop */ }
    return () => { /* noop */ };
  },
};
