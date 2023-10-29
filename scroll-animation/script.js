const boxes = document.querySelectorAll('.box'); // 选择所有具有类名 '.box' 的元素并存储在 'boxes' 中

// 当页面滚动时触发 'checkBoxes' 函数
window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4; // 计算触发点位置，通常是窗口高度的四分之四

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; // 获取每个 '.box' 元素距离视窗顶部的距离

        if (boxTop < triggerBottom) {
            box.classList.add('show'); // 如果元素进入视窗的四分之一，添加 'show' 类
        } else {
            box.classList.remove('show'); // 如果元素不在视窗四分之一内，移除 'show' 类
        }
    });
}
