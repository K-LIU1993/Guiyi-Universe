/** Visual asset contract for the B-flow GLB consumer. */
export function normalizeManifest(manifest = {}) {
  return {
    scene: manifest.scene || manifest.entry || null,
    anchors: Array.isArray(manifest.anchors) ? manifest.anchors : [],
    bindings: Array.isArray(manifest.bindings) ? manifest.bindings : [],
    actions: Array.isArray(manifest.actions) ? manifest.actions : [],
    budget: { maxTriangles: 500000, maxDrawCalls: 200, ...(manifest.budget || {}) },
  };
}
export function registerManifestActions(manifest, applyAction) {
  const normalized = normalizeManifest(manifest);
  if (typeof applyAction === 'function') for (const action of normalized.actions) applyAction('bind_scene', action);
  return normalized;
}
