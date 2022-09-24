# Promise

<script setup>
import { runPromiseAll, runPromiseRace, runPromiseAny,runPromiseAllSettled } from './promise.js';
</script>

## 原理

1. Promise 是一个类，在执行这个类的时候会传入一个执行器，这个执行器会立即执行
2. Promise 会有三种状态

   - Pending 等待
   - Fulfilled 完成
   - Rejected 失败

3. 状态只能由 Pending --> Fulfilled 或者 Pending --> Rejected，且一但发生改变便不可二次修改；
4. Promise 中使用 resolve 和 reject 两个函数来更改状态；
5. then 方法内部做但事情就是状态判断
   - 如果状态是成功，调用成功回调函数
   - 如果状态是失败，调用失败回调函数

## Promise.resolve

1. `Promise.resolve(42)` 相当于 `new Promise(function(resolve){ resolve(42); });`
2. 将 thenable 对象转换为 Promise 对象

## Promise.all

1. 参数为 `Promise<any>[]`
2. 返回值还是一个 Promise 对象
3. 只要有一个失败，Promise.all 就会执行 `reject()`

<button class="brand-c-button" @click="runPromiseAll">runPromiseAll</button>

<<< docs/knowledge/js/promise.js#all

## Promise.race

1. 参数为 `Promise<any>[]`
2. 采用第一个完成了的(resolve or reject) Promise 的值

<button class="brand-c-button" @click="runPromiseRace">runPromiseRace</button>

<<< docs/knowledge/js/promise.js#race

## Promise.any

与 Promise.all 可以看做是相反的。Promise.any 中只要有一个 Promise 实例成功就成功，只有当所有的 Promise 实例失败时 Promise.any 才失败，此时 Promise.any 会把所有的失败/错误集合在一起，返回一个失败的  promise  和 AggregateError 类型的实例

<button class="brand-c-button" @click="runPromiseAny">runPromiseAny</button>

<<< docs/knowledge/js/promise.js#any

## Promise.allSettled

1. 参数为 `Promise<any>[]`
2. 返回所有 Promise 执行后的返回结果，对于每个结果对象，都有一个 status 字符串。如果它的值为 fulfilled，则结果对象上存在一个 value 。如果值为 rejected，则存在一个 reason 。value（或 reason ）反映了每个 promise 决议（或拒绝）的值。

<button class="brand-c-button" @click="runPromiseAllSettled">runPromiseAllSettled</button>

<<< docs/knowledge/js/promise.js#allSettled

## 参考

- [掘金：字节飞书面试——请实现 promise.all](https://juejin.cn/post/7069805387490263047)
