// 归一 · 一问一世界 — 主编排
import * as THREE from 'three';
import { Universe } from './core/world.js';
import { Engine } from './core/engine.js';
import { Effects } from './core/effects.js';
import { REGIONS, REGION_MAP, EXPLORE_KEYS } from './core/constants.js';
import { pick } from './core/utils.js';
import { Bloomy } from './game/bloomy.js';
import { getPack } from './game/content.js';
import { generatePack } from './game/personalize.js';
import * as S from './game/state.js';
import { requestWorldPack, requestIslandAdapt } from './game/worldClient.js';
import { packOrigin, buildPriorChoices, normalizeDeclaredPlan } from './game/adaptive.js';
import { HUD } from './ui/hud.js';
import { CardsUI } from './ui/cards.js';
import { AnswerUI } from './ui/answer.js';
import { createModes } from './game/modes/index.js';

// Bloomy 的六岛深一层解说
const EXPLAIN = {
  lai: '来路岛收着别人的故事。故事不是数据——它记录一个人在真实约束下怎么选。先看约束，再看选择。',
  cidi: '此地岛摆的是条件与事实。焦虑常常来自把未知当成已知；把条件翻清楚，题就先解了一半。',
  cha: '岔路岛上立场相撞。别急着站队，先问每个立场最护着的是什么、最愿意牺牲的是什么。',
  yu: '遇见岛上是真实的人。观点可以检索，但一个人讲出自己代价时的犹豫，检索不到。',
  wei: '未至岛照的是盲点。它不回答你的问题，它检查你的问题本身站不站得住。',
  form: '成形岛不生产答案，只收你自己长出来的答案。走够四个方向、见过他者、做过对照，水晶就会为你亮。'
};

const REASKS = [
  '换个问法试试：把「该不该」换成「我愿意为它付什么代价」。',
  '另一个问法：如果两条路都通，你怕的到底是哪一条的什么？',
  '试试问十年后的自己：现在这道题，还会是同一道题吗？',
  '把问题倒过来：要推翻你现在的倾向，需要什么证据？'
];

let universe = null;
let engine = null;
let effects = null;
let bloomy = null;
let hud = null;
let cardsUI = null;
let answerUI = null;
let state = null;
let pack = null;
let current = null;
let generating = false;
let modes = null;
let startSeq = 0;
const modesDone = new Set();
const stateBridge = {};

// 解锁阶段:完成任意一处探索后点亮岔路与遇见;两处之后迷雾散开、未至显现
const STAGE2 = ['cha', 'yu'];

function progressOf(s) {
  if (!s.progress) s.progress = {};
  return s.progress;
}

function completedCount(s) {
  const p = progressOf(s);
  let n = 0;
  for (const k in p) { if (p[k]) n++; }
  return n;
}

function maybeUnlock() {
  if (!state || !universe) return;
  const done = completedCount(state);
  for (const k of STAGE2) {
    if (done >= 1 && universe.isLocked(k)) {
      universe.setUnlocked(k, true);
      hud.toast('✦ 区域点亮 · ' + REGION_MAP[k].name);
    }
  }
  if ((done >= 2 || S.portalReady(state)) && universe.isLocked('wei')) {
    if (universe.awakenPortal()) {
      hud.toast('✦ 迷雾散去 · 未至岛向你打开');
      bloomy.say('portal', true);
    }
  }
  S.saveState(state);
}

function getAnchor(key) {
  const a = universe.anchors[key];
  if (!a) return null;
  return {
    center: { x: a.center.x, y: a.center.y, z: a.center.z },
    spots: a.spots.map((p) => ({ x: p.x, y: p.y, z: p.z })),
    land: a.land.clone()
  };
}

function qText() { return (state && state.q) || (pack ? pack.q : ''); }

function collectedCards() {
  if (!state || !pack) return [];
  const out = [];
  for (const id of state.collected) {
    const c = S.cardById(pack, id);
    if (c) out.push(c);
  }
  return out;
}

function stats() {
  return {
    cards: state.collected.length,
    compares: state.compares.length,
    persons: S.personCount(state)
  };
}

