// 六岛专属交互模式：注册表与运行时。宿主通过 createModes(hooks) 接入。
import { planForRegion, normalizeDeclaredPlan, buildPriorChoices } from '../adaptive.js';
import { requestIslandAdapt } from '../worldClient.js';
import { renderPlanBar } from '../../ui/evidence.js';
import laiTrail from './lai-trail.js';
import cidiConsole from './cidi-console.js';
import chaFork from './cha-fork.js';
import yuCampfire from './yu-campfire.js';
import weiMistGate from './wei-mist-gate.js';
import formIdeaWall from './form-idea-wall.js';
import './modes.css';

export const MODES = {
  lai: laiTrail,
  cidi: cidiConsole,
  cha: chaFork,
  yu: yuCampfire,
  wei: weiMistGate,
  form: formIdeaWall,
};

const DEFAULT_TYPE_REGION = { story: 'lai', fact: 'cidi', view: 'cha', person: 'yu', blind: 'wei' };

/** 从 hooks 中尽力解析当前问题包的全部卡片（多重兜底，适配不同宿主接线方式）。 */
export function allCards(hooks) {
  const s = hooks.state ?? {};
  const pack = hooks.pack ?? s.pack ?? null;
  if (Array.isArray(hooks.cards)) return hooks.cards;
  if (Array.isArray(pack?.cards)) return pack.cards;
  if (Array.isArray(s.cards)) return s.cards;
  if (Array.isArray(hooks.PACKS?.[0]?.cards)) return hooks.PACKS[0].cards;
  return [];
}

/** 按区域筛卡；form 没有专属卡类型，返回全部卡交由模块自行兜底。 */
export function cardsForRegion(hooks, regionKey) {
  const cards = allCards(hooks);
  if (!cards.length || regionKey === 'form') return cards;
  const map = hooks.state?.TYPE_REGION ?? hooks.TYPE_REGION ?? DEFAULT_TYPE_REGION;
  return cards.filter((c) => map[c.type] === regionKey);
}

/** 3D 标签放置器：把 DOM 元素锚到世界坐标，统一清理。 */
function makePlacer(hooks) {
  const items = [];
  return {
    place(el, pos) {
      let handle = null;
      try { handle = hooks.engine?.addLabel?.(el, pos) ?? null; } catch { handle = null; }
      items.push({ el, handle });
      return handle;
    },
    clear() {
      for (const it of items) {
        try { hooks.engine?.removeLabel?.(it.handle ?? it.el); } catch { /* noop */ }
        it.el.remove();
      }
      items.length = 0;
    },
  };
}

