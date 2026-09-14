import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { toon, glow, outline, basic } from './materials.js';
import { mulberry32 } from './utils.js';

const INK = 0x14151a;

// ---------- 文字贴图（路牌 / 信息屏） ----------
export function textTexture(lines, opts) {
  opts = opts || {};
  const w = opts.w || 512, h = opts.h || 256;
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  ctx.fillStyle = opts.bg || '#fff8e7';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#14151a';
  ctx.lineWidth = 14;
  ctx.strokeRect(7, 7, w - 14, h - 14);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const arr = Array.isArray(lines) ? lines : [lines];
  let y = h / 2 - (arr.length - 1) * (opts.lineH || h / (arr.length + 1.2)) / 2;
  for (let i = 0; i < arr.length; i++) {
    const ln = arr[i];
    ctx.fillStyle = i === 0 ? (opts.color || '#14151a') : (opts.subColor || '#6b6455');
    ctx.font = (i === 0 ? '900 ' + (opts.mainSize || 92) : '700 ' + (opts.subSize || 40)) + 'px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillText(ln, w / 2, y);
    y += opts.lineH || h / (arr.length + 1.2);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function mesh(geo, mat, x, y, z) {
  const m = new THREE.Mesh(geo, mat);
  if (x != null) m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

// ---------- 岛屿基座 ----------
export function islandBase(r, grassColor, rockColor, seed) {
  const rnd = mulberry32(seed || 7);
  const g = new THREE.Group();
  const top = mesh(new THREE.CylinderGeometry(r, r * 0.93, 2.4, 26), toon(grassColor), 0, 0, 0);
  top.receiveShadow = true;
  g.add(outline(top));
  const rock = mesh(new THREE.CylinderGeometry(r * 0.93, r * 0.16, 8.5 + rnd() * 2, 26), toon(rockColor), 0, -5.4, 0);
  g.add(rock);
  // 悬浮碎石
  for (let i = 0; i < 3; i++) {
    const s = 0.5 + rnd() * 0.9;
    const c = mesh(new THREE.DodecahedronGeometry(s, 0), toon(rockColor),
      (rnd() - 0.5) * r * 1.5, -7 - rnd() * 4, (rnd() - 0.5) * r * 1.5);
    g.add(c);
  }
  return g;
}

// ---------- 树木 ----------
export function sakura(pos, s, seed) {
  const rnd = mulberry32((seed || 3) * 131 + 7);
  s = s || 1;
  const g = new THREE.Group();
  const trunk = mesh(new THREE.CylinderGeometry(0.16 * s, 0.26 * s, 1.7 * s, 7), toon(0x7a4a32), 0, 0.85 * s, 0);
  g.add(trunk);
  const cols = [0xffb7d5, 0xff9ec7, 0xffd3e8];
  for (let i = 0; i < 3; i++) {
    const b = mesh(new THREE.IcosahedronGeometry((0.75 + rnd() * 0.45) * s, 1), toon(cols[i % 3]),
      (rnd() - 0.5) * 0.9 * s, (1.9 + rnd() * 0.7) * s, (rnd() - 0.5) * 0.9 * s);
    g.add(outline(b));
  }
  g.position.copy(pos);
  return g;
}

export function pine(pos, s, leafColor) {
  s = s || 1;
  const g = new THREE.Group();
  const trunk = mesh(new THREE.CylinderGeometry(0.12 * s, 0.2 * s, 1.1 * s, 6), toon(0x5a4632), 0, 0.55 * s, 0);
  g.add(trunk);
  const c1 = mesh(new THREE.ConeGeometry(0.85 * s, 1.5 * s, 7), toon(leafColor), 0, 1.6 * s, 0);
  const c2 = mesh(new THREE.ConeGeometry(0.62 * s, 1.25 * s, 7), toon(leafColor), 0, 2.5 * s, 0);
  g.add(outline(c1), outline(c2));
  g.position.copy(pos);
  return g;
}

export function bush(pos, s, color) {
  const g = new THREE.Group();
  const b = mesh(new THREE.IcosahedronGeometry(0.5 * (s || 1), 1), toon(color || 0x8fd46a), 0, 0.3 * (s || 1), 0);
  g.add(outline(b));
  g.position.copy(pos);
  return g;
}

export function tuft(pos, color) {
  const g = new THREE.Group();
  for (let i = 0; i < 3; i++) {
    const b = mesh(new THREE.ConeGeometry(0.07, 0.5, 5), toon(color || 0x9ade6e),
      (Math.sin(i * 2.1)) * 0.12, 0.25, (Math.cos(i * 1.7)) * 0.12);
    b.rotation.z = (Math.sin(i * 2.1)) * 0.3;
    g.add(b);
  }
  g.position.copy(pos);
  return g;
}

// ---------- 建筑 ----------
export function house(pos, s, wallColor, roofColor) {
  s = s || 1;
  const g = new THREE.Group();
  const body = mesh(new RoundedBoxGeometry(2.4 * s, 1.8 * s, 2.2 * s, 3, 0.12), toon(wallColor || 0xfff3dc), 0, 0.9 * s, 0);
  g.add(outline(body));
  const roof = mesh(new THREE.ConeGeometry(2.15 * s, 1.3 * s, 4), toon(roofColor || 0xe86a4a), 0, 2.4 * s, 0);
  roof.rotation.y = Math.PI / 4;
  g.add(outline(roof));
  const door = mesh(new RoundedBoxGeometry(0.6 * s, 1.0 * s, 0.1, 2, 0.05), toon(0x8a5a3a), 0, 0.5 * s, 1.12 * s);
  g.add(door);
  const win = mesh(new THREE.BoxGeometry(0.55, 0.55, 0.06), glow(0xffe9a0, 1), 0.8 * s, 1.1 * s, 1.12 * s);
  g.add(win);
  g.position.copy(pos);
  return g;
}

export function modernBlock(pos, w, h, d, accent) {
  const g = new THREE.Group();
  const body = mesh(new RoundedBoxGeometry(w, h, d, 2, 0.18), toon(0xf4f6ff), 0, h / 2, 0);
  g.add(outline(body));
  // 发光窗带
  const floors = Math.max(1, Math.floor(h / 0.9));
  for (let i = 0; i < floors; i++) {
    const strip = mesh(new THREE.BoxGeometry(w * 0.72, 0.16, 0.05), glow(accent || 0x4da3ff, 1), 0, 0.55 + i * 0.9, d / 2 + 0.02);
    g.add(strip);
    const strip2 = strip.clone(); strip2.position.x = -0; strip2.rotation.y = Math.PI / 2; strip2.position.z = 0; strip2.position.y = 0.55 + i * 0.9; strip2.position.x = w / 2 + 0.02;
    g.add(strip2);
  }
  g.position.copy(pos);
  return g;
}

export function stiltHouse(pos, s) {
  s = s || 1;
  const g = new THREE.Group();
  for (const dx of [-0.8, 0.8]) for (const dz of [-0.7, 0.7]) {
    g.add(mesh(new THREE.CylinderGeometry(0.09 * s, 0.11 * s, 1.1 * s, 6), toon(0x7a5a3a), dx * s, 0.55 * s, dz * s));
  }
  const body = mesh(new RoundedBoxGeometry(2.6 * s, 1.4 * s, 2.2 * s, 3, 0.1), toon(0xd9a86a), 0, 1.75 * s, 0);
  g.add(outline(body));
  const roof = mesh(new THREE.ConeGeometry(2.3 * s, 1.1 * s, 4), toon(0x4a6b8a), 0, 3.0 * s, 0);
  roof.rotation.y = Math.PI / 4;
  g.add(outline(roof));
  const lamp = mesh(new THREE.SphereGeometry(0.16 * s, 8, 8), glow(0xffd335, 1), 0, 1.15 * s, 1.2 * s);
  g.add(lamp);
  g.position.copy(pos);
  return g;
}

export function billboard(pos, lines, opts) {
  const g = new THREE.Group();
  const pole = mesh(new THREE.CylinderGeometry(0.09, 0.11, 2.6, 6), toon(0x3a3f5a), 0, 1.3, 0);
  g.add(pole);
  const tex = textTexture(lines, Object.assign({ w: 512, h: 256, mainSize: 74, subSize: 44 }, opts));
  const board = new THREE.Mesh(new THREE.BoxGeometry(2.9, 1.5, 0.12),
    [toon(0x23263c), toon(0x23263c), toon(0x23263c), toon(0x23263c), new THREE.MeshBasicMaterial({ map: tex }), toon(0x23263c)]);
  board.position.set(0, 2.9, 0);
  board.castShadow = true;
  g.add(outline(board, INK, 1));
  g.position.copy(pos);
  return g;
}

export function signBoard(pos, lines, color, rotY) {
  const g = new THREE.Group();
  const pole = mesh(new THREE.CylinderGeometry(0.07, 0.09, 1.7, 6), toon(0x7a5a3a), 0, 0.85, 0);
  g.add(pole);
  const tex = textTexture(lines, { w: 420, h: 170, mainSize: 78, subSize: 40 });
  const boardGeo = new THREE.BoxGeometry(1.7, 0.72, 0.08);
  const board = new THREE.Mesh(boardGeo, [toon(color), toon(color), toon(color), toon(color), new THREE.MeshBasicMaterial({ map: tex }), toon(color)]);
  board.position.set(0, 1.55, 0.05);
  board.castShadow = true;
  g.add(outline(board, INK, 1));
  if (rotY) g.rotation.y = rotY;
  g.position.copy(pos);
  return g;
}

// ---------- 遇见岛：篝火 + 灯串 ----------
export function campfire(pos) {
  const g = new THREE.Group();
  for (let i = 0; i < 4; i++) {
    const log = mesh(new THREE.CylinderGeometry(0.09, 0.11, 1.1, 6), toon(0x6a4a32),
      Math.cos(i * Math.PI / 2) * 0.28, 0.1, Math.sin(i * Math.PI / 2) * 0.28);
    log.rotation.z = Math.cos(i * Math.PI / 2) * 1.35;
    log.rotation.x = Math.sin(i * Math.PI / 2) * 0.5;
    g.add(log);
  }
  const stone = mesh(new THREE.TorusGeometry(0.75, 0.1, 6, 12), toon(0x8a8a96), 0, 0.06, 0);
  stone.rotation.x = Math.PI / 2;
  stone.castShadow = false;
  g.add(stone);
  const flame = mesh(new THREE.ConeGeometry(0.32, 0.85, 7), glow(0xffa04d, 1), 0, 0.55, 0);
  flame.name = 'flame';
  g.add(flame);
  const flame2 = mesh(new THREE.ConeGeometry(0.16, 0.5, 6), glow(0xffe28a, 1), 0, 0.6, 0);
  flame2.name = 'flame2';
  g.add(flame2);
  const light = new THREE.PointLight(0xffa04d, 55, 16, 2);
  light.position.set(0, 1.4, 0);
  light.name = 'firelight';
  g.add(light);
  g.position.copy(pos);
  return g;
}

export function lanternString(a, b, n, colors) {
  const g = new THREE.Group();
  const mid = a.clone().add(b).multiplyScalar(0.5);
  mid.y -= Math.min(1.6, a.distanceTo(b) * 0.18);
  const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
  const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 16, 0.025, 5), toon(0x3a3f5a));
  g.add(tube);
  for (let i = 1; i < n; i++) {
    const p = curve.getPoint(i / n);
    const col = colors[i % colors.length];
    const bulb = mesh(new THREE.SphereGeometry(0.11, 8, 8), glow(col, 1), p.x, p.y - 0.12, p.z);
    bulb.name = 'bulb';
    g.add(bulb);
  }
  return g;
}

// ---------- 未至岛：传送门 ----------
export function portal(pos, colorHex) {
  const g = new THREE.Group();
  const ring = mesh(new THREE.TorusGeometry(1.7, 0.17, 10, 32), toon(0x23263c), 0, 2.1, 0);
  g.add(outline(ring));
  const innerMat = new THREE.MeshBasicMaterial({ color: colorHex || 0x8cff6b, transparent: true, opacity: 0.0 });
  innerMat.toneMapped = false;
  innerMat.side = THREE.DoubleSide;
  const disc = new THREE.Mesh(new THREE.CircleGeometry(1.5, 28), innerMat);
  disc.position.set(0, 2.1, 0);
  disc.name = 'portalDisc';
  g.add(disc);
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 + 0.4;
    const st = mesh(new THREE.DodecahedronGeometry(0.22 + (i % 2) * 0.1, 0), toon(0x3a3f5c),
      Math.cos(a) * 2.3, 0.18, Math.sin(a) * 2.3);
    g.add(st);
  }
  const pLight = new THREE.PointLight(colorHex || 0x8cff6b, 0, 14, 2);
  pLight.position.set(0, 2.1, 0.6);
  pLight.name = 'portalLight';
  g.add(pLight);
  g.position.copy(pos);
  return g;
}

