export const materialLibrary = Object.freeze({
  evidence: Object.freeze({ color: 0xf3c969, roughness: 0.72, metalness: 0.02 }),
  condition: Object.freeze({ color: 0x8ec5ff, roughness: 0.62, metalness: 0.04 }),
  bridge: Object.freeze({ color: 0xd98b5f, roughness: 0.8, metalness: 0.01 }),
  gap: Object.freeze({ color: 0x9a86c7, roughness: 0.9, metalness: 0 }),
  bloom: Object.freeze({ color: 0xffd98a, roughness: 0.5, metalness: 0, emissiveIntensity: 0.35 }),
});

export function createMaterialConfig(role, overrides = {}) {
  const base = materialLibrary[role];
  if (!base) throw new Error('Unknown visual material role');
  return Object.freeze({ ...base, ...overrides });
}
