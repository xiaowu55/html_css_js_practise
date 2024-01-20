# double-click-heart

实现在指定区域内双击，弹出小红心

## 技术实现

通过两次时间戳之差小于一个阈值来判断是否是双击
```js
loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

```