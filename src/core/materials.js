import * as THREE from 'three';

function makeGradientMap() {
  const data = new Uint8Array([70, 160, 235]);
  const tex = new THREE.DataTexture(data, 3, 1, THREE.RedFormat);
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}
export const GRADIENT = makeGradientMap();

const cache = new Map();

export function toon(color, opts) {
  opts = opts || {};
  const key = 'T' + color + '_' + (opts.emissive || 0) + '_' + (opts.ei || 0);
  if (cache.has(key)) return cache.get(key);
  const m = new THREE.MeshToonMaterial({ color: color, gradientMap: GRADIENT });
  if (opts.emissive) { m.emissive = new THREE.Color(opts.emissive); m.emissiveIntensity = opts.ei != null ? opts.ei : 1; }
  cache.set(key, m);
  return m;
}

export function glow(color, intensity, opts) {
  opts = opts || {};
  const key = 'G' + color + '_' + intensity + '_' + (opts.transparent ? 1 : 0);
  if (cache.has(key)) return cache.get(key);
  const m = new THREE.MeshBasicMaterial({ color: color });
  m.toneMapped = false;
  if (opts.transparent) { m.transparent = true; m.opacity = intensity; }
  cache.set(key, m);
  return m;
}

export function basic(color) {
  const key = 'B' + color;
  if (cache.has(key)) return cache.get(key);
  const m = new THREE.MeshBasicMaterial({ color: color });
  cache.set(key, m);
  return m;
}

export function lineMat(color) {
  const key = 'L' + color;
  if (cache.has(key)) return cache.get(key);
  const m = new THREE.LineBasicMaterial({ color: color });
  cache.set(key, m);
  return m;
}

export function outline(mesh, color, threshold) {
  const eg = new THREE.EdgesGeometry(mesh.geometry, threshold == null ? 24 : threshold);
  const ls = new THREE.LineSegments(eg, lineMat(color == null ? 0x14151a : color));
  mesh.add(ls);
  return mesh;
}
