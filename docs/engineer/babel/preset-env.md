# @babel/preset-env

`@babel/preset-env` 是一大堆插件的集合，包含了当前浏览器环境下，所有语言特性的插件，可以根据 [browserList](https://github.com/browserslist/browserslist) 的结果，选择合适的插件将新语言特性转译成旧浏览器可以支持的表达方式。

首先我们来理清楚这三个概念:

- 最新 ES 语法，比如：箭头函数，let/const。
- 最新 ES Api，比如 Promise
- 最新 ES 实例/静态方法，比如 String.prototype.include

prest-env 仅仅只会转化最新的 es 语法，并不会转化对应的 Api 和实例方法。

比如说 ES 6 中的 Array.from 静态方法。babel 是不会转译这个方法的，如果想在低版本浏览器中识别并且运行 Array.from 方法达到我们的预期就需要额外引入 polyfill 进行在 Array 上添加实现这个方法。

## 配置

#### useBuiltIns

- `false` (默认)

仅会转化最新的 ES 语法，并不会转化任何 Api 和方法。

- `'entry'`

当传入 entry 时，需要我们在项目入口文件中手动引入一次 core-js，它会根据我们配置的浏览器兼容性列表**全量**引入不兼容的 polyfill。

:::tip
🚨 从 Babel 7.4.0 开始，这个包已经被弃用，取而代之的是直接包含 core-js/stable（以填充 ECMAScript 特性）

如果您正在将生成器或异步函数编译到 ES5，并且您使用的版本低于 `@babel/core` 或 `@babel/plugin-transform-regenerator` 低于 7.18.0，则还必须加载该 regenerator runtime 包。使用` @babel/preset-env``useBuiltIns: "usage" `选项或时会自动加载 `@babel/plugin-transform-runtime`。
:::

- `'usage'`

根据配置的浏览器兼容，以及代码中使用到的 Api 进行引入 polyfill **按需添加**。

:::tip
`entry`: 入口处全量引入

`usage`: 使用的地方按需引入
:::

## 参考

- [Babel 官网](https://www.babeljs.cn/docs/babel-preset-env)
- [掘金：前端基建 带你在 Babel 的世界中畅游](https://juejin.cn/post/7025237833543581732)
