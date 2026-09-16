param(
    [Parameter(Mandatory=$true)][string]$Blender,
    [string]$GltfTransform = 'gltf-transform'
)
$ErrorActionPreference = 'Stop'
$root = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
$evidence = Join-Path $root 'blender/evidence'
New-Item -ItemType Directory -Force $evidence | Out-Null
function Run-Checked([string]$Program, [string[]]$Arguments, [string]$Log) {
    & $Program @Arguments 2>&1 | Tee-Object -FilePath $Log
    if ($LASTEXITCODE -ne 0) { throw "Command failed: $Program ($LASTEXITCODE)" }
}
Run-Checked $Blender @('--background','--python-exit-code','1','--python', (Join-Path $PSScriptRoot 'build_blockouts.py')) (Join-Path $evidence 'generate.log')
foreach ($name in @('bloomy','divergence_island','world_overview')) {
    $source = Join-Path $root "blender/sources/$name.blend"
    $raw = Join-Path $root "public/assets/$name.glb"
    $compressed = Join-Path $root "public/assets/$name.meshopt.glb"
    Run-Checked $Blender @('--background','--python-exit-code','1','--python',(Join-Path $PSScriptRoot 'export_glb.py'),'--','--input',$source,'--out',$raw,'--manifest',(Join-Path $evidence "$name.metrics.json")) (Join-Path $evidence "$name.export.log")
    Run-Checked $Blender @('--background','--python-exit-code','1','--python',(Join-Path $PSScriptRoot 'render_check.py'),'--','--input',$raw) (Join-Path $evidence "$name.render.log")
    Run-Checked $GltfTransform @('inspect',$raw) (Join-Path $evidence "$name.inspect.txt")
    Run-Checked $GltfTransform @('meshopt',$raw,$compressed) (Join-Path $evidence "$name.meshopt.txt")
    Run-Checked $GltfTransform @('inspect',$compressed) (Join-Path $evidence "$name.meshopt.inspect.txt")
}
# Keep raw assets as the binding default until S verifies Meshopt decoding.
Run-Checked 'python' @((Join-Path $PSScriptRoot 'verify_pipeline.py')) (Join-Path $evidence 'verification.log')