// ---------- 成形岛：水晶 + 祭坛 ----------
export function crystalShrine(pos) {
  const g = new THREE.Group();
  const dais = mesh(new THREE.CylinderGeometry(2.5, 2.9, 0.7, 10), toon(0xf4f6ff), 0, 0.35, 0);
  g.add(outline(dais));
  const dais2 = mesh(new THREE.CylinderGeometry(1.6, 2.1, 0.5, 10), toon(0xdfe8ff), 0, 0.9, 0);
  g.add(outline(dais2));
  const crystal = mesh(new THREE.IcosahedronGeometry(1.05, 0),
    new THREE.MeshBasicMaterial({ color: 0x7de3ff, transparent: true, opacity: 0.92 }), 0, 2.6, 0);
  crystal.material.toneMapped = false;
  crystal.name = 'crystal';
  g.add(outline(crystal, 0x9ff3ff, 1));
  const core = mesh(new THREE.IcosahedronGeometry(0.55, 0), glow(0xe8fbff, 1), 0, 2.6, 0);
  core.name = 'crystalCore';
  g.add(core);
  // 环绕浮石
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const st = mesh(new THREE.OctahedronGeometry(0.16, 0), glow(0x9bd7ff, 1),
      Math.cos(a) * 1.9, 2.2 + (i % 3) * 0.5, Math.sin(a) * 1.9);
    st.name = 'orbitStone';
    st.userData.orbitA = a;
    g.add(st);
  }
  const cLight = new THREE.PointLight(0x7de3ff, 30, 22, 2);
  cLight.position.set(0, 3.4, 0);
  cLight.name = 'crystalLight';
  g.add(cLight);
  g.position.copy(pos);
  return g;
}

