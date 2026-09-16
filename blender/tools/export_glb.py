"""Blender 4.x: blender -b --python export_glb.py -- --input scene.blend --out scene.glb --manifest scene.json"""
import argparse
import json
import re
import sys
from pathlib import Path

MESH_NAME = re.compile(r'^GY_[A-Za-z0-9]+_[A-Za-z0-9_]+_LOD[01]$')
EMPTY_NAME = re.compile(r'^(ANCHOR_CAM_(WORLD|ISLAND|PUZZLE)|SLOT_(description|dependency|generalization)|BRIDGE_SEG_[0-9]+|ZONE_[A-Za-z0-9_]+|SPAWN_player|SOUND_[A-Za-z0-9_]+)$')

def main():
    import bpy
    from mathutils import Vector
    parser = argparse.ArgumentParser()
    parser.add_argument('--input', required=True)
    parser.add_argument('--out', required=True)
    parser.add_argument('--manifest', required=True)
    args = parser.parse_args(sys.argv[sys.argv.index('--') + 1:])
    if bpy.app.version[0] < 4:
        raise RuntimeError('Validated target is Blender 4.x or newer')
    bpy.ops.wm.open_mainfile(filepath=str(Path(args.input).resolve()))
    scene = bpy.context.scene
    # Reject ambiguous scale rather than silently changing physical dimensions.
    if abs(scene.unit_settings.scale_length - 1.0) > 1e-6:
        raise ValueError('Normalize source to one Blender unit = one meter first')
    scene.unit_settings.system = 'METRIC'
    scene.unit_settings.length_unit = 'METERS'
    objects = [o for o in scene.objects if o.type in {'MESH', 'EMPTY'}]
    ids = set()
    records = []
    depsgraph = bpy.context.evaluated_depsgraph_get()
    for obj in objects:
        pattern = MESH_NAME if obj.type == 'MESH' else EMPTY_NAME
        if not pattern.fullmatch(obj.name):
            raise ValueError('Invalid export node name: ' + obj.name)
        object_id = obj.get('objectId')
        if not isinstance(object_id, str) or not object_id or object_id in ids:
            raise ValueError('Missing/duplicate stable objectId: ' + obj.name)
        ids.add(object_id)
        record = {'objectId': object_id, 'nodeName': obj.name, 'kind': obj.type.lower()}
        if obj.type == 'MESH':
            evaluated = obj.evaluated_get(depsgraph)
            mesh = evaluated.to_mesh()
            mesh.calc_loop_triangles()
            points = [evaluated.matrix_world @ v.co for v in mesh.vertices]
            if not points:
                raise ValueError('Empty mesh: ' + obj.name)
            low = [min(p[i] for p in points) for i in range(3)]
            high = [max(p[i] for p in points) for i in range(3)]
            dims = [high[i] - low[i] for i in range(3)]
            record.update(vertices=len(mesh.vertices), triangles=len(mesh.loop_triangles), dimensionsMetersYUp=[dims[0], dims[2], dims[1]])
            evaluated.to_mesh_clear()
        position = obj.matrix_world.translation
        record['positionMetersYUp'] = [position.x, position.z, -position.y]
        records.append(record)
    textures = []
    for image in bpy.data.images:
        if image.type not in {'RENDER_RESULT', 'COMPOSITING'} and image.size[0]:
            if max(image.size) > 1024:
                raise ValueError('Texture exceeds 1024: ' + image.name)
            textures.append({'name': image.name, 'resolution': list(image.size), 'colorSpace': image.colorspace_settings.name})
    out = Path(args.out).resolve()
    out.parent.mkdir(parents=True, exist_ok=True)
    bpy.ops.object.select_all(action='DESELECT')
    for obj in objects:
        obj.select_set(True)
    bpy.ops.export_scene.gltf(filepath=str(out), export_format='GLB', use_selection=True, export_yup=True, export_extras=True, export_apply=True, export_cameras=False, export_lights=False)
    # Reimport and check converted node identity and world-space size.
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.gltf(filepath=str(out))
    imported = {o.get('objectId'): o for o in bpy.context.scene.objects if o.get('objectId')}
    for record in records:
        obj = imported.get(record['objectId'])
        if obj is None or obj.name != record['nodeName']:
            raise ValueError('Round-trip lost node identity: ' + record['objectId'])
        if record['kind'] == 'mesh':
            corners = [obj.matrix_world @ Vector(c) for c in obj.bound_box]
            dims = [max(p[i] for p in corners) - min(p[i] for p in corners) for i in range(3)]
            actual = [dims[0], dims[2], dims[1]]
            if any(abs(a-b) > max(0.001, abs(b)*0.001) for a,b in zip(actual, record['dimensionsMetersYUp'])):
                raise ValueError('Round-trip dimensions mismatch: ' + obj.name)
    manifest = {'asset': out.name, 'units': 'meters', 'upAxis': 'Y', 'nodes': records, 'textures': textures, 'bytes': out.stat().st_size, 'roundTrip': 'VERIFIED', 'blenderVersion': bpy.app.version_string}
    target = Path(args.manifest).resolve()
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(json.dumps(manifest, indent=2), encoding='utf-8')

if __name__ == '__main__':
    main()
