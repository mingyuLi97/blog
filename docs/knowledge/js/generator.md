# ES6 Generator

Generator 是 ECMAScript 6 中的一个重要特性，它可以构建一种迭代器。迭代器是一种能够逐步生成数据的技术，可以大大提高代码的可读性和可维护性。

## 基本语法

1. 声明时函数关键字与函数名之间有个星号 "`*`"。
2. 函数中有个特殊的关键字 `yield`

```javascript
function* gen() {
  const x = yield 1;
  const y = yield 2;
  return null;
}
```

## 返回值

生成器的返回值是一个可迭代对象，我们可以使用 `next()` 或者 `for...of` 方法去遍历。
![generator](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202302080944911.png)

```javascript
const g = gen();
```

## Generator.prototype.next()

生成器函数是分段执行的，每次调用 `next()` 方法，函数就执行一步，到下一个 `yield` 或 `return`，因此我们可以理解为 `yield` 是函数暂停，`return` 是函数完成。

每一次调用 `next()` 其返回值为：

- value：返回值，`yield` 或 `return` 关键字右侧的返回值。
- done：生成器的状态，当结果为 `true` 时，标志着生成器函数已经执行完成，如果继续调用返回的 value 为 `undefined`。

```javascript
function* gen() {
  const x = yield 1;
  console.log(x);
  const y = yield '1';
  console.log(y);
  return null;
}

const g = gen();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // x: undefined   { value: '1', done: false }
console.log(g.next()); // y: undefined   { value: null, done: true }
console.log(g.next()); // { value: undefined, done: true }
console.log(g.next()); // { value: undefined, done: true }
```

## `for..of`

```javascript
function* gen() {
  yield 1;
  yield 2;
  return 3;
}

for (const g of gen()) {
  console.log(g);
}
// 1 2
```

:::warning
值得注意的是，for...of 在执行过程中不会执行 return 语句
:::

## 传递参数

```javascript
function* gen() {
  const x = yield 1;
  console.log(x);
}
const g = gen();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // x: undefined   { value: '1', done: false }
```

传递参数是生成器中比较难以理解的部分，按照正常理解 `x` 应该输出的时 1，然而实际输出的是 `undefined`，这是因为 `yield` 所返回的值其实是我们调用 `next()` 时传递的值。

:::tip
`yield` 表达式本身没有返回值（`undefined`）。`next()` 可以带一个参数，该参数就会被当作上一个 yield 表达式的返回值。
:::

```javascript
function* gen() {
  const x = yield 1;
  console.log(x);
  return 4;
}
const g = gen();
console.log(g.next(2));
// { value: 1, done: false }

console.log(g.next(3));
// x: 3   调用时传递的值
// { value: 4, done: false }  return 返回的值
```

下面我们看一道练习题 [看原文请戳我](https://medium.com/dailyjs/a-simple-guide-to-understanding-javascript-es6-generators-d1c350551950)

```javascript
function* generatorFn(i) {
  console.log('i: ', i);
  const j = 5 * (yield i * 10);
  console.log('j: ', j);
  const k = yield (2 * j) / 4;
  console.log('k: ', k);
  return i + j + k;
}

const gen = generatorFn(10);
console.log(gen.next(20)); // i: 10  { value: 100, done: false }
console.log(gen.next(10)); // j: 50  { value: 25, done: false }
console.log(gen.next(5)); // k: 5   { value: 65, done: true }
```

:::tip

1. 调用 `next(20)` 时，执行直到第一个 `yield` 的代码。由于我们之前没有任何 `yield` 表达式，因此这个值 20 被丢弃了。在输出中（value）我们得到的值 `i * 10`，这里是 100。此时，函数停止在第一个 `yield` 并且 `const j` 尚未设置。
2. 调用 `next(10)`时， 调用将整个第一个 `yield` 表达式替换为 10，可以理解 `yield (i * 10) = 10`，因此 j 的值变为 50。`yield` 返回的值为 `2 * 50 / 4 = 25`。
3. 调用 `next(5)`时，将整个第二个 `yield` 替换为 5，因此 k 的值为 5。进一步继续执行 return 语句，返回`(x + y + z) => (10 + 50 + 5) = 65` 最终输出的 `value` 为 65

:::

## Generator.prototype.throw()

与 `next()` 相似，Generator 生成的实例可以通过调用 `throw()` 方法来抛出错误。

```javascript
function* gen() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (e) {
    console.log('捕获错误: ', e.message);
  }
}

const g = gen();
console.log(g.next());
// { value: 1, done: false }
console.log(g.throw(new Error('出错了')));
// 捕获错误:  出错了
// { value: undefined, done: true }
console.log(g.next());
// { value: undefined, done: true }
```

## Generator.prototype.return()

同样的，还有个 `return` 方法，用来提前结束迭代。

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
console.log(g.next()); // { value: 1, done: false }
console.log(g.return(4)); // { value: 4, done: true }
console.log(g.next()); // { value: undefined, done: true }
```

## yield\*

在生成器函数中使用`yield*`时，会委托另一个生成器函数。

```javascript
function* inner() {
  yield 4;
  yield 5;
}

function* outer() {
  yield 1;
  yield 2;
  yield* inner();
  yield 3;
}

for (const v of outer()) {
  console.log(v);
}

// 1 2 4 5 3
```
