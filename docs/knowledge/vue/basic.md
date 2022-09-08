# 概念

## 对 MVVM 的理解

MVVM 有三个组成部分

- Model（模型）：主要指数据和逻辑
- View（视图）：屏幕上展示的 UI
- ViewModel（绑定器）：绑定在视图和模型中间进行通信

Model 和 View 之间是不允许直接通信的，ViewModel 是双向通信的 可以将 Model 的更改同步到 View，也可以将 View 的更改同步到 Model。

解决了 Model 和 View 耦合的问题 还同时解决了维护两者映射关系的大量繁杂代码和 DOM 操作代码，在提高开发效率、可读性同时还保持了优越的性能表现。

Vue 借助了 MVVM 的设计思想，其内部通过 **数据绑定** 和 **DOM 事件监听** 实现了双向绑定，典型的是 `v-model` 的实现。但是提供了 `$refs` 属性
使模型可以直接操作视图，所以 Vue 是不完全的 MVVM

## Vue 和 React 看法

### 相同点

1. 组件化开发
2. MVVM 框架，数据驱动视图
3. 都使用虚拟 DOM

### 区别

**模版 vs JSX**

Vue 是模版语法，react 推崇 **all in js** 所以独创了 JSX 语法，但他们本质都是语法糖，编译后都是一个可执行函数。

**声明式编程 vs 函数式编程**

React 中的值始终是不可变的，所以如果想改变数据，必须调用 api，Vue 使用声明式编程，可以直接赋值。

**数据流**

都为单向数据流，但是 Vue 可以通过 `v-model` 语法糖实现双向绑定 <br />

Vue 是双向数据绑定的 MVVM 框架，采用数据劫持 + 发布-订阅的模式，View 修改可以让 Model 发生改变，而 Model 的变化也会更新 View

**diff 算法**

TODO

## Vue 渲染流程

1. 模版编译：将模版生产抽象语法树（AST），并将 AST 转换成 render 函数
2. 调用 render 函数生成 虚拟 DOM（vnode）
3. 调用 patch 函数，通过 createElement 递归的将虚拟 DOM 转换成真实 DOM

## Vue2 Vue3 对比

#### 1. 生命周期

vue3 提出了 setup

#### 2. 响应式原理

proxy 替代了 Object.defineProperty
[proxy 和 Object.defineProperty 的区别](../js/proxy.md#proxy-和-objectdefineproperty-的区别)

#### 3. diff 算法

#### 4. API 风格

组合式（Composition API）vs 选项式 （Options API）

## 参考

- [掘金：Vue 的 MVVM 思想(包含三个常见面试题)](https://juejin.cn/post/6879300070962003982)
