# 原型和原型链

## 概念

- 隐式原型：`__proto__`
- 显式原型：`prototype`

## 特性

1. 对象 `__proto__` 的值等于其构造函数的 `prototype`

```js
const obj = {};
const arr = [];
const fn = function () {};

obj.__proto__ == Object.prototype; // true
arr.__proto__ === Array.prototype; // true
fn.__proto__ == Function.prototype; // true
```

2. 在访问对象的某个属性时，如果这个对象本身没有，那么它会去它的 `__proto__`（构造函数的显式原型 `prototype`）中寻找

```js
const obj = { a: 1 };
obj.toString;
// ƒ toString() { [native code] }
```

## 参考

- [掘金：面不面试的，你都得懂原型和原型链](https://juejin.cn/post/6934498361475072014)
- [掘金：2019 面试准备 - JS 原型与原型链](https://juejin.cn/post/6844903782229213197)
