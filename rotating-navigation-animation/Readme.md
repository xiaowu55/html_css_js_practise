# Rotating Navigation Animation
目的是实现一个旋转的导航动画

## 实现原理
1. 让container绕左上角旋转

## 核心代码
.container {
    background-color: #fafafa;
    /* transform-origin CSS 属性让你更改一个元素变形的原点。 */
    transform-origin: top left;
    transition: transform 0.5s linear;
    width: 100vw;
    min-height: 100vh;
    padding: 50px;
}

.container.show-nav {
    /* 旋转*/
    transform: rotate(-20deg);
}

+相邻选择器