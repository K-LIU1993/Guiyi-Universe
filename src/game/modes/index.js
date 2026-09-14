// 六岛专属交互模式：注册表与运行时。宿主通过 createModes(hooks) 接入。
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

/** 按区域筛出当前问题包的卡片。 */
export function cardsForRegion(state, regionKey) {
  const pack = state?.pack ?? state?.PACKS?.[0] ?? null;
  const map = state?.TYPE_REGION ?? {};
  if (!pack || !Array.isArray(pack.cards)) return [];
  return pack.cards.filter((c) => map[c.type] === regionKey);
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
      const ctx = {
        ...hooks,
        stage,
        body,
        placer,
        anchor,
        cards: cardsForRegion(hooks.state, key),
        done() {
          try { hooks.progress?.complete?.(key); } catch { /* noop */ }
          try { hooks.effects?.ripple?.(anchor.center, '#ffd166'); } catch { /* noop */ }
          try { hooks.bloomy?.hud?.toast?.('这一站，完成了'); } catch { /* noop */ }
        },
      };
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
