# 盒模型

> 盒子模型，顾名思义，可以装东西的称为盒子，比如 `div`，`h`，`li` 等等。像 `img`，`input` 这种不能装东西的就不是盒子。

盒模型：分为

- 内容（content）
- 填充（padding）
- 边界（margin）
- 边框（border)

  :::tip
  内容又分为高(height)、宽(width)。
  div 高(height)默认为 auto，会由子元素的改好、宽(width)
  :::

## W3C 标准盒模型

```css
box-sizing: content-box;
```

### 特点

`width (height) = content` 不包含 border 和 padding

## IE 盒子模型

```css
box-sizing: border-box;
```

### 特点

`width (height) = content + padding + border`

### 适用场景

想让子元素按照百分比排列时，比如一行两个子元素各占 50%，用标准盒模型时增加 `padding | border` 时，第二个元素就会被挤到第二行， IE 盒模型就可以按照我们的想法排列

## 参考

- [掘金：【面试题解】CSS 盒子模型与 margin 负值](https://juejin.cn/post/7025880293013716999)
