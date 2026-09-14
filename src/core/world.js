import * as THREE from 'three';
import { WORLD, REGIONS, REGION_MAP } from './constants.js';
import { Tweens, clamp, lerp, easeInOutCubic, deg, mulberry32 } from './utils.js';
import { toon, GRADIENT } from './materials.js';
import {
  islandBase, sakura, pine, bush, tuft,
  house, modernBlock, stiltHouse, billboard, signBoard,
  campfire, lanternString, portal, crystalShrine, bannerPole,
  bridge, forkSign, rockChunk, pathStone, benchLog, textTexture
} from './geometry.js';

const DECK_Y = 1.2;

function regionPos(r) {
  if (r.center) return new THREE.Vector3(0, 0, 0);
  const a = deg(r.angle);
  return new THREE.Vector3(Math.cos(a) * WORLD.radius, 0, Math.sin(a) * WORLD.radius);
}

// ---------- 天空穹顶（渐变夜空） ----------
function makeSky() {
  const vert = ['varying vec3 vPos;', 'void main() {', '  vPos = position;', '  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);', '}'].join('\n');
  const frag = [
    'varying vec3 vPos;',
    'void main() {',
    '  float h = normalize(vPos).y;',
    '  vec3 top = vec3(0.045, 0.05, 0.16);',
    '  vec3 mid = vec3(0.12, 0.10, 0.30);',
    '  vec3 low = vec3(0.30, 0.16, 0.38);',
    '  vec3 col = h > 0.0 ? mix(mid, top, pow(h, 0.72)) : mix(mid, low, clamp(-h * 2.4, 0.0, 1.0));',
    '  gl_FragColor = vec4(col, 1.0);',
    '}'
  ].join('\n');
  const mat = new THREE.ShaderMaterial({ vertexShader: vert, fragmentShader: frag, side: THREE.BackSide, depthWrite: false });
  mat.fog = false;
  return new THREE.Mesh(new THREE.SphereGeometry(380, 24, 18), mat);
}

// ---------- 星空 ----------
function makeStars() {
  const n = 620;
  const pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const e = 0.04 + Math.random() * 1.45;
    const r = 300 + Math.random() * 60;
    pos[i * 3] = Math.cos(a) * Math.cos(e) * r;
    pos[i * 3 + 1] = Math.sin(e) * r;
    pos[i * 3 + 2] = Math.sin(a) * Math.cos(e) * r;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({ color: 0xcfd8ff, size: 1.5, sizeAttenuation: false, transparent: true, opacity: 0.8 });
  mat.toneMapped = false;
  mat.fog = false;
  return new THREE.Points(geo, mat);
}

// ---------- 水面 ----------
function makeWater() {
  const geo = new THREE.PlaneGeometry(420, 420, 56, 56);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshToonMaterial({ color: 0x24307c, gradientMap: GRADIENT, transparent: true, opacity: 0.94 });
  const m = new THREE.Mesh(geo, mat);
  m.position.y = -0.4;
  m.receiveShadow = true;
  m.userData.base = geo.attributes.position.array.slice();
  return m;
}

// 遇见岛小池塘
function makePond() {
  const g = new THREE.Group();
  const water = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.6, 0.22, 24),
    new THREE.MeshToonMaterial({ color: 0x3f66c8, transparent: true, opacity: 0.95 }));
  water.position.y = 0.11;
  water.receiveShadow = true;
  g.add(water);
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const st = new THREE.Mesh(new THREE.DodecahedronGeometry(0.22 + (i % 3) * 0.08, 0), toon(0x8a8a96));
    st.position.set(Math.cos(a) * 2.78, 0.16, Math.sin(a) * 2.78);
    st.castShadow = true;
    g.add(st);
  }
  return g;
}

