# Tree Shaking

Tree Shanking 依赖于 ES6 import 和 export 静态分析能力，可以在编译阶段将
不会被执行，执行的结果不会被用到，代码只会影响死变量（只写不读）的代码移除。

## DeadCode

1. 代码永远不会被执行

```javascript
function foo() {
  if (false) {
    console.log('条件永远是 false 的');
  }
  return;
  console.log('在 return 语句后面的代码');
}
```

2. 只声明没有使用的

```javascript
function foo() {
  // 只赋值没有使用的变量
  const a = 1;
  const b = 2;
  return b;
}

// 只声明没有使用的函数
function unusedFn(x) {
  return x + 1;
}

foo();
```

## 为什么只有 ESM 才能 TreeShaking

ESM 具有静态分析的能力，意味着我们在编译时就能确定模块间的依赖关系，而不用等运行时动态解析。因此在编译时
我们就能确定哪些模块是被引用的，哪些是未使用的，从而 TreeShaking。

## 失效

#### `export default`

`export default` 打包后会作为一个对象整体。Webpack 会分析顶层对象的使用情况，并不会分析对象中的属性，所以 `export default` 要么就是整体引入，要么就是整体删除。

#### 函数存在副作用

> 副作用，当我们调用某个函数时，该函数除了返回值之外，还产生附加的影响，例如修改全局变量，函数外的变量或修改参数等，称为存在副作用。

:::tip

`/*#__PURE__*/` 可以标记后面的函数不会产生副作用，这样就能被 TreeShaking

:::
