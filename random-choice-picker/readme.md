# random-choice-picker
目的在于学会通过输入框动态渲染

## 实现原理
1. 利用textarea输入，然后通过split分隔成数组
2. createElement创建span
3. 通过SetInterval来间隔选取和高亮元素,过后再取消高亮
4. 最后一个就是结果

## 具体实现

通过SetInterval来间隔选取和高亮元素

```js
function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        if (randomTag !== undefined) {
            highlightTag(randomTag)

            setTimeout(() => {
                unHighlightTag(randomTag)
            }, 100)
        }
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

```