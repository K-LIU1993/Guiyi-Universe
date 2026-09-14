import * as THREE from 'three';

// 轻量特效：水波纹圈 + 粒子爆发（克制使用）
export class Effects {
  constructor(scene) {
    this.group = new THREE.Group();
    scene.add(this.group);
    this.ripples = [];
    this.bursts = [];
  }

  spawnRipple(pos, colorHex, scale) {
  scale = scale || 1;
    const geo = new THREE.RingGeometry(0.9, 1.06, 40);
    const mat = new THREE.MeshBasicMaterial({
      color: colorHex == null ? 0x7de3ff : colorHex,
      transparent: true, opacity: 0.75, side: THREE.DoubleSide
    });
    mat.toneMapped = false;
    const m = new THREE.Mesh(geo, mat);
    m.rotation.x = -Math.PI / 2;
    m.position.set(pos.x, (pos.y == null ? -0.3 : pos.y), pos.z);
    m.userData = { life: 0, dur: 1.6, max: (15 + Math.random() * 6) * scale };
    this.group.add(m);
    this.ripples.push(m);
  }

  spawnBurst(pos, colorHex, n, speed, up) {
    n = n || 26;
    speed = speed || 5;
    const positions = new Float32Array(n * 3);
    const vels = [];
    for (let i = 0; i < n; i++) {
      positions[i * 3] = pos.x; positions[i * 3 + 1] = pos.y; positions[i * 3 + 2] = pos.z;
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * speed;
      vels.push(new THREE.Vector3(Math.cos(a) * r, (up == null ? 3.5 : up) + Math.random() * 2.5, Math.sin(a) * r));
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: colorHex == null ? 0x7cfb4d : colorHex,
      size: 0.22, transparent: true, opacity: 1, depthWrite: false
    });
    mat.toneMapped = false;
    const pts = new THREE.Points(geo, mat);
    pts.userData = { life: 0, dur: 1.3, vels: vels };
    this.group.add(pts);
    this.bursts.push(pts);
  }

  update(dt) {
    for (let i = this.ripples.length - 1; i >= 0; i--) {
      const r = this.ripples[i];
      r.userData.life += dt;
      const k = r.userData.life / r.userData.dur;
      if (k >= 1) { this.group.remove(r); r.geometry.dispose(); r.material.dispose(); this.ripples.splice(i, 1); continue; }
      const s = 0.4 + k * r.userData.max;
      r.scale.set(s, s, 1);
      r.material.opacity = 0.75 * (1 - k);
    }
    for (let i = this.bursts.length - 1; i >= 0; i--) {
      const b = this.bursts[i];
      b.userData.life += dt;
      const k = b.userData.life / b.userData.dur;
      if (k >= 1) { this.group.remove(b); b.geometry.dispose(); b.material.dispose(); this.bursts.splice(i, 1); continue; }
      const arr = b.geometry.attributes.position.array;
      const vels = b.userData.vels;
      for (let j = 0; j < vels.length; j++) {
        vels[j].y -= 5.5 * dt;
        arr[j * 3] += vels[j].x * dt;
        arr[j * 3 + 1] += vels[j].y * dt;
        arr[j * 3 + 2] += vels[j].z * dt;
      }
      b.geometry.attributes.position.needsUpdate = true;
      b.material.opacity = 1 - k;
    }
  }
}
