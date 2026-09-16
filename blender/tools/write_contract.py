"""Generate the versioned bind_scene contract without Blender."""
import json
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]

def write(path, value):
    path.write_text(json.dumps(value,ensure_ascii=False,indent=2)+'\n', encoding='utf-8')

def main():
    vector={'type':'array','items':{'type':'number'},'minItems':3,'maxItems':3}
    schema={
      '$schema':'https://json-schema.org/draft/2020-12/schema',
      'title':'Guiyi level binding manifest v1','type':'object','additionalProperties':False,
      'required':['schemaVersion','levelId','asset','units','upAxis','status','bindings'],
      'properties':{
        'schemaVersion':{'const':'1.0.0'},'levelId':{'type':'string','minLength':1},
        'asset':{'type':'string','pattern':r'^/assets/[A-Za-z0-9_.-]+.glb$'},
        'units':{'const':'meters'},'upAxis':{'const':'Y'},
        'status':{'enum':['PLANNED','VERIFIED']},
        'bindings':{'type':'array','minItems':1,'items':{
          'type':'object','additionalProperties':False,
          'required':['objectId','nodeName','kind','positionMeters','interaction'],
          'properties':{
            'objectId':{'type':'string','pattern':r'^gy.[a-z0-9_.]+$'},
            'nodeName':{'type':'string','pattern':'^(ANCHOR_CAM_(WORLD|ISLAND|PUZZLE)|SLOT_(description|dependency|generalization)|BRIDGE_SEG_[0-9]+|ZONE_[A-Za-z0-9_]+|SPAWN_player|SOUND_[A-Za-z0-9_]+)$'},
            'kind':{'enum':['camera','slot','bridge','zone','spawn','sound']},
            'positionMeters':vector,'interaction':{'type':'boolean'},
            'halfExtentsMeters':vector
          }
        }}
      }
    }
    positions={
      'ANCHOR_CAM_WORLD':[12,14,16],'ANCHOR_CAM_ISLAND':[9,10,12],
      'ANCHOR_CAM_PUZZLE':[5,4,6],'SLOT_description':[-3,0.5,2],
      'SLOT_dependency':[3,1.1,2],'SLOT_generalization':[2,0.7,-2],
      'ZONE_rift':[0,0,0],'ZONE_fork':[-3,0.5,1],
      'ZONE_opposed':[0,0.5,-2],'ZONE_connector':[3,0.5,2],
      'SPAWN_player':[-4,0.5,3],'SOUND_ambient':[0,2,0]
    }
    positions.update({f'BRIDGE_SEG_{i}':[-1+i*0.5,0.6,-2] for i in range(5)})
    kinds={'ANCHOR':'camera','SLOT':'slot','ZONE':'zone','SPAWN':'spawn','SOUND':'sound','BRIDGE':'bridge'}
    bindings=[]
    for name,pos in positions.items():
        kind=kinds[name.split('_')[0]]
        item={'objectId':'gy.divergence.'+name.lower(),'nodeName':name,'kind':kind,'positionMeters':pos,'interaction':kind in {'slot','bridge'}}
        if kind=='zone':
            item['halfExtentsMeters']={'ZONE_rift':[1,1,4],'ZONE_fork':[1.5,1,2],'ZONE_opposed':[3,1,1.5],'ZONE_connector':[1,1,1]}[name]
        bindings.append(item)
    write(ROOT/'blender/level_manifest.schema.json',schema)
    write(ROOT/'public/assets/divergence_island.json',{'schemaVersion':'1.0.0','levelId':'divergence','asset':'/assets/divergence_island.glb','units':'meters','upAxis':'Y','status':'PLANNED','bindings':bindings})

if __name__ == '__main__':
    main()
