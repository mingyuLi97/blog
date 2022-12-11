# 如何写一个 Vue 组件

## 什么是组件

在开发的时候经常会遇到重复的样式、类似的功能，比如文件上传、Toast 提示等，为了减少重复的开发，也为了功能、样式的统一，我们对其进行总结封装，这就是组件化。

## 怎么规划组件

#### 1. 适当选用开源组件

社区为我们提供了很多优秀的开源组件库，像 [Ant Design](https://ant.design/index-cn)、[vant](https://vant-ui.github.io/vant/#/zh-CN)，里面的很多组件是可以拿来就用的，因此不必重复造轮子（个人观点）。

#### 2. 二次封装

当然有些组件需要适配自己公司产品风格的 UI、增加些通用的业务逻辑。二次封装是一个相对较优的选择。二次封装的话建议通过 `$attrs、$listeners`（不知道怎么用没关系，后面有讲怎么用） 进行属性透传，这样能最大限度的保证原组件的功能。👇 是我封装的 vant-picker 组件（根据业务对样式做了兼容）

```vue
<template>
  <div @touchmove.prevent>
    <div class="fl_bg"></div>
    <van-picker
      v-bind="$attrs"
      v-on="$listeners"
      ref="vantPicker"
      class="faiz-picker-container"
    />
  </div>
</template>

<script>
import 'vant/lib/picker/style';
import VanPicker from 'vant/lib/picker';
export default {
  components: {
    VanPicker
  },
  inheritAttrs: false,
  mounted() {
    this.vantPickerInstance = this.$refs.vantPicker;
  }
};
</script>
```

#### 3. 造轮子

大家可能最喜欢的就是造轮子，想怎么写就怎么写，想加什么功能就有什么功能。不过为了使用者能更好的用“轮子”我们在开发的时候应遵循一些原则。

## 开发组件的原则

> 一个组件是否优秀的指标之一就是看它的使用体验如何。

#### 1. Vue 项目 Props 数据传递的要明确, 不要直接扔一个复杂对象。

```html
// bad
<sn-button :options="{ type:'primary', shape:'default', disable:true }"
  >默认按钮</sn-button
>

// good
<sn-button type="primary" shape="default" disabled>默认按钮</sn-button>
```

#### 2. Props 增加校验，重点、易错的应增加 validator 自定义校验, 错误要给出提示。

```js
propF: {
  type: String,
  required: true,
  validator: function (value) {
    if (['success', 'warning', 'danger'].includes(value)) {
      return true;
    }
    console.error('propF 必须匹配[success', 'warning', 'danger]字符串中的一个')
  }
}
```

#### 3. 组件内应多提供插槽、事件。避免组件内处理业务，如果存在需要提供覆盖、操作方法。

#### 4. 良好的 TS 支持，对外暴露的类型应减少使用 `any`。

#### 5. 组件要有 namespace 概念，内部功能绝对不能影响整个页面。

```
// ------------- css ---------------
// bad
div {
    display: flex;
}

// good 推荐使用 bem
.van-button {
    display: flex;
}
.van-button__content {
    color: red;
}

// ------------- js ----------------
// bad
window.foo = 'foo'

// good 组件内的变量可以通过某个文件存储并导出
export const foo = 'foo'
```

#### 6. 对一些非指定版本的第三方库应由 **dependencies** 转到 **peerDependencies**，防止项目存在不同版本依赖导致打包体积变大。

```json
  // dependencies 适合存放强依赖的版本 比如这里的 vue-lazy
  "dependencies": {
    "@babel/runtime": "7.x",
    "@vant/icons": "^1.7.1",
    "@vant/popperjs": "^1.1.0",
    "@vue/babel-helper-vue-jsx-merge-props": "^1.0.0",
    "vue-lazyload": "1.2.3"
  },
  // peerDependencies 存放项目所推荐使用的三方包版本
  "peerDependencies": {
    "vue": ">= 2.6.0"
  },
  "devDependencies": {
    "@vant/cli": "^2.11.11",
    "prettier": "2.1.0",
    "vue": "^2.6.12",
    "vue-template-compiler": "^2.6.12"
  },
```

#### 7. 避免在全局或者原型上挂载变量、方法。不能完全否定这种实现方式，只能说是把双刃剑，好处是使用者开发方便，坏处就是增加了代码维护成本，以及出错排查的难度。而且这种方式不利于组件的 TreeShaking（参考 Vue2）

```js
// bad
Vue.prototype.foo = 'foo';

// 如果有需要 可以通过 Vue.use 显示的声明
Vue.use(fooPlugin); // 此处的 fooPlugin 功能就是向原型上挂载 'foo'
```

## 组件的实现

### 组件的分类

#### 1. 基础组件

像 Toast 提示、Button 等基础组件。

#### 2. UI 组件

像头像展示、进度条等。

#### 3. 接口组件

像一些固定后端接口可以将其包装，好处是能统一管理、通参统一处理、同时可以利用 TS 的类型校验。

#### 4. 业务组件

有一些业务场景是完全相同的，A 页面、B 页面、D 页面都是相同的 UI 相同的逻辑，一点小差异也是可以通过配置改变的。这样的建议抽成组件，但是经常出现的问题是组件越写越大、功能越来越复杂。因此我们在实现这类组件时一定要避免一个文件（一处代码块）做多个逻辑，要对其解耦，对其进行分层处理，可以理解为组件内拆分出多个子组件，并在入口文件通过配置将各个子组件分配、组合（策略模式）。

### Vue 组件的通信

#### 1. `props && $emit`

最基本的通信方案，也是最常用的，**推荐**使用。

#### 2. `$parent、$children、$ref`

在组件中我们能明确的知道 `$parent` 和 `$children`, 所以通过获取组件实例进行通信的方式很适用。

- `$ref`：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在组件上，引用就指向组件实例
- `$parent`：访问父实例
- `$children`：子实例

#### 3. `$attrs、$listeners`

主要用于实现隔代通信

```html
<template>
  <sub v-bind="$attrs" v-on="$listeners" />
</template>
<script>
  import Sub from './SubChild.vue';
  export default {
    inheritAttrs: false,
    components: { Sub }
  };
</script>
```

- `$attrs`

包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 `v-bind="$attrs"`传入内部组件

- `$listeners`

包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 `v-on="$listeners"` 传入内部组件

- `inheritAttrs`

用于控制是否启用默认的组件 attribute 透传行为, 默认情况下(`inheritAttrs: true`)子组件的 props 没有接收的
值会被透传

```javascript
// parent
data() {
  return {
    name: 'limy',
    age: 18
  };
}

// child
export default {
  inheritAttrs: false,
  // 没有接收 age
  props: ['name']
}
```

```html
<!-- inheritAttrs: false -->
<div data-v-5c5c8dbe="" data-v-fb07bed6="" class="ccc"></div>
<!-- inheritAttrs: true -->
<div data-v-5c5c8dbe="" data-v-fb07bed6="" age="18" class="ccc"></div>
```

#### `EventBus`、`vuex`、`provide、inject`

这个几个特点是作用范围过大，容易影响外部，或者受到外部影响。**不推荐**

## 总结

好的组件往往有着相同的特点：易用、稳定、体验好

作为开发者，我们需要规范的开发、设计以此来达到 👆 目的。

最后，建议大家多用开源、多学开源、少造重复轮子（狗头保命）