export function bannerPole(pos, color) {
  const g = new THREE.Group();
  const pole = mesh(new THREE.CylinderGeometry(0.06, 0.08, 3.0, 6), toon(0x3a3f5a), 0, 1.5, 0);
  g.add(pole);
  const flagGeo = new THREE.BoxGeometry(0.06, 0.85, 1.15);
  const flag = mesh(flagGeo, toon(color), 0, 2.55, 0.62);
  g.add(outline(flag));
  g.position.copy(pos);
  return g;
}

// ---------- 桥（中央到各岛，木板沿贝塞尔铺设） ----------
export function bridge(a, b, color) {
  const g = new THREE.Group();
  const mid = a.clone().add(b).multiplyScalar(0.5);
  mid.y += 2.6;
  const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
  const len = curve.getLength();
  const n = Math.max(8, Math.round(len / 1.15));
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const p = curve.getPoint(t);
    const tan = curve.getTangent(t);
    const plank = mesh(new THREE.BoxGeometry(1.5, 0.18, 0.72), toon(i % 2 === 0 ? (color || 0xc99a5b) : 0xb9884b), p.x, p.y, p.z);
    plank.rotation.y = Math.atan2(tan.x, tan.z) + Math.PI / 2;
    plank.rotation.z = Math.sin(t * Math.PI) * 0.06;
    g.add(plank);
    if (i % 4 === 2) {
      const post = mesh(new THREE.CylinderGeometry(0.05, 0.06, 1.0, 5), toon(0x7a5a3a), p.x, p.y + 0.5, p.z);
      g.add(post);
      const bulb = mesh(new THREE.SphereGeometry(0.09, 8, 8), glow(0xffd335, 1), p.x, p.y + 1.05, p.z);
      g.add(bulb);
    }
  }
  return g;
}

