// 问题漂流池：入口参考标签的来源（种子问题 + 旅人社区问题）
// 循环：旅人在成形卡留下问题 -> addCommunityQuestion 存入本地漂流池
//       -> 下一位旅人打开入口时，这些问题优先浮现为参考标签

const LS_KEY = 'guiyi.communityQuestions';
const MAX_KEEP = 30;

// 种子参考问题：覆盖选择 / 是非 / 时机 / 方法 / 原因 / 开放六种形状
// 前三条与预设包原文一致：点它们开始，仍会进入手工打磨的预设宇宙
export const SEED_QUESTIONS = [
  'AI 时代，还要学画画吗？',
  '毕业后，先就业还是先创业？',
  '30 岁转行，来得及吗？',
  '考研还是工作？',
  '天亮了，鸟会叫吗？',
  '留在大城市，还是回小城生活？',
  '为什么我越努力越焦虑？',
  '怎样才能不怕当众发言？',
  '现在开始学乐器，晚吗？',
  '该不该为了喜欢的事放弃稳定？',
  '朋友借钱拖着不还，我该开口要吗？',
  '我到底适合做什么工作？',
  '十年后的我，会怎么看今天这个决定？',
  '如果不必完美，我敢不敢直接开始？'
];

function sanitize(q) {
  return String(q || '').replace(/\s+/g, ' ').trim().slice(0, 40);
}

function readAll() {
  try {
    const raw = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
    if (!Array.isArray(raw)) return [];
    const seen = new Set();
    const out = [];
    for (const it of raw) {
      const q = sanitize(it && it.q);
      if (q.length < 2 || seen.has(q)) continue;
      seen.add(q);
      out.push({ q: q, at: (it && it.at) || 0 });
    }
    return out;
  } catch (err) { return []; }
}

/** 旅人留下的问题：清洗、去重置顶、封顶保存。返回是否有效。 */
export function addCommunityQuestion(q) {
  const t = sanitize(q);
  if (t.length < 2) return false;
  const all = readAll().filter((x) => x.q !== t);
  all.unshift({ q: t, at: Date.now() });
  try { localStorage.setItem(LS_KEY, JSON.stringify(all.slice(0, MAX_KEEP))); } catch (err) { /* 隐私模式静默 */ }
  return true;
}

export function loadCommunityQuestions() {
  return readAll().map((x) => x.q);
}

/** 入口参考标签：每次调用随机生成；社区问题优先浮现，种子问题随机补位。 */
export function pickEntryChips(n) {
  const want = Math.max(1, n || 3);
  const comm = readAll().slice(0, 2);
  const used = new Set(comm.map((x) => x.q));
  const seeds = SEED_QUESTIONS.filter((q) => !used.has(q));
  const rest = [];
  while (rest.length < want - comm.length && seeds.length) {
    rest.push(seeds.splice(Math.floor(Math.random() * seeds.length), 1)[0]);
  }
  return [
    ...comm.map((x) => ({ q: x.q, from: 'comm' })),
    ...rest.map((q) => ({ q: q, from: 'seed' }))
  ];
}
