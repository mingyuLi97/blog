# block、inline 和 inline-block 概念和区别

## block - 块级元素

- 独占一行（元素的前后有换行符）,块级元素会占据其父元素的所有可用宽度（水平方向），并且垂直方向上会自动撑满所包含内容的高度。
- 可以设置宽度、高度和 margin/padding/border

`div` `ul` `p`

## inline - 行内元素

- 和其他元素都在一行上，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化。
- 不能设置宽高，不能设置 margin（top/bottom）

`span` `a` `img`

:::tip
img 是一个很特殊的行内元素（[可替换元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img)）
它的默认分辨率是由被嵌入的图片的原始宽高来确定的，使得它就像 inline-block 一样，我们可以设置其宽高
:::

## inline-block 行内块元素

- 元素显示为内联块级元素，元素会在**同一行**内，并且可以设置宽度、高度和 margin/padding/border

`button` `select`

## 浏览器中 img 和 div 中间会有间隙 是什么原因

img 是行内元素，而行内元素默认会在元素之间留有空白字符（比如空格、换行符等）。

解决方案：

1. 图片的 display 设置 `block` 或者 `flex`
2. 父元素设置 `font-size: 0`
