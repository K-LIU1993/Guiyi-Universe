// 归一宇宙 — 常量与区域配置

export const PALETTE = {
  ink: 0x14151a,
  paper: 0xfff8e7,
  sky: 0x141838,
  fog: 0x1a1f4a,
  water: 0x24307c,
  waterDeep: 0x10163a,
  rock: 0x4a3f5c,
  trunk: 0x7a4a32,
  glow: 0x7cfb4d,
  crystal: 0x7de3ff
};

// 五座探索岛 + 中央成形岛。angle 为绕中心的方位角（度）: x = cos(a) * R, z = sin(a) * R
export const REGIONS = [
  { key: 'lai',  name: '来路', en: 'WHERE YOU COME FROM', sub: '看看别人怎样走过', act: '经历', color: '#FF8A3C', three: 0xff8a3c, grass: 0xffb37c, rock: 0x7a4a3a, angle: 180 },
  { key: 'cidi', name: '此地', en: 'WHERE YOU STAND', sub: '看清你面对的条件', act: '条件', color: '#4DA3FF', three: 0x4da3ff, grass: 0xdfe8ff, rock: 0x5b6b8c, angle: -90 },
  { key: 'cha',  name: '岔路', en: 'FORKED VIEWS', sub: '同一个问题，不同的走法', act: '分歧', color: '#FF4D6D', three: 0xff4d6d, grass: 0xff8a72, rock: 0x8c3a3a, angle: 0 },
  { key: 'yu',   name: '遇见', en: 'REAL PEOPLE', sub: '找到经历过它的人', act: '共鸣', color: '#FFD335', three: 0xffd335, grass: 0xffe28a, rock: 0x8c6b3a, angle: 135 },
  { key: 'wei',  name: '未至', en: 'NOT YET', sub: '还有你没想到的方向', act: '盲点', color: '#8CFF6B', three: 0x8cff6b, grass: 0x3b3f5c, rock: 0x23263c, angle: 45 },
  { key: 'form', name: '成形', en: 'BECOME', sub: '看见不同，形成自己', act: '整合', color: '#B98CFF', three: 0xb98cff, grass: 0xe6dcff, rock: 0x6b5b8c, angle: 0, center: true }
];

export const REGION_MAP = {};
for (const r of REGIONS) REGION_MAP[r.key] = r;

export const WORLD = {
  radius: 46,
  islandR: 11,
  centerR: 13.5
};

export const EXPLORE_KEYS = ['lai', 'cidi', 'cha', 'wei'];
