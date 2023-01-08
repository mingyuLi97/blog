# rollup

## 构建阶段

Rollup 会先进入到 **Build** 阶段，解析各模块的内容及依赖关系，然后进入 **Output** 阶段

![](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202301071707463.png)

经过 **Build** 阶段的 `bundle` 对象其实并没有进行模块的打包，这个对象的作用在于存储各个模块的内容及依赖关系，同时暴露 `generate` 和 `write` 方法，以进入到后续的 **Output** 阶段（`write` 和 `generate` 方法唯一的区别在于前者打包完产物会写入磁盘，而后者不会）。

## Hook 的类型

#### 依据构建阶段分类：

- **Build Hook**

即在 Build 阶段执行的钩子函数，在这个阶段主要进行模块代码的转换、AST 解析以及模块依赖的解析，那么这个阶段的 Hook 对于代码的操作粒度一般为模块级别，也就是单文件级别。

- **Output Hook(Output Generation Hook)**

主要进行代码的打包，对于代码而言，操作粒度一般为 chunk 级别(一个 chunk 通常指很多文件打包到一起的产物)。

#### 依据执行方式分类

- **Async & Sync**

首先是 Async 和 Sync 钩子函数，两者其实是相对的，分别代表异步和同步的钩子函数，两者最大的区别在于同步钩子里面不能有异步逻辑，而异步钩子可以有。

- **Parallel**

并行的钩子函数。如果有多个插件实现了这个钩子的逻辑，一旦有钩子函数是异步逻辑，则并发执行钩子函数，不会等待当前钩子完成(底层使用 Promise.all)。

- **Sequential**

串行钩子函数，适用于插件间处理结果相互依赖的情况，即前一个插件 Hook 的返回值作为后续插件的入参。

- **First**

如果有多个插件实现了这个 Hook，那么 Hook 将依次运行，直到返回一个非 null 或非 undefined 的值为止。比较典型的 Hook 是 resolveId，一旦有插件的 resolveId 返回了一个路径，将停止执行后续插件的 resolveId 逻辑。

:::tip
Async/Sync 可以搭配后面三种类型中的任意一种，比如一个 Hook 既可以是 Async 也可以是 First 类型
:::

## Rollup 为什么更适合打包类库

1. rollup 打包出来的体积比 webpack 小。
2. 通过查看打包出来的代码，webpack 打包出来的文件里面有很多 `webpack_require` 工具函数的定义，可读性很差，而 rollup 打包出来的 js 会简单一点。

## Plugins

#### @rollup/plugin-node-resolve

为了允许我们加载第三方依赖，否则像 `import React from 'react'` 的依赖导入语句将不会被 Rollup 识别。

#### @rollup/plugin-commonjs

作用是将 CommonJS 格式的代码转换为 ESM 格式

#### @rollup/plugin-json

支持.json 的加载，并配合 rollup 的 Tree Shaking 机制去掉未使用的部分，进行按需打包。

#### @rollup/plugin-babel

在 Rollup 中使用 Babel 进行 JS 代码的语法转译。

#### @rollup/plugin-typescript

支持使用 TypeScript 开发。

#### @rollup/plugin-alias

支持别名配置。

#### @rollup/plugin-replace

在 Rollup 进行变量字符串的替换。

#### rollup-plugin-visualizer

对 Rollup 打包产物进行分析，自动生成产物体积可视化分析图。

#### rollup-plugin-terser

对生成的产物压缩
