# nextTick

为了保证多次修改数据只更新一次视图，Vue 采用了异步更新的策略，每次修改数据，会将 DOM 操作放到异步队列中，
所有同步操作完成后，在清除队列，nextTick 就是把回调加入到异步队列中，方便获取到更新后的 DOM。

## 实现原理

<<< components/nextTick.js#snippet
