# progress-steps
目的是实现有意思的表单,海浪效果

## 实现原理
1. transition-delay:${idx * 50}ms
2. 配合transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);实现


## 核心
CanvasRenderingContext2D.bezierCurveTo() 是 Canvas 2D API 绘制三次贝赛尔曲线路径的方法。该方法需要三个点。第一、第二个点是控制点，第三个点是结束点。起始点是当前路径的最后一个点，绘制贝赛尔曲线前，可以通过调用 moveTo() 进行修改。