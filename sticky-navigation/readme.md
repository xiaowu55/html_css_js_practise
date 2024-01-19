# sticky-navigation

实现固定导航栏，并切换非顶部样式

## 技术实现

固定导航栏使用css实现
```css
.nav {
  position: fixed;
  background-color: #222;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
}
```
，样式改变通过监听scroll事件，在函数中处理滚动的距离与导航栏高度的关系

