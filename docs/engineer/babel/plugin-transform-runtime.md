# @babel/plugin-transform-runtime

## 1、自动引入辅助函数

首先创建一个原始文件

```typescript
export class D {
  d = 0;
  constructor() {
    this.d = 111;
  }
}
```

使用 @babel/preset-env 转换

```javascript
/** ---------------- babel.config.js --------------- */
module.exports = {
  presets: ['@babel/preset-env']
};

/** -------------------- 转换后的文件 ----------------------- */
function _classCallCheck(instance, Constructor) {
  /** xxx */
}
function _defineProperties(target, props) {
  /** xxx */
}
function _createClass(Constructor, protoProps, staticProps) {
  /** xxx */
}
var D = /*#__PURE__*/ _createClass(function D() {
  _classCallCheck(this, D);

  this.d = 0;
  this.d = 111;
});
export { D };
```

我们可以看到 `@babel/preset-env` 在处理语法转换时会注入很多辅助函数(`_classCallCheck、_createClass` 等)，如果项目文件很多，会导致体积十分庞大

为了解决这个问题，`@babel/runtime` 出现了，它将这些辅助函数整合到了一起。我们可以通过包引用

```javascript
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _defineProperties = require('@babel/runtime/helpers/defineProperty');

/** xxx */
```

这样解决了代码复用的问题，但是每次手动引入过于麻烦，于是 `@babel/plugin-transform-runtime` 登场，我们可以用它来自动导入

```javascript
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-runtime']
};

/** -------------------- 转换后的文件 ----------------------- */
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.D = void 0;

var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass')
);

var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);

var D = /*#__PURE__*/ (0, _createClass2.default)(function D() {
  (0, _classCallCheck2.default)(this, D);
  (0, _defineProperty2.default)(this, 'd', 0);
  this.d = 111;
});
exports.D = D;
```

## 2、为类库打包增加 Polyfill

在开发类库的时候，也会用到一些新语法，需要有对应的 Polyfill，但是如果项目中不存在该怎么办呢？我们又不能在组件层注入全局 Polyfill （不想组件影响项目）
因此 `@babel/plugin-transform-runtime` 提供了局部 Polyfill 的方法。

创建源文件

```javascript
export const a = new Promise((resolve, reject) => {
  resolve(true);
});
export async function asyncFn() {
  await a;
}
```

按照默认配置进行代码转换

```javascript
/** ---------------- babel.config.js --------------- */
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-runtime']
};

/** -------------------- 转换后的文件 ----------------------- */
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.a = void 0;
exports.asyncFn = asyncFn;

var _regenerator = _interopRequireDefault(
  require('@babel/runtime/regenerator')
);

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var a = new Promise(function (resolve, reject) {
  resolve(true);
});
exports.a = a;

function asyncFn() {
  /** xxx */
}
```

根据转换后的代码可以发现，Promise 仍然用的全局的，也就是项目中必须注入 Polyfill，否则类库会出错。

我们修改下配置，通过设置 core-js 来转换

```javascript
/** ---------------- babel.config.js --------------- */
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]]
};

/** -------------------- 输出结果 ----------------------- */
var _Object$defineProperty = require('@babel/runtime-corejs3/core-js-stable/object/define-property');
var _interopRequireDefault = require('@babel/runtime-corejs3/helpers/interopRequireDefault');
_Object$defineProperty(exports, '__esModule', {
  value: true
});

exports.a = void 0;
exports.asyncFn = asyncFn;

var _regenerator = _interopRequireDefault(
  require('@babel/runtime-corejs3/regenerator')
);

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime-corejs3/helpers/asyncToGenerator')
);

var _promise = _interopRequireDefault(
  require('@babel/runtime-corejs3/core-js-stable/promise')
);

var a = new _promise.default(function (resolve, reject) {
  resolve(true);
});
exports.a = a;

function asyncFn() {
  /** xxx */
}
```

可以看到，现在转换后的 Promise 是一个从 @babel/runtime-corejs3/core-js-stable/promise 导入的局部变量

## 总结

1. 删除内联的辅助函数，并自动从 `@babel/runtime/helpers` 中引入。
2. 当代码里使用了新的 API、新的实例方法, 自动从引入 `@babel/runtime-corejs3` 引入 Polyfill，以此来替代从全局引入 Polyfill。

:::tip
@babel/plugin-transform-runtime 引入的 polyfill 不会对全局造成污染，所以很适合作为类库的打包。
:::

## 参考

- [Babel 官网](https://www.babeljs.cn/docs/babel-plugin-transform-runtime)
- [瑞涛的官方网站](https://www.jiangruitao.com/babel/transform-runtime/)
