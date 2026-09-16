import test from 'node:test';
import assert from 'node:assert/strict';
import { createVisualMoments } from './moments.js';

test('visual moments expose evidence, condition, bridge, gap and forming actions', () => {
  const nodes = new Map(['slot', 'rift', 'fork', 'opposed', 'cam'].map((id) => [id, { node: { position: { copy() {} }, visible: true }, binding: {} }]));
  const moments = createVisualMoments({ anchors: nodes });
  assert.equal(moments.repairBridge(['a', 'b', 'c']), 3);
  assert.equal(moments.state.repaired, 3);
  moments.switchCondition('fork'); assert.equal(moments.state.condition, 'fork');
  moments.showGap(); assert.equal(moments.state.gap, true);
  moments.formCamera(); assert.equal(moments.state.forming, true);
});

