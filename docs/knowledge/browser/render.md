# 渲染流程

## 浏览器中输入 `URL` 到页面返回的全过程 <br/>

1. [DNS 域名解析](/knowledge/network/dns.md#解析过程)
2. 拿到解析的 IP 地址，建立 [TCP](/knowledge/network/tcp-udp.html#tcp) 连接
3. 向 IP 地址发送 [HTTP](/knowledge/network/http.html) 请求
4. 服务器处理请求
5. 返回响应结果
6. 关闭 TCP 连接
7. 浏览器解析 HTML
8. 浏览器布局渲染

## 渲染流程

![](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202208262219577_render.png)

1. [解析 HTML](#dom-解析) 生成 `DOM Tree` ,解析 CSS 生成 `Style Rules`
2. 将 `DOM Tree`和 `Style Rules` 树相结合生成 渲染树
3. 回流(Layout)
4. 重绘(Painting)
5. Display 将像素发送给 GPU，展示在界面上

## DOM 解析

1. css 不会影响 DOM 解析，但会影响页面渲染。

why：如果不阻塞页面渲染，就会先出现一种样式，加载完又变为另一个样子，用户体验差，而且渲染成本是很高的。

2. js 会阻塞 dom 解析和渲染
3. 浏览器遇到 `<script>` 且没有 `defer` 或 `async` 属性的 标签时，会触发页面渲染，因而如果前面 CSS 资源尚未加载完毕时，浏览器会等待它加载完毕在执行脚本（css 会影响 js 执行）。

why：如果 js 里面有获取样式相关的方法，样式不提前加载完成，获取的将会有问题

## defer - async

![](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202208271133182_defer_async.png)

| `<script>`       | 在 HTML 中的顺序 | 阻塞                   |
| :--------------- | :--------------- | :--------------------- |
| `<script async>` | 网络请求返回顺序 | 可能阻塞，也可能不阻塞 |
| `<script defer>` | 在 HTML 中的顺序 | 不阻塞                 |

## 参考

- [掘金：原来 CSS 与 JS 是这样阻塞 DOM 解析和渲染的](https://juejin.cn/post/6844903497599549453)