function missingText() {
  const miss = [];
  for (const k of EXPLORE_KEYS) {
    if (k === 'wei' && !S.portalReady(state)) continue;
    if (S.regionCount(state, k) < 1) miss.push(REGION_MAP[k].name + '岛还没收卡');
  }
  if (S.personCount(state) < 1) miss.push('还没去遇见岛');
  if (state.compares.length < 1) miss.push('还没做过对照');
  return miss.join('、') || '再走一走，看看还缺什么';
}

function unlockToasts() {
  const unlocked = S.checkAchievements(state);
  if (unlocked.length < 1) return;
  S.saveState(state);
  for (const k of unlocked) {
    for (const a of S.ACHIEVEMENTS) {
      if (a.key === k) hud.toastAchievement(a.name);
    }
  }
}

function openDrawerFor(key) {
  const cards = pack.cards.filter((c) => { return S.TYPE_REGION[c.type] === key; });
  cardsUI.openDrawer(REGION_MAP[key], cards);
}

function completeIsland(key) {
  if (modesDone.has(key)) return;
  modesDone.add(key);
  progressOf(state)[key] = true;
  const cards = (pack ? pack.cards : []).filter((c) => S.TYPE_REGION[c.type] === key);
  for (const c of cards) onCollect(c);
  S.saveState(state);
  maybeUnlock();
  if (key === 'wei') { try { universe.awakenPortal(); } catch (err) { /* noop */ } }
}

function startGenerating() {
  generating = true;
  hud.showGenerating(qText());
  engine.rig.reset();
  engine.rig.dTarget.set(0, 7, 0);
  engine.rig.dRadius = 24;
  engine.rig.dTheta = 0.35;
  universe.rise(() => {
    engine.rig.dTarget.set(0, 2, 0);
    engine.rig.dRadius = 62;
    enterWorld();
  });
}

function onStart(question) {
  return onStartQuestion(null, question);
}

function applyPack(nextPack, origin) {
  pack = nextPack;
  state = S.createState(pack.id);
  state.q = pack.q;
  state.pack = pack;
  state.packOrigin = origin;
  stateBridge.pack = pack;
  stateBridge.TYPE_REGION = S.TYPE_REGION;
  S.saveState(state);
  hud.setQuestion(state.q);
  hud.setPackOrigin(packOrigin(pack, origin).text);
}

async function onStartQuestion(unusedPackId, customQ) {
  const seq = ++startSeq;
  const q = String(customQ || '').trim();
  if (!q) {
    hud.showDemoChooser((choice) => { startDemo(choice); });
    return;
  }
  hud.hideIntro();
  hud.hideWorldError();
  hud.hideDemoChooser();
  hud.setQuestion(q);
  hud.setPackOrigin('生成中 · 服务端 LLM + 知乎检索…');
  hud.setStartBusy(true);
  generating = true;
  hud.showGenerating(q);
  try {
    const { pack: nextPack, warnings } = await requestWorldPack(q);
    if (seq !== startSeq) return;
    applyPack(nextPack, 'api');
    for (const w of warnings || []) hud.toast('提示 · ' + w);
    startGenerating();
  } catch (err) {
    if (seq !== startSeq) return;
    generating = false;
    hud.hideGenerating();
    hud.setPackOrigin('');
    hud.showWorldError(err && err.message ? err.message : '生成服务暂时不可用。', {
      onRetry: () => { onStart(q); },
      onDemo: () => { hud.showDemoChooser((choice) => { startDemo(choice); }); },
      onDismiss: () => { hud.showIntro(null); }
    });
  } finally {
    if (seq === startSeq) hud.setStartBusy(false);
  }
}

function startDemo(choice) {
  const mode = choice && choice.mode;
  let nextPack;
  if (mode === 'preset') {
    nextPack = getPack(choice.packId);
  } else if (choice && typeof choice.question === 'string' && choice.question.trim()) {
    nextPack = generatePack(choice.question.trim());
  } else {
    nextPack = getPack('paint');
  }
  hud.hideIntro();
  hud.hideWorldError();
  applyPack(nextPack, 'local-demo');
  startGenerating();
}

