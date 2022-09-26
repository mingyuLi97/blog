# 模块化

定义：将一个复杂的程序依据一定的规则（规范）封装成几个块（文件），并进行组合在一起

块的内部数据/实现是私有的，只是像外部暴露一些接口（方法），与外部通信

一个文件 ，降低耦合性， 容易污染全局环境

IIFE 模式：匿名函数自调用（闭包）

<!-- <img src="/Users/limingyu/Library/Application Support/typora-user-images/image-20210821143057371.png" alt="image-20210821143057371" style="zoom: 25%;" /> -->

模块化规范

### commonjs（CJS）

规范：

- 每个文件都可当做一个模块
- 在服务器：模块的加载是运行时同步加载的
- 在浏览器：模块需要提前编译打包处理 [browserify.js](https://browserify.org/)

语法：

- 同一个文件内之能向外面暴露一个对象，多个后面的会覆盖前面

  ```js
  module.exports = {
    msg: 'module1',
    foo() {
      console.log(this.msg);
    }
  };

  // 使用
  let module1 = require('./modules/module1');
  module1.foo();
  ```

- 同一个文件可导出多个

  ```js
  //exports.xxx = value
  exports.foo = function () {
    console.log('foo() module3');
  };
  exports.bar = function () {
    console.log('bar() module3');
  };
  // 使用
  let module3 = require('./modules/module3');
  module3.foo();
  module3.bar();
  ```

### amd - requirejs

语法：

- 定义有依赖的模块 显示声明依赖注入

```js
define(['dataService'], function (dataService) {
  let msg = 'alerter.js';
  function showMsg() {
    console.log(msg, dataService.getName());
  }
  // 暴露模块
  return { showMsg };
});
```

- 定义没有依赖的模块

```js
// 定义没有依赖的模块
define(function () {
  let name = 'dataService.js';
  function getName() {
    return name;
  }
  // 暴露模块
  return { getName };
});
```

- 调用

```js
(function () {
  requirejs.config({
    baseUrl: '/js', // 基本的路径 出发点正在根目录下 不配置时从main.js出发去找
    paths: {
      dataService: './modules/dataService', //不要加.js 默认会添加后缀
      alerter: './modules/alerter'
    }
  });
  requirejs(['alerter'], function (alerter) {
    alerter.showMsg();
  });
})();
```

### cmd【了解】

[gitee](https://gitee.com/Lee_sparkling/js-modular-specification/tree/master)

```js
define(function (require, exports, module) {
  let msg = 'module4';
  // 同步引入
  let module2 = require('./module2');
  module2();
  // 异步引入
  require.async('./module3', function (m3) {
    m3.module3.fun();
  });
  function fun2() {
    console.log(msg);
  }
  exports.fun2 = fun2;
});
```

```js
define(function (require, exports, module) {
  let module4 = require('./module4');
  module4.fun2();
});
```

### umd

[umd](https://juejin.cn/post/6844903927104667662#heading-0)

### es6

> ES6 部分浏览器不支持，我们需要编译后才能在浏览器中使用，步骤如下：
>
> 1. 使用 babel 将 ES6 编译为 ES5 代码（包含 CommonJS 语法）
> 2. 使用 browserify 对文件进行编译打包

module1.js

```js
// 暴露模块 分别暴露
export function foo() {
  console.log('foo() module1');
}

export function bar() {
  console.log('bar() module1');
}

export let arr = [1, 2, 3, 4, 5];
```

module3.js

```js
// 默认暴露
export default () => {
  console.log('箭头函数');
};
```

Main.js

```js
import { foo, bar, arr } from './module1';
import myFun from './module3';
```