// ---------- 岔路岛：分叉箭头牌 ----------
export function forkSign(pos) {
  const g = new THREE.Group();
  const pole = mesh(new THREE.CylinderGeometry(0.07, 0.09, 2.0, 6), toon(0x5a4632), 0, 1.0, 0);
  g.add(pole);
  const a1 = mesh(new THREE.BoxGeometry(1.5, 0.42, 0.07), toon(0xff4d6d), 0.55, 1.8, 0);
  a1.rotation.z = -0.35;
  g.add(outline(a1));
  const a2 = mesh(new THREE.BoxGeometry(1.5, 0.42, 0.07), toon(0x4da3ff), -0.55, 1.35, 0);
  a2.rotation.z = 0.35;
  g.add(outline(a2));
  const t1 = mesh(new THREE.ConeGeometry(0.16, 0.3, 4), toon(0xffffff), 1.32, 1.96, 0);
  t1.rotation.z = -Math.PI / 2 - 0.35;
  g.add(t1);
  const t2 = mesh(new THREE.ConeGeometry(0.16, 0.3, 4), toon(0xffffff), -1.32, 1.2, 0);
  t2.rotation.z = Math.PI / 2 + 0.35;
  g.add(t2);
  g.position.copy(pos);
  return g;
}

export function rockChunk(pos, s, color) {
  const g = new THREE.Group();
  const r = mesh(new THREE.DodecahedronGeometry(s || 0.5, 0), toon(color || 0x8a8a96), 0, (s || 0.5) * 0.55, 0);
  g.add(outline(r));
  g.position.copy(pos);
  return g;
}

