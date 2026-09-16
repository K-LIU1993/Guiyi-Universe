import mock from './mock.json';
export type EvidenceCard = typeof mock.cards[number];
export type AppData = typeof mock;
export const SERVER_ORIGIN = 'http://127.0.0.1:5203';
// 注入服务适配器后对接真实契约；不猜测路由，不自动发送用户草稿。
export interface AppApi { loadWorld(): Promise<AppData>; }
export const mockApi: AppApi = { async loadWorld() { return structuredClone(mock); } };
export async function loadAppData(adapter: AppApi = mockApi): Promise<AppData> { return adapter.loadWorld(); }
export async function requestServer<T>(path: string, init: RequestInit = {}): Promise<T> {
  if (!path.startsWith('/') || path.startsWith('//')) throw new Error('需要服务内绝对路径');
  const response = await fetch(`${SERVER_ORIGIN}${path}`, { ...init, signal: init.signal ?? AbortSignal.timeout(8000) });
  if (!response.ok) throw new Error(`服务请求失败：${response.status}`);
  return response.json();
}
