// 成形 · 关联壁：把收集到的卡片围住水晶球，两两连线并命名关系，织成思路网。
import { el, esc, short } from './util.js';
import { completionText } from '../../ui/evidence.js';

const REL = ['相互印证', '彼此张力', '层层递进'];
const SVG_NS = 'http://www.w3.org/2000/svg';

export default {
  id: 'form',
  title: '成形 · 关联壁',
  hint: '点两张卡连成线，给连线命名；也可拖动卡片重排',
  mount(ctx) {
    const { body, cards, state, placer, anchor, world, effects } = ctx;
    const collected = state?.collected;
    const ids = collected instanceof Set ? collected : Array.isArray(collected) ? new Set(collected) : null;
    const all = state?.pack?.cards ?? cards;
    const pool = ids ? cards.filter((c) => ids.has(c.id)) : cards;
    const use = (pool.length >= 2 ? pool : all.length >= 2 ? all : cards).slice(0, 6);

    const wall = el('div', 'mode-wall');
    const svg = document.createElementNS(SVG_NS, 'svg');
    wall.appendChild(svg);
    wall.appendChild(el('div', 'mode-wall__core', '❓'));
    body.appendChild(wall);

    let relHintsBox = null;
    function renderRelHints() {
      if (relHintsBox) { relHintsBox.remove(); relHintsBox = null; }
      const hints = Array.isArray(ctx.plan?.relHints) ? ctx.plan.relHints : [];
      if (!hints.length) return;
      const box = el('div', 'mode-relhints');
      const h = el('div', 'mode-relhints__title');
      h.textContent = '这些关系，值得先连：';
      box.appendChild(h);
      for (const hint of hints) {
        const item = el('div', 'mode-relhints__item');
        item.textContent = '· ' + hint;
        box.appendChild(item);
      }
      body.appendChild(box);
    }
    renderRelHints();
    ctx.onPlanChange?.(renderRelHints);

    const chips = use.map((card, i) => {
      const a = (i / Math.max(use.length, 1)) * Math.PI * 2 - Math.PI / 2;
      const chip = el('div', 'mode-chip', esc(short(card.t)));
      chip.style.left = (0.5 + 0.36 * Math.cos(a)) * 100 + '%';
      chip.style.top = (0.5 + 0.36 * Math.sin(a)) * 100 + '%';
      wall.appendChild(chip);
      return { chip, card };
    });

    const links = [];
    let picked = null;
    let dragging = null;
    let moved = 0;
    let offX = 0;
    let offY = 0;
    let doneFlag = false;

    const cx = (chip) => chip.offsetLeft + chip.offsetWidth / 2;
    const cy = (chip) => chip.offsetTop + chip.offsetHeight / 2;

    function redraw() {
      for (const l of links) {
        l.line.setAttribute('x1', cx(l.a));
        l.line.setAttribute('y1', cy(l.a));
        l.line.setAttribute('x2', cx(l.b));
        l.line.setAttribute('y2', cy(l.b));
        if (l.labelEl) {
          l.labelEl.style.left = (cx(l.a) + cx(l.b)) / 2 + 'px';
          l.labelEl.style.top = (cy(l.a) + cy(l.b)) / 2 - 10 + 'px';
        }
      }
    }

    function addLink(ca, cb) {
      if (links.some((l) => (l.a === ca && l.b === cb) || (l.a === cb && l.b === ca))) return;
      const line = document.createElementNS(SVG_NS, 'line');
      svg.appendChild(line);
      const l = { a: ca, b: cb, line, rel: null, labelEl: null };
      links.push(l);
      redraw();
      const row = el('div', 'mode-figure__acts');
      row.style.flexWrap = 'wrap';
      REL.forEach((r) => {
        const bt = el('button', 'mode-btn mode-btn--ghost', r);
        bt.addEventListener('click', () => {
          ctx.recordChoice?.('连线「' + l.a.textContent + '×' + l.b.textContent + '」=' + r);
          l.rel = r;
          l.labelEl = el('div', 'mode-wall__tiplabel', esc(r));
          wall.appendChild(l.labelEl);
          row.remove();
          redraw();
          maybeDone();
        });
        row.appendChild(bt);
      });
      body.appendChild(row);
      try { ctx.bloomy?.hud?.toast?.('选一个词，命名这条关系'); } catch { /* noop */ }
    }

    function maybeDone() {
      if (doneFlag || links.filter((l) => l.rel).length < 2) return;
      doneFlag = true;
      wall.querySelector('.mode-wall__core').textContent = '💡';
      body.appendChild(el('div', 'mode-done', completionText(ctx.plan, '✦ 思路成网 · 成形已连接')));
      try { effects?.burst?.(anchor.center, '#ffd166'); } catch { /* noop */ }
      try { world?.setEnergy?.(Math.min(1, (world?.energy ?? 0) + 0.2)); } catch { /* noop */ }
      ctx.done();
    }

    chips.forEach(({ chip }) => {
      chip.addEventListener('pointerdown', (e) => {
        dragging = chip;
        moved = 0;
        offX = e.clientX - chip.offsetLeft;
        offY = e.clientY - chip.offsetTop;
        try { chip.setPointerCapture(e.pointerId); } catch { /* noop */ }
        chip.classList.add('mode-chip--picked');
      });
      chip.addEventListener('pointermove', (e) => {
        if (dragging !== chip) return;
        const nx = Math.min(Math.max(e.clientX - offX, 0), wall.clientWidth - chip.offsetWidth);
        const ny = Math.min(Math.max(e.clientY - offY, 0), wall.clientHeight - chip.offsetHeight);
        moved = Math.max(moved, Math.abs(nx - chip.offsetLeft) + Math.abs(ny - chip.offsetTop));
        chip.style.left = nx + 'px';
        chip.style.top = ny + 'px';
        redraw();
      });
      chip.addEventListener('pointerup', () => {
        if (dragging !== chip) return;
        chip.classList.remove('mode-chip--picked');
        if (moved < 6) {
          if (picked && picked !== chip) {
            addLink(picked, chip);
            picked.classList.remove('mode-chip--picked');
            picked = null;
          } else if (picked === chip) {
            picked = null;
          } else {
            picked = chip;
            chip.classList.add('mode-chip--picked');
          }
        } else {
          picked = null;
        }
        dragging = null;
      });
    });

    window.addEventListener('resize', redraw);
    try { placer?.place?.(el('div', 'mode-wall__tiplabel', '💡 关联壁'), anchor.center); } catch { /* noop */ }
    return () => {
      window.removeEventListener('resize', redraw);
      links.forEach((l) => { try { l.line.remove(); l.labelEl?.remove(); } catch { /* noop */ } });
    };
  },
};
