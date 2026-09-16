"""Blender 4.x --background --python build_blockouts.py. No external dependencies."""
from pathlib import Path
import math
import bpy

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'blender' / 'sources'

def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.context.scene.unit_settings.system = 'METRIC'
    bpy.context.scene.unit_settings.scale_length = 1

def material(name, color):
    mat = bpy.data.materials.new(name)
    mat.diffuse_color = (*color, 1)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get('Principled BSDF')
    bsdf.inputs['Base Color'].default_value = (*color, 1)
    bsdf.inputs['Roughness'].default_value = 0.8
    return mat

def shape(island, part, position, scale, mat, sphere=False):
    if sphere:
        bpy.ops.mesh.primitive_uv_sphere_add(segments=16, ring_count=8, location=position)
    else:
        bpy.ops.mesh.primitive_cube_add(size=1, location=position)
    obj = bpy.context.object
    obj.name = f'GY_{island}_{part}_LOD0'
    obj['objectId'] = f'gy.{island}.{part}.lod0'
    obj.scale = scale
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.data.materials.append(mat)
    return obj

def anchor(name, position):
    obj = bpy.data.objects.new(name, None)
    bpy.context.scene.collection.objects.link(obj)
    obj.location = position
    obj['objectId'] = 'gy.divergence.' + name.lower()
    obj.empty_display_size = 0.3
    return obj

def save(name):
    OUT.mkdir(parents=True, exist_ok=True)
    bpy.ops.wm.save_as_mainfile(filepath=str(OUT / (name + '.blend')))

def bloomy():
    reset()
    white = material('Bloomy_cream_linear', (0.85,0.92,0.72))
    ink = material('Bloomy_eyes_linear', (0.01,0.02,0.06))
    violet = material('Bloomy_violet_linear', (0.25,0.04,0.75))
    for part,pos,scale,mat in [
        ('body',(0,0,0.95),(0.25,0.18,0.38),violet),
        ('head',(0,0,1.48),(0.29,0.23,0.28),white),
        ('armL',(-0.34,0,0.95),(0.10,0.10,0.30),white),
        ('armR',(0.34,0,0.95),(0.10,0.10,0.30),white),
        ('legL',(-0.14,0,0.32),(0.11,0.13,0.32),violet),
        ('legR',(0.14,0,0.32),(0.11,0.13,0.32),violet),
        ('eyeL',(-0.10,-0.215,1.52),(0.06,0.035,0.08),white),
        ('eyeR',(0.10,-0.215,1.52),(0.06,0.035,0.08),white),
        ('pupilL',(-0.085,-0.247,1.52),(0.027,0.017,0.045),ink),
        ('pupilR',(0.115,-0.247,1.52),(0.027,0.017,0.045),ink)]:
        shape('bloomy',part,pos,scale,mat,True)
    save('bloomy')

def divergence():
    reset()
    purple = material('Rock_linear',(0.20,0.035,0.48))
    coral = material('Platform_linear',(0.95,0.13,0.08))
    mint = material('Connection_linear',(0.05,0.8,0.42))
    # The open gap between banks is a physical rift, never a painted stripe.
    shape('divergence','riftWest',(-3.5,0,-0.7),(5,8,1.4),purple)
    shape('divergence','riftEast',(3.5,0,-0.7),(5,8,1.4),purple)
    shape('divergence','forkStem',(-3,-2,0.15),(1.2,2.4,0.3),coral)
    for part,x,angle in [('forkLeft',-3.7,0.5),('forkRight',-2.3,-0.5)]:
        obj=shape('divergence',part,(x,-0.3,0.15),(1.1,2.2,0.3),coral)
        obj.rotation_euler.z=angle
    shape('divergence','opposedWest',(-2,2,0.3),(1.5,2,0.6),coral)
    shape('divergence','opposedEast',(2,2,0.3),(1.5,2,0.6),mint)
    shape('divergence','connector',(3,-2,0.5),(1,1,1),mint)
    for i in range(5):
        shape('divergence',f'bridge{i}',(-1+i*0.5,2,0.3),(0.45,0.9,0.25),mint)
        anchor(f'BRIDGE_SEG_{i}',(-1+i*0.5,2,0.6))
    for name,pos in {
        'ANCHOR_CAM_WORLD':(12,-16,14),'ANCHOR_CAM_ISLAND':(9,-12,10),
        'ANCHOR_CAM_PUZZLE':(5,-6,4),'SLOT_description':(-3,-2,0.5),
        'SLOT_dependency':(3,-2,1.1),'SLOT_generalization':(2,2,0.7),
        'ZONE_rift':(0,0,0),'ZONE_fork':(-3,-1,0.5),
        'ZONE_opposed':(0,2,0.5),'ZONE_connector':(3,-2,0.5),
        'SPAWN_player':(-4,-3,0.5),'SOUND_ambient':(0,0,2)
    }.items():
        anchor(name,pos)
    save('divergence_island')

def overview():
    reset()
    colors=[(0.9,0.15,0.08),(0.12,0.7,0.4),(0.25,0.05,0.8),(0.95,0.6,0.04)]
    # Slot IDs are neutral until the other three islands receive canonical names.
    for i, (x,y) in enumerate([(-5,-4),(5,-4),(-5,4),(5,4)]):
        mat=material(f'Overview{i}_linear',colors[i])
        shape('overview',f'island{i}',(x,y,-0.5),(3.5,2.8,0.8),mat,True)
        for j in range(i+1):
            shape('overview',f'landmark{i}_{j}',(x-1+j*0.65,y,0.7),(0.45,0.6,1+j*0.25),mat)
    save('world_overview')

if __name__ == '__main__':
    if bpy.app.version[0] < 4:
        raise RuntimeError('Requires Blender 4.x or newer')
    bloomy()
    divergence()
    overview()
