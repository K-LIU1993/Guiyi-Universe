import type { Claim, Condition, RuleEngineDeps, Source } from "../../game/rules/contract";
import { contentVersion } from "./contentVersion";

export interface DivergenceSeed { contentVersion: string; sources: Source[]; claims: Claim[]; conditions: Array<Omit<Condition, "id">>; }
export const QUESTION_ID = "work-love-or-not";
export const question = "工作一定要追求热爱吗？";
export function createDivergenceSeed(deps: RuleEngineDeps & { sessionId?: string; fetchedAt?: string }) {
  const seed: DivergenceSeed = { contentVersion, sources: [
    { id: "sample-source-1", title: "兴趣与工作的关系：教学摘录一", fetchedAt: "2026-09-16T00:00:00.000Z", excerpt: "兴趣可能影响投入感，但工作选择也受到资源、责任与阶段条件影响。", isTeachingSample: true },
    { id: "sample-source-2", title: "职业选择中的条件差异：教学摘录二", fetchedAt: "2026-09-16T00:00:00.000Z", excerpt: "同一个建议在不同时间安排和现实负荷下，可能呈现不同结果。", isTeachingSample: true },
    { id: "sample-source-3", title: "把热爱放回具体生活：教学摘录三", fetchedAt: "2026-09-16T00:00:00.000Z", excerpt: "判断一个选择是否可持续，需要观察计划与实际投入之间的差距。", isTeachingSample: true },
  ], claims: [
    { id: "sample-claim-1", text: "追求热爱可能提升长期投入感，但不自动保证适合当前生活。" },
    { id: "sample-claim-2", text: "工作选择需要同时观察个人偏好与可执行的时间条件。" },
  ], conditions: [
    { field: "time.weekly_hours_plan", op: "gte", value: 5, label: "每周计划投入不少于 5 小时" },
    { field: "time.weekly_hours_actual", op: "gte", value: 5, label: "每周实际投入不少于 5 小时" },
    { field: "time.weekly_hours_actual", op: "lte", value: 40, label: "每周实际投入不超过 40 小时" },
  ] };
  if (deps.fetchedAt !== undefined) seed.sources.forEach((source) => { source.fetchedAt = deps.fetchedAt!; });
  return { ...seed, sessionId: deps.sessionId ?? deps.nextId("session"), questionId: QUESTION_ID, seed, deps };
}
