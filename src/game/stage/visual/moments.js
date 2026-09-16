import * as THREE from 'three';

export function createVisualMoments({ anchors = new Map(), bloomy = null, cameraRig = null } = {}) {
  const state = { placed: new Set(), condition: null, repaired: 0, gap: false, forming: false };
  const get = (id) => anchors.get(id)?.node || null;
  const setVisible = (id, visible) => { const node = get(id); if (node) node.visible = visible; };
  return {
    state,
    placeEvidence(slotId, evidenceNode) { const target = get(slotId); if (!target || !evidenceNode) return false; evidenceNode.position.copy(target.position); evidenceNode.quaternion.setFromEuler(new THREE.Euler(0, 0, -0.12)); target.parent?.add(evidenceNode); state.placed.add(slotId); return true; },
    lightConnection(nodeA, nodeB, material) { if (!nodeA || !nodeB) return null; const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([nodeA.position, nodeB.position]), material || new THREE.LineBasicMaterial({ color: 0xffd66b })); nodeA.parent?.add(line); return line; },
    switchCondition(conditionId) { state.condition = conditionId; setVisible('gy.divergence.zone_fork', conditionId === 'fork'); setVisible('gy.divergence.zone_opposed', conditionId === 'opposed'); return state.condition; },
    repairBridge(segmentIds = []) { state.repaired = Math.min(segmentIds.length, 5); segmentIds.forEach((id) => setVisible(id, true)); return state.repaired; },
    showGap(show = true) { state.gap = show; setVisible('gy.divergence.zone_rift', show); if (bloomy?.lookAt && get('gy.divergence.zone_rift')) bloomy.lookAt(get('gy.divergence.zone_rift').position); return state.gap; },
    formCamera() { state.forming = true; const a = get('gy.divergence.anchor_cam_world'); if (cameraRig && a) cameraRig.dTarget.copy(a.position); return state.forming; },
  };
}
