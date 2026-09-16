"""Static contract checks and optional real export budget checks. No dependencies."""
import ast
import json
import re
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]

def validate(value, schema):
    types={'object':dict,'array':list,'string':str,'number':(int,float),'boolean':bool}
    if 'type' in schema:
        assert isinstance(value,types[schema['type']]), ('type',value)
    if 'const' in schema:
        assert value==schema['const']
    if 'enum' in schema:
        assert value in schema['enum']
    if isinstance(value,dict):
        assert set(schema.get('required',[])) <= value.keys()
        if schema.get('additionalProperties') is False:
            assert value.keys() <= schema.get('properties',{}).keys()
        for k,v in value.items():
            if k in schema.get('properties',{}):
                validate(v,schema['properties'][k])
    if isinstance(value,list):
        assert len(value)>=schema.get('minItems',0)
        assert len(value)<=schema.get('maxItems',len(value))
        for item in value:
            validate(item,schema.get('items',{}))
    if isinstance(value,str):
        assert len(value)>=schema.get('minLength',0)
        if 'pattern' in schema:
            assert re.search(schema['pattern'],value),value

def main():
    for file in (ROOT/'blender/tools').glob('*.py'):
        ast.parse(file.read_text(encoding='utf-8'))
    schema=json.loads((ROOT/'blender/level_manifest.schema.json').read_text(encoding='utf-8'))
    manifest=json.loads((ROOT/'public/assets/divergence_island.json').read_text(encoding='utf-8'))
    validate(manifest,schema)
    for field in ['objectId','nodeName']:
        assert len({b[field] for b in manifest['bindings']})==len(manifest['bindings'])
    result={'static':'VERIFIED','schemaCheck':'all keywords used by local schema; not a general JSON Schema implementation','assets':{}}
    total_triangles=total_bytes=0
    for name,limit,size in [('bloomy',20000,4000000),('divergence_island',150000,4000000),('world_overview',100000,3000000)]:
        metrics=ROOT/f'blender/evidence/{name}.metrics.json'
        if not metrics.exists():
            result['assets'][name]={'status':'UNKNOWN','reason':'Blender export not executed'}
            continue
        data=json.loads(metrics.read_text(encoding='utf-8'))
        triangles=sum(n.get('triangles',0) for n in data['nodes'])
        actual_size=(ROOT/f'public/assets/{name}.glb').stat().st_size
        assert triangles<=limit and actual_size<=size
        assert all(max(t['resolution'])<=1024 for t in data['textures'])
        if name=='divergence_island':
            nodes={n['objectId']:n for n in data['nodes']}
            for binding in manifest['bindings']:
                node=nodes[binding['objectId']]
                assert node['nodeName']==binding['nodeName']
                assert all(abs(a-b)<0.001 for a,b in zip(node['positionMetersYUp'],binding['positionMeters']))
        total_triangles+=triangles
        total_bytes+=actual_size
        result['assets'][name]={'status':'VERIFIED','triangles':triangles,'bytes':actual_size}
    if all(a['status']=='VERIFIED' for a in result['assets'].values()):
        assert total_triangles<=500000 and total_bytes<=10000000
        result['aggregate']={'triangles':total_triangles,'bytes':total_bytes,'under5MB':total_bytes<=5000000}
    target=ROOT/'blender/evidence/verification.json'
    target.write_text(json.dumps(result,indent=2)+'\n',encoding='utf-8')
    print(json.dumps(result,indent=2))

if __name__=='__main__':
    main()
