// 归一宇宙 — 游戏状态机与本地存档
import { EXPLORE_KEYS } from '../core/constants.js';

const SAVE_KEY = 'guiyi-save-v1';

// 卡片类型 -> 岛屿区域
export const TYPE_REGION = {
  story: 'lai',
  fact: 'cidi',
  view: 'cha',
  person: 'yu',
  blind: 'wei'
};

export const ACHIEVEMENTS = [
  { key: 'fourlands', name: '四境足迹', desc: '到访过全部四座认知之岛' },
  { key: 'different', name: '看见不同', desc: '第一次把两张卡放上对照桌' },
  { key: 'others', name: '遇见他者', desc: '收下两位真实的人的故事' },
  { key: 'blindlight', name: '盲点之光', desc: '打开未至岛的传送门' },
  { key: 'become', name: '形成自己', desc: '在中央岛写下自己的答案' }
];

export function createState(packId) {
  return {
    v: 2,
    packId: packId,
    pack: null,
    packOrigin: null,
   collected: [],
   marked: {},
    regions: {},
   compares: [],
    visited: [],
    achievements: [],
    answer: null,
    step: 0,
    updatedAt: Date.now()
  };
}

export function saveState(s) {
  s.updatedAt = Date.now();
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); } catch (e) { /* 忽略隐私模式 */ }
}

export function loadState() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (!s || (s.v !== 1 && s.v !== 2) || !s.packId) return null;
    return s;
  } catch (e) { return null; }
}

const PACK_TYPES = Object.keys(TYPE_REGION);

export function storedPackUsable(p) {
  if (!p || typeof p !== 'object' || Array.isArray(p)) return false;
  if (!Array.isArray(p.cards) || p.cards.length === 0) return false;
  if (typeof p.q !== 'string' || !p.q.trim()) return false;
  return PACK_TYPES.every((t) => { return p.cards.some((c) => { return c && c.type === t; }); });
}

export function clearSave() {
  try { localStorage.removeItem(SAVE_KEY); } catch (e) { /* noop */ }
}

export function collectCard(s, card) {
  if (s.collected.indexOf(card.id) === -1) s.collected.push(card.id);
  s.regions[card.id] = TYPE_REGION[card.type] || 'lai';
}

export function markCard(s, cardId, mood) {
  if (s.marked[cardId] === mood) { delete s.marked[cardId]; } else { s.marked[cardId] = mood; }
}

export function addCompare(s, idA, idB) {
  if (idA === idB) return false;
  for (let i = 0; i < s.compares.length; i++) {
    const c = s.compares[i];
    if ((c[0] === idA && c[1] === idB) || (c[0] === idB && c[1] === idA)) return false;
  }
  s.compares.push([idA, idB]);
  return true;
}

export function visitRegion(s, regionKey) {
  if (s.visited.indexOf(regionKey) === -1) s.visited.push(regionKey);
}

// 未至岛传送门：三条主路（来路/此地/岔路）都走过才点亮
export function portalReady(s) {
  return s.visited.indexOf('lai') !== -1 && s.visited.indexOf('cidi') !== -1 && s.visited.indexOf('cha') !== -1;
}

// 成形条件：四座认知岛各收下至少一张 + 遇见岛至少一张 + 至少一次对照
export function regionCount(s, regionKey) {
  return s.collected.filter((id) => { return s.regions[id] === regionKey; }).length;
}

export function personCount(s) {
  return s.collected.filter((id) => { return s.regions[id] === 'yu'; }).length;
}

export function formReady(s) {
  for (let i = 0; i < EXPLORE_KEYS.length; i++) {
    if (regionCount(s, EXPLORE_KEYS[i]) < 1) return false;
  }
  if (personCount(s) < 1) return false;
  if (s.compares.length < 1) return false;
  return true;
}

// 水晶能量：随理解生长（收集、对照、回答都在充电）
export function energyOf(s) {
  const base = 0.08 + Math.min(s.collected.length, 12) * 0.055 + Math.min(s.compares.length, 4) * 0.08;
  if (s.answer) return Math.min(1, base + 0.2);
  return Math.min(0.85, base);
}

// 检查并解锁成就，返回新解锁的列表
export function checkAchievements(s) {
  const unlocked = [];
  const has = (k) => { return s.achievements.indexOf(k) !== -1; };
  const exploreDone = EXPLORE_KEYS.every((k) => { return s.visited.indexOf(k) !== -1; });
  if (exploreDone && !has('fourlands')) s.achievements.push('fourlands'), unlocked.push('fourlands');
  if (s.compares.length >= 1 && !has('different')) s.achievements.push('different'), unlocked.push('different');
  if (personCount(s) >= 2 && !has('others')) s.achievements.push('others'), unlocked.push('others');
  if (portalReady(s) && s.visited.indexOf('wei') !== -1 && !has('blindlight')) s.achievements.push('blindlight'), unlocked.push('blindlight');
  if (s.answer && !has('become')) s.achievements.push('become'), unlocked.push('become');
  return unlocked;
}

// 五步玩法步骤推进（提问 -> 探索 -> 对照 -> 遇见 -> 成形）
export function currentStep(s) {
  if (s.answer) return 4;
  if (s.compares.length >= 1 && personCount(s) >= 1) return 3;
  if (s.compares.length >= 1) return 2;
  if (s.collected.length >= 1) return 1;
  return 0;
}

export function cardById(pack, id) {
  for (let i = 0; i < pack.cards.length; i++) {
    if (pack.cards[i].id === id) return pack.cards[i];
  }
  return null;
}
