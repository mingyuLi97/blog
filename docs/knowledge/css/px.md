# 移动端布局单位

## em

em 是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。

em 特点：em 的值并不是固定的；em 会继承父级元素的字体大小。

## rem

rem 是 CSS3 新增的一个相对单位（root em，根 em）。这个单位与 em 的区别在于 rem **相对的是 HTML 根元素**。这个单位可谓集相对大小和绝对大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。

#### 原理

rem 是相对长度单位，相对 html 元素（文档根元素 `document.documentElement`）计算值的倍数。根据屏幕的宽度设置 html 标签的 font-size，在布局时使用 rem 单位，达到自适应的目的，是弹性布局的一种实现方式。

```javascript
// 为了方便计算，我们一般设置 1rem == 100px
function rem(params) {
  var width = document.documentElement.clientWidth || window.innerWidth;
  // 设计稿为 750
  if (width > 750) {
    width = 750;
  }
  // 将页面分成 7.5 份，每一份就是 fontSize
  var h = width / 7.5;
  document.querySelector('html').style.fontSize = h + 'px';
}
```

#### rem to px

```javascript
function remToPx(rem) {
  const fontSize = parseInt(document.querySelector('html').style.fontSize);
  return rem * fontSize;
}
```

#### 优点

1. 自适应效果好。
2. 兼容性好，除了 IE8 及更早版本外，所有浏览器均已支持 rem。

#### 缺点：

1. 不是纯 css 移动适配方案，需要引入 js 脚本，监听浏览器窗口缩放行为动态改变根元素的字体大小。css 样式和 js 代码有一定耦合性，并且必须将改变 font-size 的代码放在 css 样式之前。
2. 小数像素问题，浏览器渲染最小的单位是像素，元素根据屏幕宽度自适应，通过 rem 计算后可能会出现小数像素，浏览器会对这部分小数四舍五入，按照整数渲染。浏览器在渲染时所做的摄入处理只是应用在元素的尺寸渲染上，其真实占据的空间依旧是原始大小。也就是说如果一个元素尺寸是 0.625px，那么其渲染尺寸应该是 1px，空出的 0.375px 空间由其临近的元素填充；同样道理，如果一个元素尺寸是 0.375px，其渲染尺寸就应该是 0，但是其会占据临近元素 0.375px 的空间。会导致：缩放到低于 1px 的元素时隐时现（解决办法：指定最小转换像素，对于比较小的像素，不转换为 rem 或 vw）；两个同样宽度的元素因为各自周围的元素宽度不同，导致两元素相差 1px；宽高相同的正方形，长宽不等了；border-radius: 50% 画的圆不圆。

## vw/vh 方案

视口是浏览器中用于呈现网页的区域，也就是用户所能看到的页面区域。

- 1vw，等于视口宽度的 1%；
- 1vh，等于视口高度的 1%；
- vmin，选取 vw 和 vh 中最小的那个值；
- vmax，选取 vw 和 vh 中最大的那个值；

:::tip
可以通过 [插件：postcss-px-to-viewport](https://www.npmjs.com/package/postcss-px-to-viewport) 自动将 px 转换成 vw/vh
:::

#### 优点：

1. 纯 css 移动端适配方案，不存在脚本依赖的问题；
2. 根据视口宽度的百分比来定义元素宽度，计算方便；

#### 缺点：

存在兼容问题，只在移动端 iOS 8 以上以及 Android 4.4 以上获得支持；