export class Universe {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x161a3e, 0.0038);
    this.tweens = new Tweens();
    this.interactives = [];
    this.anchors = {};
    this.updaters = [];
    this.islands = {};
    this.energy = 0;
    this.portalAwake = false;
    this.portalGlow = 0;
    this.locked = { cha: true, yu: true, wei: true };
    this.time = 0;
    this.effects = null;

    this.scene.add(makeSky());
    this.stars = makeStars();
    this.scene.add(this.stars);
    this.water = makeWater();
    this.scene.add(this.water);
    this.clouds = this.makeClouds();
    this.scene.add(this.clouds);

    this.buildIslands();
    this.buildMainland();
    this.buildPaths();
    this.buildBridges();
    this.buildWaterfalls();
    this.buildEngravedWalls();
    this.buildSakuraFrame();
    this.buildMist();
    this.setupUpdaters();
  }

  setEffects(e) { this.effects = e; }

  makeClouds() {
    const g = new THREE.Group();
    const puffs = [
      [70, 24, -40, 1.6], [-90, 30, -60, 2.1], [40, 27, 95, 1.8],
      [-55, 22, 75, 1.3], [110, 33, 55, 1.5], [0, 36, -120, 2.4]
    ];
    for (let i = 0; i < puffs.length; i++) {
      const p = puffs[i];
      const cloud = new THREE.Group();
      for (let j = 0; j < 4; j++) {
        const s = (0.8 + (j % 3) * 0.5) * p[3];
        const puff = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 1), toon(0xf2f4ff));
        puff.position.set((j - 1.5) * s * 0.9, (j % 2) * 0.4, (j % 2 - 0.5) * s);
        puff.scale.y = 0.62;
        cloud.add(puff);
      }
      cloud.position.set(p[0], p[1], p[2]);
      g.add(cloud);
    }
    return g;
  }

  buildIslands() {
    for (const r of REGIONS) {
      const pos = regionPos(r);
      const g = new THREE.Group();
      const base = islandBase(r.center ? WORLD.centerR : WORLD.islandR, r.grass, r.rock, r.angle + 9);
      g.add(base);
      this.decorate(r, g);
      g.position.set(pos.x, -36, pos.z);
      // 锚点：着陆点（朝中心一侧）与悬浮标签位
      const dir = new THREE.Vector3(-pos.x, 0, -pos.z);
      let land;
      if (r.center) {
        land = new THREE.Vector3(0, DECK_Y, 4.5);
      } else {
        dir.normalize();
        land = new THREE.Vector3(pos.x + dir.x * 5.2, DECK_Y, pos.z + dir.z * 5.2);
      }
      const spots = [];
      if (r.center) {
        for (let si = 0; si < 3; si++) {
          const sa2 = (si / 3) * Math.PI * 2 + 0.5;
          spots.push(new THREE.Vector3(Math.cos(sa2) * 4.6, DECK_Y + 0.2, Math.sin(sa2) * 4.6));
        }
      } else {
        const sd = new THREE.Vector3(-pos.x, 0, -pos.z).normalize();
        const ss = new THREE.Vector3(-sd.z, 0, sd.x);
        spots.push(new THREE.Vector3(pos.x + sd.x * 4.2, DECK_Y + 0.2, pos.z + sd.z * 4.2));
        spots.push(new THREE.Vector3(pos.x + sd.x * 2.0 + ss.x * 3.6, DECK_Y + 0.2, pos.z + sd.z * 2.0 + ss.z * 3.6));
        spots.push(new THREE.Vector3(pos.x + sd.x * 2.0 - ss.x * 3.6, DECK_Y + 0.2, pos.z + sd.z * 2.0 - ss.z * 3.6));
      }
      this.anchors[r.key] = {
        land: land,
        label: new THREE.Vector3(pos.x, 9.4, pos.z),
        center: new THREE.Vector3(pos.x, DECK_Y + 1.6, pos.z),
        spots: spots
      };
      g.traverse((o) => {
        if (o.isMesh) { o.userData.region = r.key; this.interactives.push(o); }
      });
      this.islands[r.key] = g;
      this.scene.add(g);
    }
  }

  spreadTufts(g, r, D, n) {
    const rnd = mulberry32(r.angle + 100);
    const col = r.key === 'wei' ? 0x4f6b4a : (r.key === 'cidi' ? 0xcfe0ff : (r.key === 'yu' ? 0xe8c96a : (r.key === 'cha' ? 0xffb59a : (r.key === 'form' ? 0xd8c8ff : 0x9ade6e))));
    const rr = (r.center ? 1.25 : 1) * (WORLD.islandR - 3.4);
    for (let i = 0; i < n; i++) {
      const a = rnd() * Math.PI * 2;
      const d = 1.8 + rnd() * (rr - 1.8);
      g.add(tuft(new THREE.Vector3(Math.cos(a) * d, D, Math.sin(a) * d), col));
    }
  }

  addFireflies(g, D, cx, cz, n, spread, color) {
    const pos = new Float32Array(n * 3);
    const phases = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = cx + (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = D + 0.7 + Math.random() * 2.6;
      pos[i * 3 + 2] = cz + (Math.random() - 0.5) * spread;
      phases[i] = Math.random() * Math.PI * 2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ color: color, size: 0.17, transparent: true, opacity: 0.55, depthWrite: false });
    mat.toneMapped = false;
    const pts = new THREE.Points(geo, mat);
    pts.userData.base = pos.slice();
    pts.userData.phases = phases;
    g.add(pts);
    this.fireflies = pts;
  }

  decorate(r, g) {
    const D = DECK_Y;
    const v = (x, y, z) => new THREE.Vector3(x, y, z);
    if (r.key === 'lai') {
      g.add(signBoard(v(4.8, D, -3.4), ['来路', '看看别人怎样走过'], 0xff8a3c, -0.55));
      g.add(house(v(-3.4, D, -2.4), 1.15, 0xfff3dc, 0xe86a4a));
      g.add(sakura(v(-6.3, D, 1.6), 1.25, 1));
      g.add(sakura(v(3.4, D, 4.2), 1.05, 2));
      g.add(sakura(v(-1.4, D, 5.4), 1.5, 3));
      g.add(bush(v(6.1, D, 1.0), 1.15, 0xffc9a3));
      g.add(bush(v(-6.5, D, -3.6), 0.9, 0xffc9a3));
      for (let i = 0; i < 6; i++) {
        const t = i / 5;
        g.add(pathStone(v(lerp(4.4, -2.2, t), D, lerp(-2.8, -1.6, t))));
      }
      this.spreadTufts(g, r, D, 7);
    } else if (r.key === 'cidi') {
      g.add(modernBlock(v(-3.8, D, -2.4), 2.2, 3.4, 2.2, 0x4da3ff));
      g.add(modernBlock(v(1.6, D, -3.8), 2.6, 5.2, 2.4, 0x7de3ff));
      g.add(modernBlock(v(4.4, D, 1.6), 2.0, 2.3, 2.0, 0x4da3ff));
      g.add(billboard(v(-4.6, D, 3.6), ['此地', '看清你面对的条件']));
      g.add(bush(v(5.9, D, -2.4), 1.1, 0xbfd0ff));
      g.add(bush(v(-6.2, D, 0.8), 0.95, 0xbfd0ff));
      for (let i = 0; i < 6; i++) {
        const t = i / 5;
        g.add(pathStone(v(lerp(0.2, 0.8, t), D, lerp(4.4, 1.2, t))));
      }
      this.spreadTufts(g, r, D, 6);
    } else if (r.key === 'cha') {
      g.add(forkSign(v(0.2, D, 0.6)));
      g.add(rockChunk(v(-3.9, D, 2.7), 0.95, 0xa04040));
      g.add(rockChunk(v(3.6, D, 3.1), 0.7, 0xb85545));
      g.add(rockChunk(v(4.9, D, -2.6), 0.55, 0xa04040));
      g.add(bush(v(5.7, D, 0.9), 1.1, 0xff9a7a));
      g.add(bush(v(-5.9, D, -2.2), 0.9, 0xff9a7a));
      for (let i = 0; i < 5; i++) {
        const t = i / 4;
        g.add(pathStone(v(lerp(-4.6, -1.0, t), D, lerp(-0.2, 2.7, t))));
        g.add(pathStone(v(lerp(-4.6, -1.0, t), D, lerp(0.2, -2.7, t))));
      }
      this.spreadTufts(g, r, D, 6);
    } else if (r.key === 'yu') {
      const pond = makePond();
      pond.position.set(-0.6, D, -1.8);
      g.add(pond);
      g.add(stiltHouse(v(-4.4, D, -2.8), 1.1));
      const fire = campfire(v(1.6, D, 2.6));
      g.add(fire);
      this.campfireGroup = fire;
      g.add(benchLog(v(2.9, D, 3.4), 0.6));
      g.add(benchLog(v(0.1, D, 4.1), -0.35));
      const postA = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 2.6, 6), toon(0x3a3f5a));
      postA.position.set(-4.8, D + 1.3, 0.9);
      postA.castShadow = true;
      const postB = postA.clone();
      postB.position.set(4.6, D + 1.3, -3.1);
      g.add(postA, postB);
      const ls = lanternString(v(-4.8, D + 2.55, 0.9), v(4.6, D + 2.55, -3.1), 7, [0xffd335, 0xff8a3c, 0xff4d6d]);
      const bulbs = [];
      ls.traverse((o) => { if (o.name === 'bulb') bulbs.push(o); });
      this.lanternBulbs = bulbs;
      g.add(ls);
      g.add(bush(v(6.2, D, -0.8), 1.1, 0xd4a94a));
      for (let i = 0; i < 5; i++) {
        const t = i / 4;
        g.add(pathStone(v(lerp(3.4, 0.6, t), D, lerp(-3.2, 1.4, t))));
      }
      this.spreadTufts(g, r, D, 6);
    } else if (r.key === 'wei') {
      g.add(pine(v(4.6, D, 3.4), 1.5, 0x2e4a3a));
      g.add(pine(v(-4.9, D, 2.3), 1.2, 0x2e4a3a));
      g.add(pine(v(2.9, D, -4.7), 1.7, 0x243d30));
      g.add(pine(v(-2.5, D, 4.9), 1.35, 0x2e4a3a));
      const pg = portal(v(0.4, D, 0.4), 0x8cff6b);
      g.add(pg);
      this.portalGroup = pg;
      this.addFireflies(g, D, 0.4, 0.4, 26, 7.5, 0x8cff6b);
      g.add(rockChunk(v(3.2, D, 1.8), 0.6, 0x3a3f5c));
      g.add(rockChunk(v(-2.8, D, -1.9), 0.75, 0x3a3f5c));
      g.add(rockChunk(v(1.7, D, 4.6), 0.5, 0x3a3f5c));
      this.spreadTufts(g, r, D, 6);
    } else if (r.key === 'form') {
      const shrine = crystalShrine(v(0, D, 0));
      g.add(shrine);
      this.crystalGroup = shrine;
      for (const o of REGIONS) {
        if (o.center) continue;
        const a = deg(o.angle);
        g.add(bannerPole(v(Math.cos(a) * 9.8, D, Math.sin(a) * 9.8), o.three));
      }
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2 + 0.31;
        g.add(pathStone(v(Math.cos(a) * 5.5, D, Math.sin(a) * 5.5)));
      }
      g.add(bush(v(6.8, D, 2.4), 1.2, 0xcbb8ff));
      g.add(bush(v(-6.4, D, -2.8), 1.0, 0xcbb8ff));
      g.add(bush(v(1.8, D, -7.0), 0.9, 0xcbb8ff));
      this.spreadTufts(g, r, D, 8);
    }
  }

  buildMainland() {
    const land = new THREE.Group();
    const top = new THREE.Mesh(new THREE.CylinderGeometry(62, 57.5, 2.6, 42), toon(0x5f7050));
    top.position.y = -2.3;
    top.receiveShadow = true;
    land.add(top);
    const skirt = new THREE.Mesh(new THREE.CylinderGeometry(57.5, 26, 12, 42), toon(0x443a52));
    skirt.position.y = -8.6;
    land.add(skirt);
    for (const r of REGIONS) {
      const pos = regionPos(r);
      const ringR = r.center ? 16.5 : 15.2;
      const ring = new THREE.Mesh(new THREE.CylinderGeometry(ringR, ringR, 0.18, 36), toon(r.center ? 0x8f7fb8 : r.grass));
      ring.position.set(pos.x, -1.02, pos.z);
      ring.receiveShadow = true;
      land.add(ring);
    }
    const rnd = mulberry32(20260915);
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 2 + rnd() * 0.3;
      const d = 59 + rnd() * 3;
      land.add(rockChunk(new THREE.Vector3(Math.cos(a) * d, -1.4, Math.sin(a) * d), 0.6 + rnd() * 1.1, 0x443a52));
    }
    this.scene.add(land);
  }

  buildPaths() {
    const posOf = {};
    for (const r of REGIONS) posOf[r.key] = regionPos(r);
    const pairs = [['lai', 'cidi'], ['cidi', 'cha'], ['cha', 'wei'], ['wei', 'yu'], ['yu', 'lai']];
    const g = new THREE.Group();
    for (const p of pairs) {
      const a = posOf[p[0]];
      const b = posOf[p[1]];
      const len = a.distanceTo(b);
      const n = Math.max(2, Math.floor(len / 2.3));
      for (let i = 1; i < n; i++) {
        const t = i / n;
        g.add(pathStone(new THREE.Vector3(a.x + (b.x - a.x) * t, -0.84, a.z + (b.z - a.z) * t)));
      }
    }
    const arches = [['cidi', 'cha'], ['yu', 'lai']];
    const stoneMat = toon(0x8a8a96);
    for (const p of arches) {
      const a = posOf[p[0]];
      const b = posOf[p[1]];
      const mx = (a.x + b.x) / 2;
      const mz = (a.z + b.z) / 2;
      const dir = new THREE.Vector3(b.x - a.x, 0, b.z - a.z).normalize();
      const side = new THREE.Vector3(-dir.z, 0, dir.x);
      for (const s of [-1, 1]) {
        const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.55, 3.1, 0.55), stoneMat);
        pillar.position.set(mx + side.x * 1.7 * s, 0.62, mz + side.z * 1.7 * s);
        pillar.castShadow = true;
        g.add(pillar);
      }
      const beam = new THREE.Mesh(new THREE.BoxGeometry(4.3, 0.5, 0.7), stoneMat);
      beam.position.set(mx, 2.45, mz);
      beam.rotation.y = Math.atan2(-dir.x, -dir.z);
      beam.castShadow = true;
      g.add(beam);
    }
    this.scene.add(g);
  }

  makeFallTexture() {
    const c = document.createElement('canvas');
    c.width = 32;
    c.height = 128;
    const ctx = c.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 0, 128);
    grad.addColorStop(0, 'rgba(235,247,255,0.95)');
    grad.addColorStop(0.55, 'rgba(150,214,255,0.8)');
    grad.addColorStop(1, 'rgba(90,150,230,0.12)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 128);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapT = THREE.RepeatWrapping;
    return tex;
  }

  buildWaterfalls() {
    this.fallMats = [];
    const specs = [
      { key: 'lai', a: 0.55, drop: 2.0 },
      { key: 'cha', a: -0.65, drop: 2.2 },
      { key: 'wei', a: 2.55, drop: 2.1 },
      { key: 'cidi', a: 0.95, drop: 1.8 }
    ];
    const g = new THREE.Group();
    for (const sp of specs) {
      const pos = regionPos(REGION_MAP[sp.key]);
      const dir = new THREE.Vector3(-pos.x, 0, -pos.z).normalize();
      const ca = Math.cos(sp.a);
      const sa = Math.sin(sp.a);
      const rd = new THREE.Vector3(dir.x * ca - dir.z * sa, 0, dir.x * sa + dir.z * ca);
      const edge = new THREE.Vector3(pos.x + rd.x * (WORLD.islandR - 0.8), 0, pos.z + rd.z * (WORLD.islandR - 0.8));
      const h = sp.drop;
      const mat = new THREE.MeshBasicMaterial({ map: this.makeFallTexture(), transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false });
      const fall = new THREE.Mesh(new THREE.PlaneGeometry(2.1, h), mat);
      fall.position.set(edge.x, 1.05 - h / 2, edge.z);
      fall.rotation.y = Math.atan2(pos.x, pos.z);
      g.add(fall);
      const foam = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.55, 0.14, 18), new THREE.MeshBasicMaterial({ color: 0xdff2ff, transparent: true, opacity: 0.55, depthWrite: false }));
      foam.position.set(edge.x, 1.1 - h, edge.z);
      g.add(foam);
      this.fallMats.push(mat);
    }
    this.scene.add(g);
  }

  makeEngravedWall(lines, w, h, pos, rotY) {
    const g = new THREE.Group();
    const slab = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.5), toon(0x3c3548));
    slab.position.y = h / 2;
    slab.castShadow = true;
    g.add(slab);
    const tex = textTexture(lines, { bg: '#3c3548', color: '#ffe9a8', subColor: '#9ad0ff', mainSize: 60, subSize: 44, w: 512, h: 192 });
    const face = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.94, h * 0.86), new THREE.MeshBasicMaterial({ map: tex }));
    face.position.set(0, h / 2, 0.28);
    g.add(face);
    g.position.copy(pos);
    g.rotation.y = rotY;
    return g;
  }

  buildEngravedWalls() {
    const g = new THREE.Group();
    g.add(this.makeEngravedWall(['SAME QUESTION', 'MORE PERSPECTIVES'], 8.4, 3.0, new THREE.Vector3(14, -0.9, -13), 0.55));
    g.add(this.makeEngravedWall(['ALL EXPERIENCES', 'MATTER'], 7.2, 2.8, new THREE.Vector3(-31, -0.9, -10), 1.25));
    g.add(this.makeEngravedWall(['DIFFERENT VIEWS', 'A WIDER YOU'], 7.2, 2.8, new THREE.Vector3(31, -0.9, 10), -1.15));
    this.scene.add(g);
  }

  buildSakuraFrame() {
    const lai = regionPos(REGION_MAP.lai);
    const dir = new THREE.Vector3(-lai.x, 0, -lai.z).normalize();
    const base = new THREE.Vector3(lai.x + dir.x * 7.4, DECK_Y, lai.z + dir.z * 7.4);
    const side = new THREE.Vector3(-dir.z, 0, dir.x);
    const g = new THREE.Group();
    g.add(sakura(new THREE.Vector3(base.x + side.x * 2.5, DECK_Y, base.z + side.z * 2.5), 1.25, 11));
    g.add(sakura(new THREE.Vector3(base.x - side.x * 2.5, DECK_Y, base.z - side.z * 2.5), 1.25, 23));
    const beam = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 5.6), toon(0xc99a5b));
    beam.position.set(base.x, DECK_Y + 2.15, base.z);
    beam.rotation.y = Math.atan2(side.x, side.z);
    beam.castShadow = true;
    g.add(beam);
    this.scene.add(g);
  }

  makeMistPuff(x, y, z, s, color, opacity) {
    const m = new THREE.Mesh(
      new THREE.IcosahedronGeometry(s, 1),
      new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: opacity, depthWrite: false })
    );
    m.position.set(x, y, z);
    m.userData.drift = Math.random() * Math.PI * 2;
    return m;
  }

  buildMist() {
    this.mistGroups = {};
    const specs = [
      { key: 'wei', color: 0x4f6b5a, n: 4, spread: 6.4, s: 3.4 },
      { key: 'cha', color: 0x99a0b8, n: 3, spread: 5.6, s: 3.0 },
      { key: 'yu', color: 0x99a0b8, n: 3, spread: 5.6, s: 3.0 }
    ];
    for (const sp of specs) {
      const pos = regionPos(REGION_MAP[sp.key]);
      const g = new THREE.Group();
      for (let i = 0; i < sp.n; i++) {
        const a = (i / sp.n) * Math.PI * 2;
        const px = pos.x + Math.cos(a) * sp.spread * (0.5 + (i % 2) * 0.35);
        const pz = pos.z + Math.sin(a) * sp.spread * (0.5 + (i % 2) * 0.35);
        g.add(this.makeMistPuff(px, 1.6 + (i % 3) * 1.1, pz, sp.s * (0.75 + (i % 2) * 0.3), sp.color, 0.42));
      }
      g.visible = false;
      this.scene.add(g);
      this.mistGroups[sp.key] = g;
    }
  }

  isLocked(key) { return this.locked[key] === true; }

  setUnlocked(key, open) {
    const was = !this.locked[key];
    this.locked[key] = !open;
    if (open && !was) {
      const g = this.mistGroups[key];
      if (g && g.visible) {
        const puffs = [];
        g.traverse((o) => { if (o.isMesh) puffs.push(o); });
        this.tweens.add(1.3, (k) => {
          for (const p of puffs) {
            p.material.opacity = 0.42 * (1 - k);
            p.scale.setScalar(1 + k * 0.7);
          }
        }, () => { g.visible = false; }, easeInOutCubic);
      }
      if (this.effects) {
        const pos = regionPos(REGION_MAP[key]);
        this.effects.spawnRipple(new THREE.Vector3(pos.x, 1.1, pos.z), 0xffd166, 2.2);
      }
      return true;
    }
    return false;
  }

  applyLocks() {
    for (const key in this.mistGroups) {
      const g = this.mistGroups[key];
      g.visible = this.locked[key] === true;
      if (g.visible) {
        g.traverse((o) => { if (o.isMesh) { o.material.opacity = 0.42; o.scale.setScalar(1); } });
      }
    }
  }

  buildBridges() {
    this.bridgeGroup = new THREE.Group();
    for (const r of REGIONS) {
      if (r.center) continue;
      const pos = regionPos(r);
      const dir = new THREE.Vector3(-pos.x, 0, -pos.z).normalize();
      const a = new THREE.Vector3(dir.x * (WORLD.centerR - 1.2), DECK_Y + 0.05, dir.z * (WORLD.centerR - 1.2));
      const b = new THREE.Vector3(pos.x - dir.x * (WORLD.islandR - 1.6), DECK_Y + 0.05, pos.z - dir.z * (WORLD.islandR - 1.6));
      const bg = bridge(a, b, r.key === 'wei' ? 0x6a6a78 : 0xc99a5b);
      bg.traverse((o) => {
        if (o.isMesh) { o.userData.region = r.key; this.interactives.push(o); }
      });
      this.bridgeGroup.add(bg);
    }
    this.scene.add(this.bridgeGroup);
  }

  rise(onDone) {
    const order = ['form', 'lai', 'cidi', 'cha', 'yu', 'wei'];
    let remaining = order.length;
    order.forEach((key, i) => {
      const g = this.islands[key];
      setTimeout(() => {
        this.tweens.add(1.6, (k) => {
          g.position.y = -36 * (1 - k);
        }, () => {
          g.position.y = 0;
          if (this.effects) {
            this.effects.spawnRipple(new THREE.Vector3(g.position.x, -0.28, g.position.z), 0x9bd7ff, 2.4);
          }
          remaining--;
          if (remaining === 0 && onDone) onDone();
        }, easeInOutCubic);
      }, 140 + i * 300);
    });
  }

  setEnergy(n) { this.energy = clamp(n, 0, 1); }

  awakenPortal() {
    if (this.portalAwake) return false;
    this.portalAwake = true;
    this.setUnlocked('wei', true);
    this.tweens.add(1.6, (k) => { this.portalGlow = k; });
    return true;
  }

  setupUpdaters() {
    // 水面波浪
    this.updaters.push((t) => {
      const arr = this.water.geometry.attributes.position.array;
      const base = this.water.userData.base;
      for (let i = 0; i < arr.length; i += 3) {
        const x = base[i]; const z = base[i + 2];
        arr[i + 1] = Math.sin(x * 0.09 + t * 1.1) * 0.16 + Math.cos(z * 0.11 + t * 0.7) * 0.12;
      }
      this.water.geometry.attributes.position.needsUpdate = true;
    });
    // 星星呼吸 + 云漂移
    this.updaters.push((t) => {
      this.stars.material.opacity = 0.72 + Math.sin(t * 0.7) * 0.14;
      this.clouds.rotation.y = t * 0.006;
    });
    // 水晶祭坛
    const shrine = this.crystalGroup;
    if (shrine) {
      const crystal = shrine.getObjectByName('crystal');
      const core = shrine.getObjectByName('crystalCore');
      const light = shrine.getObjectByName('crystalLight');
      const stones = [];
      shrine.traverse((o) => { if (o.name === 'orbitStone') stones.push(o); });
      this.updaters.push((t) => {
        crystal.rotation.y = t * 0.5;
        crystal.position.y = 2.6 + Math.sin(t * 1.2) * 0.12;
        core.position.y = crystal.position.y;
        core.rotation.y = -t * 0.8;
        light.intensity = 8 + this.energy * 55 + Math.sin(t * 2.4) * (3 + this.energy * 8);
        const s = 1 + this.energy * 0.3 + Math.sin(t * 2.4) * 0.02;
        crystal.scale.set(s, s * (1 + this.energy * 0.12), s);
        for (let i = 0; i < stones.length; i++) {
          const st = stones[i];
          const a = st.userData.orbitA + t * (0.4 + this.energy * 0.5);
          st.position.set(Math.cos(a) * 1.9, 2.2 + Math.sin(t * 1.5 + a) * 0.3 + (i % 3) * 0.5, Math.sin(a) * 1.9);
        }
      });
    }
    // 传送门
    const pg = this.portalGroup;
    if (pg) {
      const disc = pg.getObjectByName('portalDisc');
      const pLight = pg.getObjectByName('portalLight');
      this.updaters.push((t) => {
        disc.rotation.z = t * 0.3;
        const g = this.portalGlow;
        disc.material.opacity = (0.62 + Math.sin(t * 2.2) * 0.16) * g;
        pLight.intensity = (34 + Math.sin(t * 2.2) * 10) * g;
      });
    }
    // 篝火
    const fire = this.campfireGroup;
    if (fire) {
      const f1 = fire.getObjectByName('flame');
      const f2 = fire.getObjectByName('flame2');
      const li = fire.getObjectByName('firelight');
      this.updaters.push((t) => {
        const k = 1 + Math.sin(t * 11) * 0.12 + Math.sin(t * 23.7) * 0.07;
        f1.scale.set(k, 1 + Math.sin(t * 9.3) * 0.18, k);
        f2.scale.setScalar(1 + Math.sin(t * 13.1) * 0.2);
        li.intensity = 46 + Math.sin(t * 12.7) * 10;
      });
    }
    // 灯串
    const bulbs = this.lanternBulbs;
    if (bulbs && bulbs.length) {
      this.updaters.push((t) => {
        for (let i = 0; i < bulbs.length; i++) {
          bulbs[i].scale.setScalar(0.9 + Math.sin(t * 3 + i * 1.4) * 0.12);
        }
      });
    }
    // 萤火虫
    const ff = this.fireflies;
    if (ff) {
      this.updaters.push((t) => {
        const arr = ff.geometry.attributes.position.array;
        const base = ff.userData.base;
        const ph = ff.userData.phases;
        for (let i = 0; i < ph.length; i++) {
          arr[i * 3] = base[i * 3] + Math.sin(t * 0.7 + ph[i]) * 0.6;
          arr[i * 3 + 1] = base[i * 3 + 1] + Math.sin(t * 1.3 + ph[i] * 2) * 0.45;
          arr[i * 3 + 2] = base[i * 3 + 2] + Math.cos(t * 0.6 + ph[i]) * 0.6;
        }
        ff.geometry.attributes.position.needsUpdate = true;
        ff.material.opacity = 0.5 + Math.sin(t * 2.8) * 0.15 + this.portalGlow * 0.35;
      });
    }
    // 瀑布流动 + 迷雾漂移
    const fallMats = this.fallMats;
    const mistGroups = this.mistGroups;
    this.updaters.push((t) => {
      if (fallMats) {
        for (let i = 0; i < fallMats.length; i++) {
          fallMats[i].map.offset.y = -(t * (0.55 + i * 0.09)) % 1;
        }
      }
      for (const key in mistGroups) {
        const g = mistGroups[key];
        if (!g.visible) continue;
        for (const p of g.children) {
          p.position.y += Math.sin(t * 0.6 + p.userData.drift) * 0.0035;
          p.rotation.y = t * 0.08 + p.userData.drift;
        }
      }
    });
  }

  update(dt) {
    this.time += dt;
    this.tweens.update(dt);
    for (let i = 0; i < this.updaters.length; i++) this.updaters[i](this.time);
  }
}
