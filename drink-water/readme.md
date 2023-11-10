# drink-water
实现一个喝水计划

1. 动画效果
2. 点击后面的前面的也会被选中

## 实现原理

1. 首先理解css部分，大杯子里面水的百分比是使用两个盒子来设定

## 核心实现
```js

function highlightCups(idx) {
    /* 
        下面这个if实现了最后一杯也可以取消
        else if实现了再次点击可以取消的功能

        nextElementSibling 返回当前元素在其父元素的子元素节点中的后一个元素节点，
        如果该元素已经是最后一个元素节点，则返回 null, 该属性是只读的。
    */
    if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {    // 在被点击之前的都添加full
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}

```