# kinetic loader

实现一个加载动画

## 实现原理

通过css关键帧实现


## 例子

```css

@keyframes rotateA {

    0%,
    25% {
        transform: rotate(0deg);
    }

    50%,
    75% {
        transform: rotate(180deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes rotateB {

    0%,
    25% {
        transform: rotate(90deg);
    }

    50%,
    75% {
        transform: rotate(270deg);
    }

    100% {
        transform: rotate(450deg);
    }
}
```