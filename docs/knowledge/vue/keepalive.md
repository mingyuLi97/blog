# keep-alive

默认情况下，一个组件实例在被替换掉（切走）后会被销毁。在一些情况下我们需要组件被“切走”的情况下保留他们的状态，
要解决这个问题就可以用 `<KeepAlive>` 组件将其包裹, `<KeepAlive>` 是 Vue 中内置的组件，被缓存的组件存放在内存中，防止重复渲染

## 使用

`<KeepAlive>` 默认会缓存内部的所有组件实例，但我们可以通过 `include` 和 `exclude` 来定制该行为。

#### Prop

- `include`：名称匹配的组件会被缓存，英文逗号分隔的字符串、一个正则表达式，或是包含这两种类型的一个数组。
- `exclude`：名称匹配的组件都不会被缓存，英文逗号分隔的字符串、一个正则表达式，或是包含这两种类型的一个数组。
- `max`：最多可以缓存多少组件实例, 超出的时候会删除最久没有访问过的实例（[LRU 算法](../../design/leetcode/LRU.md)）

```html
<!-- 以英文逗号分隔的字符串 -->
<KeepAlive include="a,b">
  <component :is="view" />
</KeepAlive>

<!-- 正则表达式 (需使用 `v-bind`) -->
<KeepAlive :exclude="/a|b/">
  <component :is="view" />
</KeepAlive>

<!-- 数组 (需使用 `v-bind`) -->
<KeepAlive :include="['a', 'b']" :max="10">
  <component :is="view" />
</KeepAlive>
```

## 生命周期

```javascript
export default {
  activated() {
    // 在首次挂载、
    // 以及每次从缓存中被重新插入的时候调用
  },
  deactivated() {
    // 在从 DOM 上移除、进入缓存
    // 以及组件卸载时调用
  }
};
```

## 参考

- [Vue.js 官网](https://cn.vuejs.org/guide/built-ins/keep-alive.html#basic-usage)
- [珠峰源码分析](https://www.bilibili.com/video/BV1mR4y1w7cU?p=34&vd_source=90f72d18968e9c13d70200bc4fd4291e)
- [Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/v2/extend/keep-alive.html#%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93)
