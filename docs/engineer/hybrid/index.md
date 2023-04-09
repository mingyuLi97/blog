# Hybrid

## Hybrid APP（Webview）

利用安卓和 iOS 上的 webview 容器，APP 能够执行 html、css 和 js 脚本，展示 web 页面。通过 JSBridge 完成 H5 与 Native 的双向通讯，从而赋予 H5 一定程度的原生能力。

#### 优势

- 跨平台（优）
- 开发周期短、成本低

#### 劣势

- 性能
- input、video、audio 等安全限制
- 不能自定义 input 拉起的键盘

## Hybrid APP (Native UI)

在赋予 H5 原生 API 能力的基础上，进一步通过 JSBridge 将 js 解析成的虚拟节点树( Virtual DOM )传递到 Native 并使用原生渲染。

![](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202304092228775.png)

#### 优势

- 性能更高
- 突破 webview 安全限制
- 拥有更丰富的 native 能力

#### 劣势

- 布局是 css 的子集，会满足不了 Web 开发者日渐增长的需求
- 开发组件需要客户端支持，对前端要求高

## 小程序

通过更加定制化的 JSBridge，并使用双 WebView 双线程的模式隔离了 JS 逻辑与 UI 渲染，形成了特殊的开发模式，加强了 H5 与 Native 混合程度，提高了页面性能及开发体验。

#### 运行环境

| 运行环境         | 逻辑层         | 渲染层            |
| ---------------- | -------------- | ----------------- |
| iOS              | JavaScriptCore | WKWebView         |
| 安卓             | V8             | chromium 定制内核 |
| 小程序开发者工具 | NWJS           | Chrome WebView    |

#### 小程序双线程模型

![](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202304092144292.png)

渲染线程：由多个 webview 实现（因为小程序中存在多个页面，即多个渲染线程

逻辑线程：JavascriptCore(ios) / V8(android)

:::tip

- 逻辑层和视图层不能直接通信必须通过 Native 层通信。
- 网络请求也由 Native 发送。
- 逻辑层和视图层之间的工作方式为：数据变更通过 setData 驱动视图更新；视图层交互触发事件，然后触发逻辑层的事件响应函数，函数中修改数据再次触发视图更新

:::

#### 优势

- **提升安全性：** 禁止使用 DOM、BOM，能够限制用户跳转，随意改变 DOM 结构，获取用户敏感信息。

- **提升性能：** 在浏览器中，虽然渲染线程和逻辑线程是两个独立的线程，但是他们是互斥的，其目的为了防止渲染时对 DOM 操作，造成页面错乱。而小程序不允许控制 DOM，所以完全可以独立执行

#### 劣势

- 灵活性：不能使用 DOM、BOM
- 开发体验：束手束脚

## 参考

- https://mp.weixin.qq.com/s/W6I0iF2oPSAJARxGVqtq6w
- https://juejin.cn/post/6999654431729909767
- https://developers.weixin.qq.com/ebook?action=get_post_info&docid=0006a2289c8bb0bb0086ee8c056c0a