function onContinue() {
  const seq = ++startSeq;
  const saved = S.loadState();
  if (!saved) { hud.showIntro(null); return; }
  state = saved;
  if (S.storedPackUsable(state.pack)) {
    pack = state.pack;
  } else {
    const base = getPack(state.packId);
    pack = (state.q && base && state.q !== base.q) ? generatePack(state.q) : base;
    state.pack = pack;
    state.packOrigin = 'legacy';
    S.saveState(state);
  }
  stateBridge.pack = pack;
  stateBridge.TYPE_REGION = S.TYPE_REGION;
  hud.hideIntro();
  hud.setQuestion(qText());
  hud.setPackOrigin(packOrigin(pack, state.packOrigin).text);
  startGenerating();
}

function onDiscard() {
  S.clearSave();
  state = null;
  hud.showIntro(null);
}

function onReset() {
  S.clearSave();
  location.reload();
}

function onNewUniverse() {
  S.clearSave();
  location.reload();
}

function enterWorld() {
  generating = false;
  hud.hideGenerating();
  bloomy.group.visible = true;
  bloomy.place(universe.anchors.form.land.clone());
  bloomy.celebrate();
  bloomy.say('hello');
  const pr = progressOf(state);
  if (pr.cha) universe.locked.cha = false;
  if (pr.yu) universe.locked.yu = false;
  if (pr.wei) { universe.locked.wei = false; universe.portalAwake = true; universe.portalGlow = 1; }
  universe.applyLocks();
  maybeUnlock();
  hud.setStep(S.currentStep(state));
  hud.setVisited(state.visited);
  for (const r of REGIONS) hud.setTagCount(r.key, S.regionCount(state, r.key));
  universe.setEnergy(S.energyOf(state));
  if (state.answer) answerUI.showAnswer(state.answer, qText(), stats(), pack);
  hud.setFormAvailable(S.formReady(state) && !state.answer);
}

function travel(key) {
  if (generating || !state || bloomy.flying) return;
  if (key === current) {
    if (modes && modes.has(key) && key !== 'form') modes.enter(key, universe.anchors[key]);
    else if (key !== 'form' && key !== 'wei') openDrawerFor(key);
    return;
  }
  if (key === 'wei' && !S.portalReady(state)) {
    bloomy.say('locked', true);
    hud.toast('传送门未点亮 · 先走完 来路 / 此地 / 岔路');
    return;
  }
  if (universe.isLocked(key)) {
    bloomy.say('locked', true);
    hud.toast(REGION_MAP[key].name + '还在雾里 · 先在一处把探索做完，它自然会亮');
    return;
  }
  if (modes) modes.leave();
  current = key;
  cardsUI.closeAll();
  answerUI.close();
  if (modes) modes.leave();
  const land = universe.anchors[key].land.clone();
  bloomy.flyTo(land, () => onArrive(key));
  const pos = universe.islands[key].position;
  engine.rig.focusOn(pos.x, pos.z, key === 'form' ? 38 : 30);
  effects.spawnRipple(land, REGION_MAP[key].three, 1.2);
}

function onArrive(key) {
  const first = state.visited.indexOf(key) === -1;
  S.visitRegion(state, key);
  S.saveState(state);
  if (key === 'wei' && first) {
    universe.awakenPortal();
    const wp = universe.islands.wei.position;
    effects.spawnBurst(new THREE.Vector3(wp.x + 0.4, 3.3, wp.z + 0.4), 0x8cff6b, 42, 5.5, 4);
    bloomy.say('portal', true);
    hud.toast('✦ 传送门已点亮 · 未至岛向你打开');
  } else {
    bloomy.say('arrive_' + key, true);
  }
  hud.setVisited(state.visited);
  hud.setCurrent(key);
  for (const r of REGIONS) hud.setTagCount(r.key, S.regionCount(state, r.key));
  hud.setStep(S.currentStep(state));
  unlockToasts();
  maybeUnlock();
  if (key === 'form') {
    if (state.answer) {
      answerUI.showAnswer(state.answer, qText(), stats(), pack);
    } else if (S.formReady(state)) {
      answerUI.openComposer(qText(), collectedCards(), pack.islandPlans?.form, pack.sources || []);
    } else {
      hud.toast('成形条件未满足 · 还差：' + missingText());
    }
  } else {
    if (modes && modes.has(key)) modes.enter(key, universe.anchors[key]);
    else openDrawerFor(key);
  }
}

