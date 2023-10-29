# scroll-animation
目的是实现滚动时候触发动画

## 实现原理
1. 确定元素触发的位置
2. 对boxes里的每个NodeList进行判断，如果元素进入视窗的四分之一，添加 'show' 类
3. transformX()函数表示在二维平面上水平方向移动元素
4. nth-of-type()相对于同样的元素的位置



## 核心
将NodeList使用getBoundingClientRect().top来获得该节点在视窗中的位置，最后添加css样式