export function createModes(hooks) {
  let active = null;
  let islandSeq = 0;

  function makeAdaptButton(key, ctx) {
    const b = document.createElement('button');
    b.className = 'plan-adapt-btn';
    b.type = 'button';
    b.textContent = '🔄 在线重规划';
    b.title = '请求服务端 LLM 结合你的进度，为当前岛重新生成引导（可选，失败时保留本地引导）';
    b.addEventListener('click', async () => {
      if (b.disabled || !hooks.pack) return;
      b.disabled = true;
      b.textContent = '在线重规划中…';
      const seq = islandSeq;
      try {
        const st = hooks.state || {};
        const titleOf = (id) => {
          for (const c of hooks.pack.cards || []) {
            if (c && c.id === id) return '「' + (c.t || id) + '」';
          }
          return id;
        };
        const res = await requestIslandAdapt({
          question: hooks.pack.q,
          region: key,
          cards: ctx.cards,
          priorChoices: buildPriorChoices(st, key, titleOf)
        });
        if (seq !== islandSeq) {
          hooks.bloomy?.hud?.toast?.('已离开本岛 · 过期的重规划结果已忽略');
          return;
        }
        const declared = normalizeDeclaredPlan(res.plan, key === 'form' ? (hooks.pack.cards || []) : ctx.cards);
        if (!declared) throw new Error('plan empty');
        declared.source = 'llm';
        declared.online = true;
        ctx.setPlan(declared);
        hooks.bloomy?.hud?.toast?.('LLM 已按你的进度重写本岛引导');
    } catch (err) {
      hooks.bloomy?.hud?.toast?.('在线适配不可用 · 保留本包/规则引导');
    } finally {
      if (seq === islandSeq) {
        b.disabled = false;
        b.textContent = '🔄 在线重规划';
      }
      }
    });
    return b;
  }

  function ensureStage(key, mode) {
    if (typeof hooks.ui?.createStage === 'function') {
      return hooks.ui.createStage(key, mode.title, mode.hint);
    }
    const stage = document.createElement('div');
    stage.className = 'mode-stage';
    stage.dataset.region = key;
    stage.innerHTML =
      '<div class="mode-stage__head">' +
      '<span class="mode-stage__title"></span>' +
      '<span class="mode-stage__hint"></span>' +
      '</div><div class="mode-stage__body"></div>';
    stage.querySelector('.mode-stage__title').textContent = mode.title;
    stage.querySelector('.mode-stage__hint').textContent = mode.hint ?? '';
    (hooks.dom ?? document.body).appendChild(stage);
    return stage;
  }

  return {
    has(key) { return !!MODES[key]; },
    isActive(key) { return !!active && active.key === key; },
    enter(key, anchor) {
      this.leave();
      const mode = MODES[key];
      if (!mode || !anchor) return false;
      const stage = ensureStage(key, mode);
      const placer = makePlacer(hooks);
    const body = stage.querySelector?.('.mode-stage__body') ?? stage;
    const plan = planForRegion(hooks.pack, key, hooks.state);
    const sources = hooks.pack && Array.isArray(hooks.pack.sources) ? hooks.pack.sources : [];
    const planBar = document.createElement('div');
    planBar.className = 'plan-bar';
    renderPlanBar(planBar, plan);
    const planListeners = [];
    const ctx = {
      ...hooks,
      stage,
      body,
      placer,
      anchor,
      cards: cardsForRegion(hooks, key),
      sources,
      plan,
      planBar,
      onPlanChange(fn) {
        if (typeof fn === 'function') planListeners.push(fn);
      },
      recordChoice(text) {
        const st = hooks.state;
        const t = typeof text === 'string' ? text.trim() : '';
        if (!st || !t) return;
        if (!st.regionChoices || typeof st.regionChoices !== 'object' || Array.isArray(st.regionChoices)) st.regionChoices = {};
        const arr = Array.isArray(st.regionChoices[key]) ? st.regionChoices[key] : [];
        arr.push(t);
        st.regionChoices[key] = arr.slice(-12);
        try { hooks.save?.(); } catch { }
      },
      setPlan(nextPlan) {
        ctx.plan = nextPlan;
        renderPlanBar(planBar, nextPlan);
        planBar.appendChild(adaptBtn);
        const st = hooks.state;
        if (st && st.pack === hooks.pack) {
          if (!st.pack.islandPlans || typeof st.pack.islandPlans !== 'object') st.pack.islandPlans = {};
          st.pack.islandPlans[key] = nextPlan;
          try { hooks.save?.(); } catch { }
        }
        for (const fn of planListeners) {
          try { fn(nextPlan); } catch { }
        }
      },
      done() {
          try { hooks.progress?.complete?.(key); } catch { /* noop */ }
          try { hooks.effects?.ripple?.(anchor.center, '#ffd166'); } catch { /* noop */ }
          try { hooks.bloomy?.hud?.toast?.('这一站，完成了'); } catch { /* noop */ }
        },
      };
      const adaptBtn = makeAdaptButton(key, ctx);
      if (hooks.pack) planBar.appendChild(adaptBtn);
      body.appendChild(planBar);
      let dispose = null;
      try { dispose = mode.mount(ctx) ?? null; }
      catch (err) { console.warn('[modes] mount failed:', key, err); }
      active = { key, dispose, stage, placer };
      return true;
    },
    leave() {
      if (!active) return;
      try { active.dispose?.(); } catch { /* noop */ }
      active.placer.clear();
      if (typeof hooks.ui?.removeStage === 'function') hooks.ui.removeStage();
      else active.stage?.remove();
      active = null;
    },
  };
}
