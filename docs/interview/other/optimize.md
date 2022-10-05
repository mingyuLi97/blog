# 前端页面优化

## 代码层

### HTML

- [css 放在文件头，js 放在文件尾部，适当的使用异步下载](../../knowledge/browser/render.md#defer-async)
- [prefetch preload preconnect dns-prefetch](../../knowledge/browser/preload.md)

### CSS

- 避免使用复杂的选择器，推荐 [bem](../../knowledge/css/bem.md)

```css
/* bad */
body > main.container > aside.aside div:nth-of-type(odd) {
}
```

- 使用 sass、less 等预处理工具时 避免嵌套过深，会导致选择器复杂
- 使用 flex 布局替代 float 布局
- 提取公共样式，避免重复书写

### JS

- 减少[重排重绘](../../knowledge/browser/repaint_reflow.md#3-性能优化---减少回流重绘次数)
- 使用[事件委托](../../knowledge/js/event.md#事件委托)
- 使用 `Map` 映射的方式来取代 多个 `if else` 和 `switch`
- 使用 `requestAnimationFrame` 替代 `setTimeout` 和 `setInterval`
- 使用 webWorker 来处理复杂的运算
- 响应式图片加载：不同分辨率的设备使用不同尺寸的图片，适合手机端
- 公共组件提取 减少重复逻辑
- 图片懒加载 （使用 intersectionObserver 替代 监听滚动）

#### Vue

- 函数式组件：一个不包含状态和实例的组件，减少响应式带来的性能消耗
- 无需响应式的变量无需挂载到 data 上
- 不需要响应式的 用 `Object.freeze` 来冻结一些大对象
- v-if v-show 合理使用
- 避免 v-if v-for 同时使用，应使用计算属性
- 巧用 KeepAlive 动态组件缓存 DOM，避免不必要的性能浪费
- 合理使用 v-for 中的 key，不推荐 index
- 组件懒加载、异步组件

## 编译层

- 压缩 js、css、图片体积，整体 gzip
- 小尺寸图片转成 base64 格式 减少网络请求
- 借助 `webpack-bundle-analyzer` 包分析包体积，并找出可优化的地方
- 借助 `@babel/plugin-transform-runtime` 将 ES6 -> ES5 的辅助代码整合到一起，而不是每个包都创建一个
- tree-shaking
- 按需引入，路由懒加载

## 网络层

- 多个小文件合并成一个
- 使用 [HTTP2](../../knowledge/network/http.md#http2-的改进)
- 静态资源使用 CDN, 能够分担主服务器的压力，并且能够找到延时、负载相对最优的服务器，提升速度。
- 合理使用[浏览器缓存](../../knowledge/browser/cache.md)

## 体验优化

- 加载页面 （骨骼屏）

## 其他

- 使用字体图标代替图片
- 压缩图片体积，大背景图用 jpg，图标用 png
- 使用[TinyPng](https://link.juejin.cn/?target=https%3A%2F%2Ftinypng.com%2F)压缩图片

## 开发体验

#### webpack 缓存

- 对一些三方库，稳定不变的缓存
- 通过配置 webpack 持久化缓存 cache: filesystem，来缓存生成的 webpack 模块和 chunk，改善构建速度。
- 对 loader 指定 include 和 exclude

#### webpack resolve 配置

alias: 可以创建 import 或 require 的别名，用来简化模块引入。

```javascript
module.exports = {
  resolve: {
    alias: {
      '@': paths.src // @ 代表 src 路径
    }
  }
};
```

extensions: 给文件增加默认扩展名

```javascript
module.exports = {
  resolve: {
    extensions: ['.vue', '.js'] // 由于 webpack 的解析顺序是从左到右，因此要将使用频率高的文件类型放在左侧
  }
};
```

#### 借助 thread-loader 实现多线程打包

## 参考

- [博客园：学习 Webpack5 之路（优化篇）](https://www.cnblogs.com/o2team/p/15220107.html)
- [掘金：前端性能优化之代码分割，bundle 包减少了 26%](https://juejin.cn/post/7014839145537208333)
