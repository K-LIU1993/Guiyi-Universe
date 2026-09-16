import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { configureCompression } from './gltfLoader.js';
import { registerManifestActions, normalizeManifest } from './assetManifest.js';

export function createBFlowLoader({ decoderPath = '/draco/' } = {}) {
  const loader = configureCompression(new GLTFLoader(), {
    dracoLoader: new DRACOLoader().setDecoderPath(decoderPath),
    meshoptDecoder: MeshoptDecoder,
  });
  return loader;
}

export async function loadAndBindBFlow({ scene, url = '/assets/divergence_island.meshopt.glb', manifestUrl = '/assets/divergence_island.json', applyAction = () => {}, loader = createBFlowLoader() } = {}) {
  const manifest = normalizeManifest(await (await fetch(manifestUrl)).json());
  const gltf = await loader.loadAsync(url);
  scene.add(gltf.scene);
  const anchors = new Map();
  for (const binding of manifest.bindings || manifest.anchors) {
    const node = gltf.scene.getObjectByName(binding.nodeName);
    if (node) anchors.set(binding.objectId || binding.nodeName, { node, binding });
  }
  registerManifestActions({ ...manifest, actions: manifest.actions || [] }, applyAction);
  applyAction('bind_scene', { scene: gltf.scene, anchors, manifest });
  return { gltf, manifest, anchors };
}