function onCollect(card) {
  if (!state) return;
  const before = state.collected.length;
  S.collectCard(state, card);
  if (state.collected.length === before) return;
  S.saveState(state);
  const regionKey = S.TYPE_REGION[card.type];
  hud.setTagCount(regionKey, S.regionCount(state, regionKey));
  universe.setEnergy(S.energyOf(state));
  const bp = bloomy.group.position;
  effects.spawnBurst(new THREE.Vector3(bp.x, bp.y + 2.2, bp.z), 0x7de3ff, 26, 4, 3.2);
  bloomy.celebrate();
  bloomy.say('collect', true);
  hud.toast('收下 · ' + card.t);
  hud.setStep(S.currentStep(state));
  hud.setFormAvailable(S.formReady(state) && !state.answer);
}

function onMark(cardId, mood) {
  if (!state) return;
  S.markCard(state, cardId, mood);
  S.saveState(state);
}

function onCompareStart(card) {
  cardsUI.openCompare(card.id);
}

function onCompareConfirm(a, b, verdict) {
  if (!state) return;
  const added = S.addCompare(state, a, b);
  if (verdict) state.marked['cmp:' + a + '|' + b] = verdict;
  S.saveState(state);
  if (!added) return;
  bloomy.say('compare', true);
  hud.toast('对照 +1 · 看见不同');
  universe.setEnergy(S.energyOf(state));
  hud.setStep(S.currentStep(state));
  hud.setFormAvailable(S.formReady(state) && !state.answer);
  unlockToasts();
}

function suggestNext() {
  const order = ['lai', 'cidi', 'cha'];
  for (const k of order) {
    if (state.visited.indexOf(k) === -1) return k;
  }
  for (const k of EXPLORE_KEYS) {
    if (k === 'wei' && !S.portalReady(state)) continue;
    if (S.regionCount(state, k) < 1) return k;
  }
  if (S.personCount(state) < 1) return 'yu';
  if (state.compares.length < 1) return 'cha';
  if (state.visited.indexOf('wei') === -1) return 'wei';
  return 'form';
}

function onRadial(act) {
  if (generating || !state) return;
  if (act === 'explain') {
    hud.say(EXPLAIN[current] || EXPLAIN.form, 10000);
  } else if (act === 'compare') {
    if (state.collected.length < 2) { hud.toast('先收下两张卡，再上对照桌'); return; }
    cardsUI.openCompare(null);
  } else if (act === 'next') {
    const nxt = suggestNext();
    if (nxt === 'cha' && state.compares.length < 1) hud.toast('对照还欠一次 · 岔路收卡后点 Bloomy → ⚖️ 比较观点');
    travel(nxt);
  } else if (act === 'reask') {
    hud.say(pick(REASKS), 9000);
  }
}

function onForm() {
  if (generating || !state) return;
  if (state.answer) { answerUI.showAnswer(state.answer, qText(), stats(), pack); return; }
  if (!S.formReady(state)) {
    hud.toast('成形条件未满足 · 还差：' + missingText());
    return;
  }
  current = 'form';
  cardsUI.closeAll();
  if (modes) modes.leave();
  const land = universe.anchors.form.land.clone();
  bloomy.flyTo(land, null);
  const pos = universe.islands.form.position;
  engine.rig.focusOn(pos.x, pos.z, 38);
  effects.spawnRipple(land, REGION_MAP.form.three, 1.2);
  hud.setCurrent('form');
  answerUI.openComposer(qText(), collectedCards(), pack.islandPlans?.form, pack.sources || []);
}

