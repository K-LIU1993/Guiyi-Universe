export function createDemandRenderController({ render, setAnimationPaused = () => {} } = {}) {
  if (typeof render !== 'function') throw new TypeError('render must be a function');
  let panelOpen = false; let scheduled = false;
  function requestRender() { if (scheduled) return; scheduled = true; const frame = typeof requestAnimationFrame === 'function' ? requestAnimationFrame : (callback) => setTimeout(callback, 0); frame(() => { scheduled = false; render(); }); }
  return { openReadingPanel() { panelOpen = true; setAnimationPaused(true); requestRender(); }, closeReadingPanel() { panelOpen = false; setAnimationPaused(false); requestRender(); }, invalidate() { requestRender(); }, isReadingPanelOpen() { return panelOpen; } };
}
