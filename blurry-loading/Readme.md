# blurry-loading
实现一个模糊加载

## 实现原理
1. 用JS中的setInterval来做数字的累加
2. 制作一个转换范围的函数将setInterval改变的数改为blur范围
3. filterfilter属性是用于在HTML元素上应用图像效果的属性。它允许你通过不同的滤镜函数来修改元素的视觉呈现。一些常见的滤镜函数包括：
   1. blur()： 通过模糊元素来创建高斯模糊效果。可以指定模糊的半径，半径越大，模糊效果越明显。
   2. brightness()： 调整元素的亮度，值小于1会使元素变暗，大于1会使元素变亮。
   3. contrast()： 调整元素的对比度，值小于1会减少对比度，大于1会增加对比度。
   4. grayscale()： 将元素转为灰度图像，值为0表示原始颜色，值为1表示完全灰度。
   5. sepia()： 将元素转为深褐色，值为0表示原始颜色，值为1表示完全深褐色。
   6. saturate()： 调整元素的饱和度，值小于1会使元素变得更加灰色，大于1会增加饱和度。
   7. invert()： 反转元素的颜色，值为0表示原始颜色，值为1表示完全反转。
   8. opacity()： 调整元素的透明度，值小于1会使元素变得更透明，大于1会增加不透明度。

## 核心代码
用于转换范围的代码

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}