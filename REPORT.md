# B 流资产报告

## 实测资产

| GLB | 顶点数 | 三角数 | 文件字节数 | 数据来源 |
|---|---:|---:|---:|---|
| bloomy.glb | 4,800 | 2,240 | 172,736 | GLB JSON header + blender/evidence/bloomy.metrics.json |
| world_overview.glb | 2,160 | 1,016 | 85,428 | GLB JSON header + blender/evidence/world_overview.metrics.json |
| divergence_island.glb | 312 | 156 | 22,716 | GLB JSON header + blender/evidence/divergence_island.metrics.json |

以上顶点数为导出 GLB JSON 头中的 POSITION accessor 汇总；Blender 源网格顶点汇总分别为 bloomy 1,140、world_overview 536、divergence_island 104。三角数和字节数为已生成资产的实测值。Blender 回读、米制单位、Y-up 转换和尺寸核对：VERIFIED。

## gltf-transform inspect

已执行并保存：blender/evidence/*.inspect.txt 及对应的 .meshopt.inspect.txt 文件。

可复现命令：

    npx --yes @gltf-transform/cli inspect public/assets/bloomy.glb
    npx --yes @gltf-transform/cli inspect public/assets/world_overview.glb
    npx --yes @gltf-transform/cli inspect public/assets/divergence_island.glb

inspect 统计显示：Bloomy 10 个 mesh primitive、每个 224 triangles；分歧岛 13 个 mesh primitive、每个 12 triangles；四岛总览 14 个 mesh primitive，其中 4 个球体 primitive 各 224 triangles、10 个立方体 primitive 各 12 triangles。材质表已写入 inspect 证据。

## Meshopt

| 压缩资产 | 文件字节数 | 状态 |
|---|---:|---|
| bloomy.meshopt.glb | 44,188 | VERIFIED |
| world_overview.meshopt.glb | 27,272 | VERIFIED |
| divergence_island.meshopt.glb | 11,232 | VERIFIED |

可复现命令：

    npx --yes @gltf-transform/cli meshopt public/assets/bloomy.glb public/assets/bloomy.meshopt.glb
    npx --yes @gltf-transform/cli meshopt public/assets/world_overview.glb public/assets/world_overview.meshopt.glb
    npx --yes @gltf-transform/cli meshopt public/assets/divergence_island.glb public/assets/divergence_island.meshopt.glb

## 预算

- Bloomy：2,240 / 20,000 triangles，172,736 / 4,000,000 B，VERIFIED。
- 分歧岛：156 / 150,000 triangles，22,716 / 4,000,000 B，VERIFIED。
- 四岛总览：1,016 / 100,000 triangles，85,428 / 3,000,000 B，VERIFIED。
- 三资产合计：3,412 triangles，280,880 B；同屏 500,000 triangles 与首场景 5 MB 目标，VERIFIED。

取数脚本：blender/tools/verify_pipeline.py；Blender 版本：5.2.1 LTS。


## JSON 头复核
可复现方法：使用 Node.js 读取 GLB 20 字节 JSON chunk，汇总 meshes[].primitives[].attributes.POSITION accessor.count，并汇总 indices accessor.count / 3。
复核结果：bloomy.glb 4,800 vertices / 2,240 triangles / 172,736 B；world_overview.glb 2,160 / 1,016 / 85,428 B；divergence_island.glb 312 / 156 / 22,716 B。
