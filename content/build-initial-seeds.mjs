// One-time release writer: exclusive creation prevents silent overwrites.
import { mkdir, writeFile } from 'node:fs/promises';
import { schemas, seedSchema } from '../src/content/schemas.js';
import { assertSeed } from '../src/content/validate.js';
const root = new URL('./', import.meta.url);
const themes = [
  ['work-passion', '工作与热爱', '在工作之外，怎样安排对热爱的投入？',
    ['教学情境：角色计划每周拿出八小时学习绘画；这里只记录计划，并未证明长期效果。', '教学情境：角色本周实际投入三小时，照护和休息占用了原定时段；这不代表缺乏热爱。', '教学对照：另一角色实际投入八小时，但是否转行仍缺少收入需求和体验信息。'],
    ['稳定时段可能帮助尝试热爱。', '投入时长不能单独决定是否转行。']],
  ['social-fairness', '社交与公平', '共同活动中，怎样讨论时间投入与公平？',
    ['教学情境：小组计划每人每周投入八小时组织活动；相同计划尚未说明负担相同。', '教学情境：一位虚构成员本周实际只有三小时可投入，仍提出了活动建议。', '教学对照：另一位虚构成员投入八小时；时长未记录协作质量或个人限制。'],
    ['共同约定可投入时段可能减少误解。', '公平不能仅由投入小时数判定。']],
  ['growth-choice', '成长与选择', '面对新的学习方向，怎样安排小规模尝试？',
    ['教学情境：角色计划每周用八小时学习一个新方向，以便记录自己的体验。', '教学情境：角色实际每周投入三小时，任务进展与计划出现差距，原因尚待了解。', '教学对照：另一角色实际投入八小时，却仍在比较不同方向；时长不能代表适合程度。'],
    ['有限时段的尝试可能提供选择依据。', '计划与实际的差距值得讨论，但不等于能力结论。']],
];
await mkdir(new URL('schemas/', root), { recursive: true });
for (const [name, schema] of Object.entries({ ...schemas, seed: seedSchema })) await writeFile(new URL('schemas/' + name + '.schema.json', root), JSON.stringify(schema, null, 2) + '\n', { flag: 'wx' });
for (const [id, title, question, excerpts, claims] of themes) {
  const seed = assertSeed({ format: 'guiyi.divergence-island.seed', schemaVersion: 1, id, contentVersion: '1.0.0', title, question, provenance: { level: 'teaching', createdBy: 'ai' }, isTeachingSample: true, excerpt: 'AI 填充的虚构教学材料，不是真实访谈、调研或作者观点；仅用于练习来源、条件与分歧辨识。',
    sources: excerpts.map((excerpt, index) => ({ id: id + '-source-' + (index + 1), title: title + '·教学情境' + (index + 1), fetchedAt: '2026-09-17T00:00:00Z', excerpt, isTeachingSample: true })),
    claims: claims.map((text, index) => ({ id: id + '-claim-' + (index + 1), text, scope: '仅为上述虚构情境中待讨论的观点，不是现实人生结论。' })),
    conditions: [{ field: 'time.weekly_hours_plan', op: 'gte', value: 8, label: '计划每周投入至少8小时' }, { field: 'time.weekly_hours_actual', op: 'lte', value: 3, label: '实际每周投入不超过3小时' }],
  });
  await mkdir(new URL('seeds/' + id + '/', root), { recursive: true });
  await writeFile(new URL('seeds/' + id + '/1.0.0.json', root), JSON.stringify(seed, null, 2) + '\n', { flag: 'wx' });
}
