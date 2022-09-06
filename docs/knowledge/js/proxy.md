# Proxy、Reflect

<script setup>
import '@components/proxy';
</script>

## 代理 Proxy

Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

### 方法

- `get(target, propKey, receiver)`：拦截对象属性的读取，比如 proxy.foo 和 proxy['foo']。
- `set(target, propKey, value, receiver)`：拦截对象属性的设置，比如 proxy.foo = v 或 proxy['foo'] = v，返回一个布尔值。
- `has(target, propKey)`：拦截 propKey in proxy 的操作，返回一个布尔值。
- `deleteProperty(target, propKey)`：拦截 delete proxy[propKey]的操作，返回一个布尔值。
- `ownKeys(target)`：拦截 Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in 循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而 Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
- `getOwnPropertyDescriptor(target, propKey)`：拦截 Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
- `defineProperty(target, propKey, propDesc)`：拦截 Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
- `preventExtensions(target)`：拦截 Object.preventExtensions(proxy)，返回一个布尔值。
- `getPrototypeOf(target)`：拦截 Object.getPrototypeOf(proxy)，返回一个对象。
- `isExtensible(target)`：拦截 Object.isExtensible(proxy)，返回一个布尔值。
- `setPrototypeOf(target, proto)`：拦截 Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
- `apply(target, object, args)`：拦截 Proxy 实例作为函数调用的操作，比如 proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
- `construct(target, args)`：拦截 Proxy 实例作为构造函数调用的操作，比如 new proxy(...args)。

<<< components/proxy.js#code1

## 反射 Reflect

1. 将 Object 对象的一些明显属于语言内部的方法（比如 `Object.defineProperty`），放到 Reflect 对象上。现阶段，某些方法同时在 Object 和 Reflect 对象上部署，未来的新方法将只部署在 Reflect 对象上。也就是说，从 Reflect 对象上可以拿到语言内部的方法。
2. 修改某些 Object 方法的返回结果，让其变得更合理。

```javascript
// 老写法
try {
  Object.defineProperty(target, property, attributes);
  // success
} catch (e) {
  // failure
}

// 新写法
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```

3. 函数式编程 `'assign' in Object` => `Reflect.has(Object, 'assign')`
4. Reflect 和 Proxy 上的方法是一一对应的，能够方便的配合 Proxy 使用，能够提供对象默认的行为(比如 this 指向)

## 为什么 Proxy 要和 Reflect 配合使用？

答：为了解决 proxy 存在的问题，如下

1. get 陷阱，当一个对象继承自一个代理对象时，其 get 会错误

<<< components/proxy.js#snippet

2. 一些复杂的方法比较难实现，比如 `Reflect.ownKeys()`，如果没有 Reflect 开发很难（没必要）去实现 ownKeys 这个方法

## Proxy 和 Object.defineProperty 的区别

`Object.defineProperty` 的问题：

1. 对象套对象这种情况需要递归深度遍历，性能差
2. 对象新增的属性需要手动增加监听
3. 数组新增删除修改时(push、shift 等数组方法)监听不到

因为 Proxy 直接监听了整个对象，所以上述问题很容易解决，但是 Proxy 兼容性略差于

## 参考

- [ECMAScript 6 入门教程](https://es6.ruanyifeng.com/#docs/reflect)
- [知乎：ES6 Proxy 里面为什么要用 Reflect？](https://www.zhihu.com/question/460133198/answer/1894620996)
