# animated-navigation
实现一个导航栏动画

## 实现原理
1. 首先，使用CSS定义了一个基本的全局样式，包括元素盒模型的样式（box-sizing）、背景颜色和渐变、字体样式等。
2. 定义了一个名为nav的类，它代表了导航栏的样式。它有背景颜色、内边距、宽度、显示、对齐和边框等属性。此外，还定义了一个过渡效果（transition）用于后续的动画效果。
3. 当nav类被添加了active类时，它的宽度会从80px变为350px，同时其子列表（ul）的宽度也会从0变为100%。列表中的每一项（li）会从不可见变为可见，并旋转360度。
4. 在nav类的子列表中，每个列表项（li）最初都是不可见的（opacity为0），并且是旋转的（transform为rotateY(0deg)]）。当nav类被添加了active类时，这些列表项会变为完全可见（opacity为1）并旋转360度（rotateY(360deg)]）。
在nav类中还定义了一些链接（a）和图标的样式。图标（icon）是一个可点击的元素，其包含的线条（line）元素会在点击时旋转。
所有的这些动画效果都是由CSS的过渡和转换属性实现的，这些属性可以创建平滑的动画效果。