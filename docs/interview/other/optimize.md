# 前端页面优化

## 网络层

- 多个小文件合并成一个
- 使用 [HTTP2](../../knowledge/network/http.md#http2-的改进)
- 静态资源使用 CDN, 能够分担主服务器的压力，并且能够找到延时、负载相对最优的服务器，提升速度。
- 合理使用[浏览器缓存](../../knowledge/browser/cache.md)

## 编译层

https://www.cnblogs.com/o2team/p/15220107.html

- webpack 缓存
  - 对一些三方库，稳定不变的缓存
- 压缩代码：js、css、图片、整体 gzip

- @babel/plugin-transform-runtime 将 ES6 -> ES5 的辅助代码整合到一起，而不是每个包都创建一个
- webpack-bundle-analyzer 包分析包体积
- https://juejin.cn/post/7014839145537208333

## 代码层

- [css 放在文件头，js 放在文件尾部，适当的使用异步下载](../../knowledge/browser/render.md#defer-async)
- [prefetch preload preconnect dns-prefetch](../../knowledge/browser/preload.md)
- 减少[重排重绘](../../knowledge/browser/repaint_reflow.md#3-性能优化---减少回流重绘次数)
- 使用[事件委托](../../knowledge/js/event.md#事件委托)
- 使用 `Map` 映射的方式来取代 多个 `if else` 和 `switch`
- 使用 `requestAnimationFrame` 替代 `setTimeout` 和 `setInterval`
- 使用 webWorker 来处理复杂的运算
- 响应式图片加载：不同分辨率的设备使用不同尺寸的图片，适合手机端
- 小尺寸图片转成 base64 格式 减少网络请求
- 按需引入，路由懒加载
- 组件懒加载、异步组件
- 公共组件提取 减少重复逻辑
- 图片懒加载 （使用 intersectionObserver 替代 监听滚动）
- 按需引入

## Vue

- 函数式组件：一个不包含状态和实例的组件，减少响应式带来的性能消耗
- 无需响应式的变量无需挂载到 data 上
- 不需要响应式的 用`Object.freeze` 来冻结一些大对象
- v-if v-show 合理使用
- 避免 v-if v-for，应使用计算属性
- 巧用 KeepAlive 动态组件缓存 DOM，避免不必要的性能浪费
- 合理使用 v-for 中的 key，不推荐 index

## 体验优化

- 加载页面 （骨骼屏）

## 其他

- 使用字体图标代替图片
- 压缩图片体积，大背景图用 jpg，图标用 png
- [TinyPng 压缩图片](https://link.juejin.cn/?target=https%3A%2F%2Ftinypng.com%2F)