export function pathStone(pos) {
  const g = new THREE.Group();
  const st = mesh(new THREE.CylinderGeometry(0.42, 0.5, 0.14, 7), toon(0xd9cfae), 0, 0.07, 0);
  st.castShadow = false;
  g.add(st);
  g.position.copy(pos);
  return g;
}

export function benchLog(pos, rotY) {
  const g = new THREE.Group();
  const log = mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.7, 8), toon(0x8a5f3c), 0, 0.22, 0);
  log.rotation.z = Math.PI / 2;
  g.add(outline(log));
  if (rotY) g.rotation.y = rotY;
  g.position.copy(pos);
  return g;
}

// ---------- Bloomy ----------
export function makeBloomy() {
  const g = new THREE.Group();
  const body = mesh(new RoundedBoxGeometry(1.05, 1.2, 0.9, 4, 0.2), toon(0x2e6bff), 0, 0.95, 0);
  g.add(outline(body));
  const face = mesh(new RoundedBoxGeometry(0.72, 0.5, 0.1, 3, 0.08), glow(0xffd335, 1), 0, 1.05, 0.46);
  face.name = 'face';
  g.add(face);
  const eyeL = mesh(new RoundedBoxGeometry(0.1, 0.22, 0.04, 2, 0.03), basic(0x14151a), -0.16, 1.12, 0.52);
  const eyeR = eyeL.clone(); eyeR.position.x = 0.16;
  eyeL.name = 'eyeL'; eyeR.name = 'eyeR';
  g.add(eyeL, eyeR);
  const mouth = mesh(new RoundedBoxGeometry(0.16, 0.05, 0.04, 2, 0.02), basic(0x14151a), 0, 0.95, 0.52);
  mouth.name = 'mouth';
  g.add(mouth);
  // 头顶小芽
  const stem = mesh(new THREE.CylinderGeometry(0.035, 0.05, 0.34, 6), toon(0x4a8a3a), 0.12, 1.78, 0);
  stem.rotation.z = -0.3;
  stem.name = 'stem';
  g.add(stem);
  const sproutGeo = new THREE.SphereGeometry(0.16, 8, 8);
  sproutGeo.scale(1, 0.55, 0.7);
  const sprout = mesh(sproutGeo, glow(0x7cfb4d, 1), 0.24, 1.96, 0);
  sprout.name = 'sprout';
  g.add(sprout);
  // 手
  const armL = mesh(new RoundedBoxGeometry(0.16, 0.5, 0.16, 2, 0.07), toon(0x2e6bff), -0.68, 0.95, 0);
  const armR = armL.clone(); armR.position.x = 0.68;
  armL.name = 'armL'; armR.name = 'armR';
  g.add(armL, armR);
  // 脚
  const footL = mesh(new RoundedBoxGeometry(0.34, 0.16, 0.44, 2, 0.06), toon(0x1c3fa0), -0.26, 0.08, 0.08);
  const footR = footL.clone(); footR.position.x = 0.26;
  g.add(footL, footR);
  // 移动喷焰（默认隐藏）
  const jet = mesh(new THREE.ConeGeometry(0.14, 0.4, 6), glow(0x7cfb4d, 1), 0, 0.28, -0.3);
  jet.rotation.x = Math.PI;
  jet.name = 'jet';
  jet.visible = false;
  g.add(jet);
  // 状态光
  const lamp = new THREE.PointLight(0x7cfb4d, 8, 6, 2);
  lamp.position.set(0, 1.6, 0);
  lamp.name = 'bloomyLight';
  g.add(lamp);
  return g;
}
