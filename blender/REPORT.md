# B 流 Blender 资产管线报告

交付状态：脚本与契约已落地；资产生成和视觉验收 UNKNOWN。当前未找到 Blender，也未找到 gltf-transform 可执行程序。没有伪造 GLB、PNG 或性能数字。附件 PDF 未提供可读取文件，§10/§11 仅落实用户转述。

## 逐资产预算与证据

|资产|顶点数|三角数 / 上限|尺寸（米，Y-up）|贴图分辨率|GLB 大小 / 上限|状态|
|---|---|---|---|---|---|---|
|Bloomy 人形、独立双眼与偏移瞳孔|UNKNOWN|UNKNOWN / 20,000|UNKNOWN|生成器仅材质常数，无贴图；实产 UNKNOWN / 1024|UNKNOWN / 4 MB|UNKNOWN|
|裂谷（双岸实空间隙）|UNKNOWN|UNKNOWN，计入四地标合计|UNKNOWN|同上|计入分歧岛|UNKNOWN|
|分岔平台（主干、双支）|UNKNOWN|UNKNOWN，计入四地标合计|UNKNOWN|同上|计入分歧岛|UNKNOWN|
|相对平台（隔谷相对）|UNKNOWN|UNKNOWN，计入四地标合计|UNKNOWN|同上|计入分歧岛|UNKNOWN|
|连接装置（独立装置与桥段）|UNKNOWN|UNKNOWN，计入四地标合计|UNKNOWN|同上|计入分歧岛|UNKNOWN|
|分歧岛合计|UNKNOWN|UNKNOWN / 150,000|UNKNOWN|UNKNOWN / 1024|UNKNOWN / 4 MB|UNKNOWN|
|四岛世界总览|UNKNOWN|UNKNOWN / 100,000|UNKNOWN|同上|UNKNOWN / 3 MB|UNKNOWN|

