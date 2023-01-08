# Slot

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

## Vue2
