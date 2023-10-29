# split landing

实现鼠标移到上面的时候页面扩张，有点像expanding-cars的效果

## 实现原理

1. 使用事件监听，添加事件mouseenter和mouseleave，分别为元素添加鼠标悬置的classList
2. 父relative两个字absolute，一个left：0一个right：0构建二分页面
3. .split.left::before 和 .split.right::before 伪元素创建了半透明的背景覆盖。
4. .hover-left 和 .hover-right 用于在鼠标悬停时触发动画效果，分别控制左侧和右侧部分的宽度变化。

## 核心代码

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

'''CSS

.split {
    position: absolute;
    width: 50%;
    height: 100%;
    overflow: hidden;
}

.split.left {
    left: 0;
    background: url('ps.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

.split.left::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--left-bg-color);
}
.split.right,
.split.left,
.split.right::before,
.split.left::before {
    transition: all var(--speed) ease-in-out;
}

.hover-left .left {
    width: var(--hover-width);
}

.hover-left .right {
    width: var(--other-width);
}
'''
