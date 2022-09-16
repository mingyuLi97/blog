# 组件通信

## props、$emit

常用于父子组件通信

```javascript
// parent
<Child :name="name" />

// child
export default {
  props: ['name']
}
```

## EventBus

通过一个空的 Vue 实例作为事件总线，用它来触发、监听事件，实现了任何组件间的通信，包括父子、兄弟、跨级。

```javascript
const Event = new Vue();
Event.$emit(事件名, 数据);
Event.$on(事件名, data => {});
```

## $attrs、$listeners

主要用于实现隔代通信

```vue{2,7}
<template>
  <Sub v-bind="$attrs" v-on="$listeners" />
</template>
<script>
import Sub from './SubChild.vue';
export default {
  inheritAttrs: false,
  components: { Sub }
};
</script>
```

#### $attrs

包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 `v-bind="$attrs"`传入内部组件

#### $listeners

包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 `v-on="$listeners"` 传入内部组件

#### inheritAttrs

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

## provide、inject

祖先通过 provide 创建一个变量，子孙组件中通过 inject 来注入变量，主要用来跨级传输

```javascript
// parent
export default {
  provide: {
    name: 'limy'
  }
};

// child
export default {
  inject: ['name']
}
```

### 实现响应式

1. 通过传递函数获取

```javascript
// parent
provide() {
  return {
    reactiveName: () => this.name
  };
}

// child
export default {
  inject: ['reactiveName'],
  computed: {
    _reactiveName() {
      return this.reactiveName();
    }
  }
};

```

2. 传递时直接传**响应式对象**

```javascript
// parent
data() {
  return {
    obj: {
      objName: 'obj limy'
    }
  };
},
provide() {
  return {
    obj: this.obj
  };
}

// child.vue
// template
<div> objName: {{ obj.objName }} </div>

// script
export default {
  inject: ['obj']
}
```

3. 直接传递父组件实例

```javascript
// parent
provide() {
  return {
    instance: this,
  };
}

// child
export default {
  inject: ['instance'],
}
```

## $parent、$children、$ref

都是通过拿父子组件的实例，从而进行通信

- $ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在组件上，引用就指向组件实例
- $parent：访问父实例
- $children：子实例

## [vuex](./vuex.md)

## 参考

- [掘金：Vue 组件间通信六种方式（完整版）](https://juejin.cn/post/6844903845642911752)
