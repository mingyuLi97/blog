# CSS3 硬件加速(GPU 加速)

CSS3 硬件加速又叫做 GPU 加速，是利用 GPU 进行渲染，减少 CPU 操作的一种优化方案。

![](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202304212219562.png)

## DOM Tree

DOM 是抽象的文档对象模型，它可以将文档中的元素都看作一个对象，并且可以通过 js 控制。
DOM Tree 是由一系列 DOM 元素构成，每个 DOM 都代表文档中的一个节点。

## RenderObject

RenderObject 是根据 DOM 树、CSS 树和其他信息共同生成的渲染树中的节点，用于表示网页中的可渲染对象。

## RenderLayer

- RenderLayer 主要是为了解决层叠上下文、透明元素的问题。
- 每个 RenderObject 都直接或通过祖先 RenderObject 间接与 RenderLayer 相关联。
- RenderLayer 可以理解为一个渲染图层，渲染就是将一个个 RenderObject 绘制到这个图层。这个过程可以使用 CPU 绘制，**这就是软件绘图**。但是软件绘图是无法处理 3D 的绘图上下文，每一层的 RenderObject 中都不能包含使用 3D 绘图的节点，例如有 3D Context 的 Canvas 节点，也不能支持 CSS 3D 变化属性。此外，页面动画中，每次元素尺寸或者位置变动，都要重新去构造 RenderLayer 树，触发 Layout 及其后续的渲染流水线。这样会导致页面帧率的下降，造成视觉上的卡顿。所以现代浏览器引入了由 GPU 完成的**硬件加速绘图**。

## Graphics Layer（Compositing Layer）- 合成层

如果每一个 RenderLayer 都交由 GPU 渲染，那么会浪费内存资源，为了解决这个问题 Webkit 将一些 RenderLayer 组合在一起形成一个新层（合成层）

#### 如何触发硬件加速

一些 CSS 属性

- 3D transform
- backface-visibility 为 hidden
- 对 opacity、transform、fliter、backdropfilter 应用了 animation 或者 transition
  - 📝 需要是 active 的 animation 或者 transition，当 animation 或者 transition 效果未开始或结束后，提升合成层也会失效
- will-change 设置为 opacity、transform、top、left、bottom、right
  - 📝 其中 top、left 等需要设置明确的定位属性，如 relative 等

[合成层条件（全）](https://fed.taobao.org/blog/taofed/do71ct/performance-composite/)

#### 提升为合成层好处

- 合成层的位图，会交由 GPU 合成，比 CPU 处理要快
- 当需要 repaint 时，只需要 repaint 本身，不会影响到其他的层
- 对于 transform 和 opacity 效果，不会触发 layout 和 paint

## 参考

- https://segmentfault.com/a/1190000041295744
- https://www.chromium.org/developers/design-documents/gpu-accelerated-compositing-in-chrome/
- https://fed.taobao.org/blog/taofed/do71ct/performance-composite/
