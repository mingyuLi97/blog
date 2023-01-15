# v-model

`v-model` 本质上是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

## Vue2

```html
<my-input v-model="foo" />
<!-- 等价于 -->
<my-input :value="foo" @input="foo = $event" />
```

组件内自定义 v-model 的 prop / event

```javascript
export default {
  model: {
    prop: 'value', // 默认为 value
    event: 'input' // 默认为 input
  }
};
```

## Vue3

```html
<my-input v-model="msg"></my-input>
<!-- 等价于 -->
<my-input :modelValue="msg" @update:modelValue="msg = $event"></my-input>
```

#### 1. 修改了默认的 prop 和 event

`value` => `modelValue`

`input` => `update:modelValue`

#### 2. 废弃了 model 配置项

```html
<!-- 定义 prop 需要 v-model:prop -->
<my-input v-model:title="msg"></my-input>
<!-- 等价于 -->
<my-input :title="msg" @update:title="msg = $event"></my-input>
<!-- 支持多个 v-model -->
<my-input v-model:title="msg" v-model:desc="desc"></my-input>
```
