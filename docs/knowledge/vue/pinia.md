# Pinia

## 特性

1. Pinia 的 store 是相互独立的，通过唯一 key 来区分
2. Pinia 没有 Mutations，Actions 支持同步和异步
3. 使用上不需要用 commit、dispatch 这种方式，而是直接调用

## Store

#### 1. 创建 store

```javascript
import { defineStore } from 'pinia';
export const useStore = defineStore('main', {
  // other options...
});
```

:::tip

1. 将返回的函数命名为 use... 是跨可组合项的约定，以使其符合你的使用习惯。
2. 第一个参数是应用程序中 store 的唯一 id

:::

#### 2. 使用 store

```typescript
import { useStore } from '@/stores/counter';

export default defineComponent({
  setup() {
    const store = useStore();
    // ❌ 这不起作用，因为它会破坏响应式
    // 这和从 props 解构是一样的
    const { name, doubleCount } = store;

    return {
      // 一直会是 "eduardo"
      name,
      // 一直会是 2
      doubleCount,
      // 这将是响应式的
      doubleValue: computed(() => store.doubleCount)
    };
  }
});
```

#### 3. `storeToRefs` 可以将数据变成响应式

```typescript
import { storeToRefs } from 'pinia';

export default defineComponent({
  setup() {
    const store = useStore();
    // `name` 和 `doubleCount` 是响应式引用
    // 这也会为插件添加的属性创建引用
    // 但跳过任何 action 或 非响应式（不是 ref/reactive）的属性
    const { name, doubleCount } = storeToRefs(store);

    return {
      name,
      doubleCount
    };
  }
});
```

## Getters

```typescript
export const useStore = defineStore('main', {
  // other options...
  getters: {
    /**
     * @example
     * <template>
     *    <p>Double count is {{ store.doubleCount }}</p>
     * </template>
     */
    doubleCount(state) {
      return state.counter * 2;
    },
    /**
     * @example
     * <template>
     *    <p>User 2: {{ getUserById(2) }}</p>
     * </template>
     *
     *
     * setup() {
     *  const store = useStore()
     *  return { getUserById: store.getUserById }
     * }
     */
    getUserById: state => {
      return userId => state.users.find(user => user.id === userId);
    }
  }
});
```

## Actions

```typescript
export const useStore = defineStore('main', {
  // other options...
  actions: {
    /**
     * setup() {
     *    const main = useMainStore()
     *    // Actions 像 methods 一样被调用：
     *    main.randomizeCounter()
     *    return {}
     * },
     */
    increment() {
      this.counter++;
    },
    async registerUser(login, password) {
      this.userData = await api.post({ login, password });
    }
  }
});
```

## 参考

- [pinia 官网](https://pinia.web3doc.top/getting-started.html)
