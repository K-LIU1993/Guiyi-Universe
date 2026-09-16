# S-M2 Stage

Stage 是六幕流的表现层接线，不自带路由。

## U-APP 挂载约定

- U-APP 负责路由、页面容器和宿主生命周期。
- U-APP 在需要显示分歧岛时挂载 src/game/stage/index.js 暴露的 stage 入口。
- Stage 只通过 createStage(input, deps) 创建运行时；交互统一调用 runtime.dispatch(action)。
- 外部组件只读 runtime.getState() 返回的 SaveDocument，不得直接写存档字段。
- subscribe(listener) 用于事件驱动的镜头、HUD 和动画表现；表现状态不得写入存档。
- 入口不假设 URL 路由，也不改变宿主的历史记录。

存档键固定为 guiyi.divergence-island.save.v1。素材缺位时由表现层使用几何占位体。
