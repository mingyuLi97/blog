# 渲染流程

## 浏览器中输入 `URL` 到页面返回的全过程 <br/>

1. [DNS 域名解析](/knowledge/network/dns.md#解析过程)
2. 拿到解析的 IP 地址，建立 [TCP](/knowledge/network/tcp-udp.html#tcp) 连接
3. 向 IP 地址发送 [HTTP](/knowledge/network/http.html) 请求
4. 服务器处理请求
5. [返回响应结果](../network/http-code.md)
6. 关闭 TCP 连接
7. [浏览器解析 HTML](#浏览器解析-html)
8. 浏览器布局渲染

![](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202210121040167.png)

## 浏览器解析 HTML

1. 浏览器首先下载该地址所对应的 html 页面。
2. 浏览器解析 html 页面的 DOM 结构。
3. 开启下载线程对文档中的所有资源按优先级排序下载。
4. 主线程继续解析文档，到达 head 节点 ，head 里的外部资源无非是外链样式表和外链 js。
   - js 外链，则停止解析后续内容，等待该资源下载，下载完后立刻执行。
   - css 外链，继续解析后续内容。
5. [DOM 解析](#dom-解析)
6. 文档解析完毕，页面重新渲染。当页面引用的所有 js 同步代码执行完毕，触发 DOMContentLoaded 事件。
7. html 文档中的图片资源，js 代码中有异步加载的 css、js 、图片资源都加载完毕之后，load 事件触发。

:::tip
`DOMContentLoaded`：始的 HTML 文档被完全加载和解析完成之后，该事件被触发，而无需等待样式表、图像和子框架的完成加载。

`load`：整个页面及所有依赖资源如样式表和图片都已完成加载时触发。
:::

#### DOM 解析

1. css 不会影响 DOM 解析，但会影响页面渲染。

- 外链 css 加载完之前，页面还是白屏。
- js 之前的外链 css 未加载完之前，页面是不会被渲染的

:::tip why
如果不阻塞页面渲染，就会先出现一种样式，加载完又变为另一个样子，用户体验差，而且渲染成本是很高的。
:::

2. js 会阻塞 dom 解析和渲染

3. 浏览器遇到 `<script>` 且没有 `defer` 或 `async` 属性的 标签时，会触发页面渲染，因而如果前面 CSS 资源尚未加载完毕时，浏览器会等待它加载完毕在执行脚本（css 会影响 js 执行）。

:::tip why
如果 js 里面有获取样式相关的方法，样式不提前加载完成，获取的将会有问题
:::

::: details 测试 DOM 解析代码

```html
<body>
  <!-- 白屏 -->
  <div id="div1"></div>
  <!-- 白屏 -->
  <link rel="stylesheet" href="./c1.css" />
  <!-- 白屏 -->
  <link rel="stylesheet" href="./c3.css" />
  <!-- 如果此时 j1.js 尚未下载到本地，则首次渲染，此时的 DOM 树 只有 div1 ，所以页面上只会显示 div1，样式是 c1.css 和 c3.css 的并集。-->
  <!-- 如果此时 j1.js 已经下载到本地，则先执行 j1.js，页面不会渲染，所以此时仍然是白屏。-->
  <!--下面的 js 阻塞了 DOM 树的构建，所以下面的 div2 没有在文档的 DOM 树中。 -->
  <script src="http://test.com:9000/mine/load/case2/j1.js
  "></script>
  <!-- j1.js 执行完毕，继续 DOM 解析，div2 被构建在文档 DOM 树中，此时页面上有了div2 元素，样式仍然是 c1.css 和 c3.css 的并集 -->
  <link rel="stylesheet" href="./c4.css" />
  <!-- c4.css 加载完毕，重新构建render树，样式变成了 c1.css、c3.css 和 c4.css 的并集 -->
  <div id="div2"></div>
  <script>
    // 利用 performance 统计 load 加载时间。
    window.onload = function () {
      console.log(
        performance.timing.loadEventStart - performance.timing.fetchStart
      );
    };
  </script>
</body>
```

:::

#### defer - async

![](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202208271133182_defer_async.png)

| `<script>`       | 在 HTML 中的顺序 | 阻塞                   |
| :--------------- | :--------------- | :--------------------- |
| `<script async>` | 网络请求返回顺序 | 可能阻塞，也可能不阻塞 |
| `<script defer>` | 在 HTML 中的顺序 | 不阻塞                 |

## 渲染流程

![](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202208262219577_render.png)

1. [解析 HTML](#dom-解析) 生成 `DOM Tree` ,解析 CSS 生成 `Style Rules`
2. 将 `DOM Tree`和 `Style Rules` 树相结合生成 渲染树
3. 回流(Layout)
4. 重绘(Painting)
5. Display 将像素发送给 GPU，展示在界面上

## 参考

- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/load_event)
- [掘金：原来 CSS 与 JS 是这样阻塞 DOM 解析和渲染的](https://juejin.cn/post/6844903497599549453)
- [掘金：再谈 load 与 DOMContentLoaded](https://juejin.cn/post/6844903623583891469)
- [简书：DOMContentLoaded 与 load 的区别、触发时机](https://www.jianshu.com/p/c3384c315d40)
