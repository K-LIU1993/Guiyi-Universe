export type BasketItem = { id: string; title: string; excerpt: string; source: string };
const KEY = 'guiyi-explore-basket';
export function getBasket(): BasketItem[] { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; } }
export function addToBasket(item: BasketItem) { const items = getBasket(); if (!items.some((x) => x.id === item.id)) localStorage.setItem(KEY, JSON.stringify([...items, item])); }
export function hasInBasket(id: string) { return getBasket().some((x) => x.id === id); }
