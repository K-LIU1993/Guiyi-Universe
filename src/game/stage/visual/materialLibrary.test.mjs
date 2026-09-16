import test from 'node:test';
import assert from 'node:assert/strict';
import { createMaterialConfig, materialLibrary } from './materialLibrary.js';

test('material library keeps bounded visual roles and permits local overrides', () => {
  assert.equal(materialLibrary.evidence.roughness, 0.72);
  assert.equal(createMaterialConfig('bloom', { emissiveIntensity: 0.5 }).emissiveIntensity, 0.5);
  assert.throws(() => createMaterialConfig('unknown'), /Unknown visual material role/);
});
