# Slot

## 介绍

插槽是组件中用来占位的标签，允许传递外部自定义的结构，从而更好的复用组件。
可以这么理解，与 Props 类似，props 传递的是数据，插槽传递的是的结构。

## 分类

- 默认插槽
- 具名插槽
- 作用域插槽

## 代码展示

```html
<body>
  <section id="app">
    <layout>
      <!-- 具名插槽 -->
      <template #header>
        <p>in header</p>
      </template>
      <!-- 默认插槽 -->
      <div>{{ msg }}</div>
      <!-- 作用域插槽 -->
      <template #footer="slotProps">
        <p>in footer {{ slotProps }}</p>
      </template>
    </layout>
  </section>
  <script src="../dist/vue.js"></script>
  <script>
    new Vue({
      el: '#app',
      data() {
        return {
          msg: 'default slot'
        };
      },
      components: {
        layout: {
          template: `<div class="container">
                      <header>
                        <!-- 具名插槽 -->
                        <slot name="header"></slot>
                      </header>
                      <main>
                        <!-- 默认插槽 -->
                        <slot></slot>
                      </main>
                      <footer>
                        <!-- 作用域插槽 -->
                        <slot name="footer" :data1="innerMsg"></slot>
                      </footer>
                    </div>`,
          data() {
            return {
              innerMsg: 'innerMsg'
            };
          }
        }
      }
    });
  </script>
</body>
```

## 原理

工具函数介绍

```
_c: createElement
_u: resolveScopedSlots
_v: createTextVNode
_s: toString
_t: renderSlot
```

父组件的 render 函数

```javascript
_c(
  'section',
  { attrs: { id: 'app' } },
  [
    _c(
      'layout',
      {
        scopedSlots: _u([
          {
            key: 'header',
            fn: function () {
              return [_c('p', [_v('in header')])];
            },
            proxy: true
          },
          {
            key: 'footer',
            fn: function (slotProps) {
              return [_c('p', [_v('in footer ' + _s(slotProps))])];
            }
          }
        ])
      },
      [_v(' '), _c('div', [_v(_s(msg))])]
    )
  ],
  1
);
```

子组件（layout）的 render

```js
_c('div', { staticClass: 'container' }, [
  _c('header', [_t('header')], 2),
  _v(' '),
  _c('main', [_t('default')], 2),
  _v(' '),
  _c('footer', [_t('footer', null, { data1: innerMsg })], 2)
]);
```

1. 执行`vm._init`
2. 执行 `vm._render`
   1. 执行 `_u: resolveScopedSlots`，解析出作用域插槽
   2. 执行 `_c('div', [_v(_s(msg))])`，创建出默认插槽的 vnode
   3. 执行 `_c('layout', ...` ，创建组件 vnode
      1. 此时 `vnode.componentOptions.children` 存储了默认插槽
      2. `vnode.data.scopedSlots` 存储了作用域插槽 header、footer
3. 得到父组件 vnode
4. 调用 `vm._update` 即调用 `patch`
5. 第一次调用 patch，会执行创建，创建 section => 创建 layout（layout 是组件所以调用 `createComponent`）
6. 创建组件，调用组件（layout）的 `vm._init`
   1. 调用 `initInternalComponent`，将 `vnode.componentOptions.children` 放到 `vm.$options._renderChildren`
   2. 调用 `initRender`, 将默认插槽放置到 `vm.$slots`
7. 组件挂载，执行 `vm._render`
   1. 执行 `normalizeScopedSlots`，将所有插槽转换成作用域插槽挂载到 `vm.$scopedSlots`
8. 调用 render 函数
   1. 调用 `_t: renderSlot`, 在 $scopedSlots 中通过 name 匹配出对应的函数并执行,得到插槽的 vnode 插入到当前子组件

#### 原理总结

在模版编译时，如果发现组件中存在子组件，那么就会将它们当作插槽，根据名称将其分为两类、默认插槽和作用域插槽，默认插槽放置在 children 中， 作用域插槽放在 scopedSlots 中。render 执行时，默认插槽会被编译成 vnode，scopedSlots 编译成函数。子组件 init 时，将父组件传递的 children 转换成 $slot, 并与父组件上的 scopedSlots 合并，生成 $scopedSlots。子组件 render 函数执行时，根据插槽的 name 在 $scopedSlots 取出对应的值，如果是 vnode 就直接使用，如果是函数就将数据传递并调用返回 vnode.
