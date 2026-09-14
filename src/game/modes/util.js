// 模式共享小工具：DOM 快捷构造、转义、兜底坐标。
export function el(tag, cls, html) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
}

export function esc(s) {
  return String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

export function short(s, n = 14) {
  const t = String(s ?? '');
  return t.length > n ? t.slice(0, n) + '…' : t;
}

/** anchor.spots 缺失时，在中心周围均匀布 n 个点。 */
export function fallbackSpots(center, n, r = 4) {
  const out = [];
  const cy = center?.y ?? 0;
  for (let i = 0; i < n; i += 1) {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / Math.max(n, 1);
    out.push({ x: (center?.x ?? 0) + Math.cos(a) * r, y: cy + 0.4, z: (center?.z ?? 0) + Math.sin(a) * r });
  }
  return out;
}
