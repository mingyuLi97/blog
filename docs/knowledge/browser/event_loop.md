# 事件循环 EventLoop

`Event Loop` 即事件循环，是浏览器(或 Node)防止 **js 单线程** 运行时阻塞的一种机制，也就是我们经常使用**异步**的原理。

## 同步任务和异步任务

**同步任务：** 同步任务会在调用栈中按照顺序等待主线程依次执行

**异步任务：** 异步任务会在异步任务有了结果后，将注册的回调函数放入任务队列中等待主线程空闲的时候（调用栈被清空），被读取到栈内等待主线程的执行。

## 宏任务 macro task

| -                     |      浏览器       | Node |
| :-------------------- | :---------------: | :--: |
| I/O                   |        ✅         |  ✅  |
| setTimeout            |        ✅         |  ✅  |
| setInterval           |        ✅         |  ✅  |
| setImmediate          | ❌ (仅 IE10 支持) |  ✅  |
| requestAnimationFrame |        ✅         |  ❌  |

:::tip
requestAnimationFrame 是一个很特殊的存在，它会在页面渲染前调用。
在每一次 event loop 的末尾，判断当前页面是否处于**渲染时机**(比如硬件限制，60hz 的屏幕每 16.66ms 渲染一次)，如果是就重新渲染。
:::

## 微任务 micro task

| -                | 浏览器 | Node |
| :--------------- | :----: | :--: |
| process.nextTick |   ❌   |  ✅  |
| MutationObserver |   ✅   |  ❌  |
| Promise          |   ✅   |  ✅  |

## 执行流程

![EventLoop](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202209181703122-event_loop.png)

![](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202209181756737-event_loop.gif)

## 总结

1. js 遇到一个异步任务后不会等待其返回结果，而是将其挂起，继续执行执行栈中的同步任务
2. 当异步返回结果后，不会立即执行，而是将结果添加到**任务队列**中
3. 当主线程空闲（任务都执行完）时，会查看任务队列中是否有任务，如果有将其取出并放入到执行栈，然后执行其中的同步代码
4. 如此往复，形成了一个环（事件循环）
5. 事件循环不一定每轮都伴随着重渲染。

:::tip
当前执行栈执行完毕时会立刻先处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件。同一次事件循环中，微任务永远在宏任务之前执行。
可以理解为，每一轮事件循环执行一个宏任务，清空所有微任务
:::

## 参考

- [掘金：一次弄懂 Event Loop（彻底解决此类面试问题）](https://juejin.cn/post/6844903764202094606)
- [知乎：深入解析 EventLoop 和浏览器渲染、帧动画、空闲回调的关系](https://zhuanlan.zhihu.com/p/142742003)
- [CSDN：Event loop 及 macro task & micro task](https://blog.csdn.net/ligang2585116/article/details/98023768)
