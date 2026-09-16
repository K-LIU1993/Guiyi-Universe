import * as THREE from 'three';
export function mountMap(host: HTMLElement) {
  let renderer: THREE.WebGLRenderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); }
  catch { host.dataset.fallback = 'true'; return () => {}; }
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 10, 9); camera.lookAt(0, 0, 0);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  scene.add(new THREE.HemisphereLight(0xffffff, 0x77738c, 3));
  const light = new THREE.DirectionalLight(0xffffff, 4); light.position.set(3, 8, 4); scene.add(light);
  const resources: Array<THREE.BufferGeometry | THREE.Material> = [];
  function mesh(geometry: THREE.BufferGeometry, color: number, x: number, y: number, z: number) {
    const material = new THREE.MeshStandardMaterial({ color, roughness: 0.8, flatShading: true });
    resources.push(geometry, material); const object = new THREE.Mesh(geometry, material);
    object.position.set(x, y, z); scene.add(object); return object;
  }
  const positions = [[-2, -1.4], [2, -1.4], [-2, 1.6], [2, 1.6]];
  positions.forEach(([x, z], i) => {
    mesh(new THREE.CylinderGeometry(1.35, 0.85, 0.7, 6), [0xb9c9f6, 0xd3e59d, 0xffb29a, 0xddb7ec][i], x, 0, z);
    mesh(new THREE.ConeGeometry(0.48, 1.15, 4), 0xf8f1da, x - 0.25, 0.85, z);
    mesh(new THREE.CylinderGeometry(0.09, 0.13, 0.65, 5), 0x645d68, x + 0.6, 0.65, z - 0.25);
    mesh(new THREE.IcosahedronGeometry(0.43, 0), [0x697ae4, 0x709c55, 0xe27865, 0x9c79c3][i], x + 0.6, 1.05, z - 0.25);
  });
  const crystal = mesh(new THREE.OctahedronGeometry(0.7), 0x8570ed, 0, 1.05, 0);
  const ring = mesh(new THREE.TorusGeometry(0.95, 0.025, 6, 48), 0xaaa0d2, 0, 0.18, 0); ring.rotation.x = Math.PI / 2;
  function resize() { const { width, height } = host.getBoundingClientRect(); renderer.setSize(width, height); camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.render(scene, camera); }
  resize(); host.append(renderer.domElement); // 首帧先渲染再挂载，背景始终保留。
  renderer.domElement.setAttribute('aria-label', '四岛俯瞰与中央归一水晶'); renderer.domElement.setAttribute('role', 'img');
  const observer = new ResizeObserver(resize); observer.observe(host);
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) renderer.setAnimationLoop(time => { crystal.rotation.y = time * 0.0003; renderer.render(scene, camera); });
  return () => { observer.disconnect(); renderer.setAnimationLoop(null); resources.forEach(r => r.dispose()); renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove(); };
}