function onSubmit(data) {
  if (!state) return;
  if (!state.regionChoices) state.regionChoices = {};
  state.regionChoices.form = ['成形依据：' + data.picks.map(id => S.cardById(pack, id)?.t || id).join('、')];
  state.answer = {
    picks: data.picks,
    text: data.text,
    open: data.open,
    date: new Date().toLocaleDateString('zh-CN')
  };
  S.saveState(state);
  universe.setEnergy(S.energyOf(state));
  effects.spawnBurst(new THREE.Vector3(0, 5.2, 0), 0xb98cff, 60, 6.5, 5);
  bloomy.celebrate();
  bloomy.say('form_done', true);
  hud.setStep(4);
  hud.setFormAvailable(false);
  unlockToasts();
  answerUI.showAnswer(state.answer, qText(), stats(), pack);
}

async function replanForm(pickedIds) {
  const currentState = state;
  const currentPack = pack;
  const titleOf = id => S.cardById(currentPack, id)?.t || id;
  const priorChoices = [
    '成形窗口已选依据：' + (pickedIds || []).map(titleOf).join('、'),
    ...buildPriorChoices(currentState, 'form', titleOf)
  ];
  const result = await requestIslandAdapt({ question: currentPack.q, region: 'form', cards: currentPack.cards, priorChoices });
  if (state !== currentState || pack !== currentPack) throw new Error('问题已切换，本次结果未应用');
  const nextPlan = normalizeDeclaredPlan(result.plan, currentPack.cards);
  if (!nextPlan) throw new Error('返回的整合计划无效');
  nextPlan.source = 'llm';
  nextPlan.online = true;
  if (!currentPack.islandPlans) currentPack.islandPlans = {};
  currentPack.islandPlans.form = nextPlan;
  S.saveState(currentState);
  return nextPlan;
}

function boot() {
  universe = new Universe();
  engine = new Engine(document.getElementById('scene'), universe);
  effects = new Effects(universe.scene);
  universe.setEffects(effects);

  bloomy = new Bloomy();
  bloomy.group.visible = false;
  universe.scene.add(bloomy.group);

  hud = new HUD({
    onStart: onStart,
    onContinue: onContinue,
    onDiscard: onDiscard,
    onReset: onReset,
    onMinimap: (k) => travel(k),
    onForm: onForm,
    onRadial: onRadial
  });
  bloomy.hud = hud;
  bloomy.onSay = (t) => hud.say(t);

  cardsUI = new CardsUI(
    { onCollect: onCollect, onMark: onMark, onCompareStart: onCompareStart, onCompareConfirm: onCompareConfirm },
    () => state,
    () => collectedCards(),
    () => (pack && Array.isArray(pack.sources) ? pack.sources : [])
  );
  answerUI = new AnswerUI({
    onSubmit: onSubmit,
    onReplanForm: replanForm,
    onNewUniverse: onNewUniverse,
    onFlyBack: () => hud.toast('📮 问题已存入本浏览器的漂流池 · 只会在你下次打开时的入口浮现')
  });

  modes = createModes({
    get state() { return state; },
    get pack() { return pack; },
    save: () => S.saveState(state),
    TYPE_REGION: S.TYPE_REGION,
    get cards() { return pack ? pack.cards : []; },
    world: universe,
    engine: engine,
    camera: engine.rig,
    bloomy: bloomy,
    effects: {
      burst(pos, color) {
        try {
          const p = pos || bloomy.group.position;
          const hex = new THREE.Color(color).getHex();
          effects.spawnBurst(new THREE.Vector3(p.x, (p.y || 0) + 1.2, p.z), hex, 30, 4, 3);
        } catch (err) { /* noop */ }
      },
      ripple(pos, color) {
        try { effects.spawnRipple(pos, new THREE.Color(color).getHex(), 1.2); } catch (err) { /* noop */ }
      }
    },
    progress: {
      isDone: (k) => modesDone.has(k),
      complete: (k) => completeIsland(k)
    }
  });

  for (const r of REGIONS) {
    const el = hud.createTag(r);
    engine.addLabel(el, universe.anchors[r.key].label);
  }

  engine.onFrame((dt) => {
    if (generating) engine.rig.dTheta += dt * 0.12;
    bloomy.update(dt);
    effects.update(dt);
  });
  engine.onClickRegion((key) => travel(key));

  const saved = S.loadState();
  hud.showIntro(saved ? (saved.q || getPack(saved.packId).q) : null);
  engine.start();
}

boot();
