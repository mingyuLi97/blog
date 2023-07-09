# BFC

> bfc 是一个独立的空间，不会影响外面的布局 也不会被外面所影响

## 解决了什么问题

1.  使用 `float` 布局脱离文档流，高度塌陷
2.  `margin` 边距合并
3.  自适应多栏布局

## 如何触发

1. 元素的 `overflow` 属性不为 `visible`（例如 `auto`、`hidden`、`scroll`）。
2. 使用 `float` 属性将元素浮动。
3. 元素的 `position` 为 `absolute` 或 `fixed`
4. 元素的 `display` 为 `inline-block`、`table-cell`、`table-caption`、`flex`、`grid` 等。

<!-- ![](htt在元素上应用display属性的值为inline-block、table-cell、table-caption、flex、grid等。ps://limy-1309594960.cos.ap-beijing.myqcloud.com/bfc.jpeg) -->
