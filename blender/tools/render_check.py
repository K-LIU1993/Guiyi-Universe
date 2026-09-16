"""Render front, side and 45-degree views; accepts --input and --out-dir."""
import argparse
import math
import sys
from pathlib import Path

def main():
    import bpy
    from mathutils import Vector
    parser = argparse.ArgumentParser()
    parser.add_argument('--input', required=True)
    parser.add_argument('--out-dir', default=str(Path(__file__).resolve().parents[1] / 'shots'))
    args = parser.parse_args(sys.argv[sys.argv.index('--') + 1:])
    source = Path(args.input).resolve()
    if source.suffix.lower() == '.blend':
        bpy.ops.wm.open_mainfile(filepath=str(source))
    else:
        bpy.ops.wm.read_factory_settings(use_empty=True)
        bpy.ops.import_scene.gltf(filepath=str(source))
    scene = bpy.context.scene
    corners = [o.matrix_world @ Vector(c) for o in scene.objects if o.type == 'MESH' for c in o.bound_box]
    if not corners:
        raise ValueError('No mesh to render')
    low = Vector([min(p[i] for p in corners) for i in range(3)])
    high = Vector([max(p[i] for p in corners) for i in range(3)])
    center = (low + high) / 2
    radius = max((high - low).length / 2, 0.1)
    camera_data = bpy.data.cameras.new('CHECK_camera')
    camera = bpy.data.objects.new('CHECK_camera', camera_data)
    scene.collection.objects.link(camera)
    camera_data.type = 'ORTHO'
    camera_data.ortho_scale = radius * 2.4
    camera_data.clip_end = radius * 20 + 100
    scene.camera = camera
    light_data = bpy.data.lights.new('CHECK_key', 'AREA')
    light_data.energy = 1500 * radius * radius
    light_data.shape = 'DISK'
    light_data.size = radius * 3
    light = bpy.data.objects.new('CHECK_key', light_data)
    scene.collection.objects.link(light)
    light.location = center + Vector((1, -2, 3)) * radius
    light.rotation_euler = (center - light.location).to_track_quat('-Z', 'Y').to_euler()
    scene.world = bpy.data.worlds.new('CHECK_world')
    scene.world.use_nodes = True
    scene.world.node_tree.nodes['Background'].inputs[0].default_value = (0.16, 0.16, 0.16, 1)
    available_engines = {item.identifier for item in bpy.types.RenderSettings.bl_rna.properties['engine'].enum_items}
    scene.render.engine = 'BLENDER_EEVEE_NEXT' if 'BLENDER_EEVEE_NEXT' in available_engines else 'BLENDER_EEVEE'
    scene.render.resolution_x = scene.render.resolution_y = 768
    scene.render.resolution_percentage = 100
    scene.render.image_settings.file_format = 'PNG'
    scene.view_settings.view_transform = 'Standard'
    scene.view_settings.look = 'None'
    scene.view_settings.exposure = 0
    scene.view_settings.gamma = 1
    target = Path(args.out_dir).resolve()
    target.mkdir(parents=True, exist_ok=True)
    for name, direction in [('front', (0,-1,0)), ('side', (1,0,0)), ('45', (1,-1,0.7))]:
        camera.location = center + Vector(direction).normalized() * radius * 4
        camera.rotation_euler = (center-camera.location).to_track_quat('-Z', 'Y').to_euler()
        scene.render.filepath = str(target / (source.stem + '_' + name + '.png'))
        bpy.ops.render.render(write_still=True)

if __name__ == '__main__':
    main()
