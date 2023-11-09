# incrementing-counter
目的是实现一个增加的动画

## 核心原理
1. 通过在标签中设置属性，之后用getAttribute来获取
2. Math.ceil()配合向上舍入的方式增加
3. 没达到target之前都用定时器递归

## 具体实现
```js
const counters = document.querySelectorAll('.counter')

counters.forEach(counter=>{
    counter.innerText = '0'
    const updateCounter = ()=>{
        const target = +counter.getAttribute('data-target')
        const c =  +counter.innerText

        const increment = target/200
        if(c<target){
            counter.innerText = `${Math.ceil(c+increment)}`
            setTimeout(updateCounter,1)
        }else{
            counter.innerText = target
        }
    }

    updateCounter()
})
```