MB 按十进制字节验收。桌面首场景目标 5 MB、上限 10 MB；同屏上限 500,000 三角：均 UNKNOWN，必须用实际加载集合复核，不能由脚本存在推定通过。验证脚本额外核对三份原始资产合计上限，但不代表集成场景性能验收。导出后逐节点数据在 evidence/*.metrics.json，包含顶点、三角、Y-up 尺寸与贴图信息。

## 烘焙路线决策

粗模阶段选择 **AO + 实时光照** 路线，当前先用无纹理材质常数；AO 尚未烘焙。原因是桥段、插槽交互对象需保持独立，后续可移动，实时光照便于统一首页与探索视角。AO 只承载遮蔽，避免把直接光、阴影和高光写进基础色。

完整烘焙作为低性能终端候选，需要确定灯光和静态几何、独立 UV 与烘焙贴图后进行画面对照；目前无设备或渲染证据，不宣称更快或更优。AO 路线也不算已验证。

## 色彩流程检查

- 基础色 / 发光颜色纹理：按 sRGB 输入验收；材质数值按线性值提供。当前生成器没有纹理：静态 VERIFIED，实际导出 UNKNOWN。
- AO / 粗糙度 / 金属度 / 法线等数据纹理：Non-Color，独立于基础色验收；当前未使用，实测 UNKNOWN。
- 贴图每边 ≤1024：导出器强制检查；实际资产 UNKNOWN。
- 三视图固定 Standard、曝光 0、gamma 1；浏览器对照需统一色彩转换及 tone mapping，由 S 流确认，当前 UNKNOWN。

## 绑定和执行

`public/assets/divergence_island.json` 为 PLANNED 契约，17 个稳定 ID；以 glTF 节点 extras.objectId 查找，nodeName 为校验字段。positionMeters 为世界坐标 Y-up，区域 halfExtentsMeters 为轴对齐半尺寸。摄像机锚点仅定义位置，朝向由 S 流根据目标设置。全部节点保持独立，禁止 join/weld/flatten。其余三岛名称尚无契约，overview 使用中性 slot 编号。

在有 Blender 4.2–4.5 与 gltf-transform CLI 的环境执行：

```powershell
& 'D:\AUA\guiyi-wt\wt-blender\blender\tools\run_pipeline.ps1' -Blender 'C:\path\to\blender.exe' -GltfTransform 'C:\path\to\gltf-transform.cmd'
```

管线依次生成 .blend、导出 GLB、回读核对、渲染前/侧/45°、inspect、Meshopt、再次 inspect、预算验证。压缩文件使用独立 `.meshopt.glb`；S 确认 Meshopt 解码及 17 个绑定保真后才切换默认资产。压缩执行、压缩后绑定和视觉验收当前 UNKNOWN。本次不安装依赖。

## 已执行验证

- Python AST、JSON 解析、17 个绑定 ID 与名称唯一性：VERIFIED。
- Schema 所用关键字的本地检查：见 evidence/verification.json；不是完整通用 JSON Schema 验证器。
- `npm.cmd --prefix D:\AUA\guiyi-wt\wt-blender run build -- --outDir blender/build-check`：VERIFIED，33 modules，零错误。输出限定在 blender/**。
- 未改运行时交互；浏览器核心链路及真实性能 UNKNOWN。
- AUA runtime 未发现显式环境绑定，本轮仅执行授权的本地 B 流工作，不声称后台协调 loop 已连接。

## 2026-09-17 ̽�ⲹ��
AU ��װ��־�ѷ��֣������� where.exe blender��5����ԣ��� C:\Program Files\Blender Foundation\ �̶�·����δ�ҵ� blender.exe��D:\AUA\logs\blender_install.err Ϊ 0 �ֽڣ���װ���δ�γɿ�ִ��·���������һ�� UNKNOWN ���ֱ��ֲ��䣬����α��ʵ������

## ʵ����Blender 5.2.1 LTS��
|�ʲ�|������|������|GLB��С|����ͼ|Ԥ��|
|---|---:|---:|---:|---|---|
|Bloomy|1,140|2,240|172,736 B|front/side/45 VERIFIED|��20,000 / ��4 MB VERIFIED|
|���絺�ĵر꼰�����ڵ�|104|156|22,716 B|front/side/45 VERIFIED|��150,000 / ��4 MB VERIFIED|
|�ĵ���������|210|1,016|85,428 B|front/side/45 VERIFIED|��100,000 / ��3 MB VERIFIED|
|�����ʲ��ϼ�|1,454|3,412|280,880 B|������|ͬ����500,000���׳�����5 MB VERIFIED|
���������� GLB ����Ƕ����ͼ����1024 ��� VERIFIED����λ�ס�Y-up�������ض��ߴ� VERIFIED��
gltf-transform inspect �� Meshopt��UNKNOWN���ѳ��� npx @gltf-transform/cli inspect���� npm ִ��δ�γɿ��� CLI ������������npx --yes @gltf-transform/cli inspect public/assets/bloomy.glb��npx --yes @gltf-transform/cli meshopt public/assets/bloomy.glb public/assets/bloomy.meshopt.glb��

## �����տ�ʵ�⣨2026-09-17��
���ڸ����ĵ�ǰ����ʷ UNKNOWN ��¼���Ա��ں� evidence/ Ϊ׼��
|�ʲ�|Blender vertices|Blender triangles|ԭʼ GLB|Meshopt GLB|Meshopt|Ԥ��|
|---|---:|---:|---:|---:|---|---|
|Bloomy|1,140|2,240|172,736 B|44,188 B|VERIFIED|��20,000 tris����4 MB|
|���絺|104|156|22,716 B|11,232 B|VERIFIED|��150,000 tris����4 MB|
|�ĵ���������|536|1,016|85,428 B|27,272 B|VERIFIED|��100,000 tris����3 MB|
|�׳������ʲ��ϼ�|1,780|3,412|280,880 B|82,692 B|VERIFIED|��500,000 tris����5 MBĿ��|
gltf-transform CLI 4.5.0 inspect������ԭʼ GLB ������ Meshopt GLB �������� inspect �ı�֤�ݣ����ʱ������������ͳ�Ƽ� blender/evidence/*.inspect.txt �� *.meshopt.inspect.txt��
Meshopt ѹ������ GLB �ɶ���ѹ�����ܴ�С 82,692 B��ѹ���ʲ�Ϊ���� .meshopt.glb��Ĭ�ϰ��ʲ��Ա���ԭʼ GLB������ S ��ȷ�Ͻ����� objectId ���л���
������֤��Blender 5.2.1 LTS export_glb �ض� VERIFIED��9 ������ͼ PNG VERIFIED��Ԥ����֤ VERIFIED��npm.cmd run build VERIFIED��
