# movie-app
实现一个电影网站

1. 鼠标悬浮在影片上面时显示具体信息
2. 实现搜索功能

## 实现原理

1. 实现隐藏显示具体信息功能,`transform:translateY(101%)`
2. 显示`transform: translateY(0);`
3. 搜索就是用js来过滤

## 核心实现
```css
.overview {
  background-color: #fff;
  padding: 2rem;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  max-height: 100%;
  transform: translateY(101%);
  overflow-y: auto;
  transition: transform 0.3s ease-in;
}

.movie:hover .overview {
  transform: translateY(0);
}

```