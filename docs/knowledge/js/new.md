# new 操作符

## new 的实现

```javascript
function _new(constructor, ...args) {
  // 1. 创建一个空对象
  const obj = {};

  // 2. 改变 this 指向，执行构造函数
  const res = constructor.apply(obj, args);

  // 3. 将新对象的隐式原型指向构造函数的显式原型
  obj.__proto__ = constructor.prototype;

  return res instanceof Object ? res : obj;
}
```

## new.target

```javascript
function Foo() {
  if (!new.target) throw 'Foo() must be called with new';
  console.log('Foo instantiated with new');
}

Foo(); // throws "Foo() must be called with new"
new Foo(); // logs "Foo instantiated with new"
```

## 参考

- [mdn: new](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target)
