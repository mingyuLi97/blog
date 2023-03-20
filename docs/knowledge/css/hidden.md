# 元素的隐藏

| 隐藏方式             |  性能  | 是否占据空间 | 能否触发事件 |
| :------------------- | :----: | :----------: | :----------: |
| `display: none`      |  回流  |      否      |      否      |
| `visibility: hidden` |  重绘  |      是      |      否      |
| `opacity: 0`         | 不一定 |      是      |      是      |

:::tip
`visibility : hidden` 不会覆盖子元素 `visibility : visible`
:::

## 合成层

页面的绘制并不一定为在内存中的单层画面绘制，有时浏览器会将一帧画面绘制为多层画面，然后将若干层画面合并成一张图片显示到屏幕上。
将页面分层可以更好的区分开页面中静态部分和动态部分的绘制。

在 Blink 和 WebKit 内核的浏览器中，具有 transition 或 animation 的 opacity 元素，渲染层被提升为合成层。
translateZ(0) 或 translate3d(0,0,0)可以人为强制创建合成层。

**而元素提升为合成层后，transform 和 opacity 不会触发 重绘制。如果不是合成层，则会触发重绘。**

因为透明度改变后，GPU 在绘制页面时可以改变之前画好的页面的透明值，而无需整体的重绘。
但是这个被修改的 opacity 必须为一个单独的图层，否则图层中的其他节点也会被重绘。

## 参考

- https://blog.csdn.net/xx_yan/article/details/105182572
