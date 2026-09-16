import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeManifest } from './assetManifest.js';

test('B-flow manifest exposes binding nodes without requiring runtime loaders', () => {
  const manifest = normalizeManifest({ bindings: [{ objectId: 'slot', nodeName: 'SLOT_x' }] });
  assert.equal(manifest.budget.maxTriangles, 500000);
  assert.equal(manifest.bindings[0].nodeName, 'SLOT_x');
});
