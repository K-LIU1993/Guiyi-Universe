import { loadCatalog } from '../server/content/catalog.js';
const catalog = await loadCatalog();
console.log(JSON.stringify({ ok: true, count: catalog.size, seeds: [...catalog.entries()].map(([id, { seed, sha256 }]) => ({ id, sources: seed.sources.length, claims: seed.claims.length, conditions: seed.conditions.length, sha256 })) }, null, 2));
