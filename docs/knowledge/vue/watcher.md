# watcher

## 渲染 - renderWatcher

数据更新 -> 调用视图渲染的方法(`vm._update(vm._render())`)

1. renderWatcher 初始化时候传入的 `{ lazy: false }`, 即初始化时候立即触发 `this.get()` 方法
2. 方法调用的时候访问到属性的值，触发属性被劫持的 `getter` 方法（响应式）
3. 每个属性的 dep 进行依赖收集，将 watcher 加入到自己的 subs
4. 当属性发生变换时，触发 `setter`
5. 执行 `dep.notify()` 将所有的 watcher 执行更新，从而刷新视图

## 计算属性 - computedWatcher

数据更新 -> 触发计算属性变更 -> 触发视图渲染

1. 初始化计算属性，为每个属性创建一个 watcher, 初始化时候传入的 `{ lazy: true, dirty: true }`，因为 `lazy: true`, 不会立即调用 watcher 的 `get()` 方法
2. 劫持计算属性的 getter
3. 当被访问的时候触发，将 computedWatcher 推入到 watcherQueue，然后访问到计算属性中的响应式数据（data 上的 firstName）
4. 访问到响应式数据，触发其 getter，响应式数据依赖收集，此时会收集到 computedWatcher 和 renderWatcher 两个 watcher
5. 当计算属性内的状态发生变更触发 set 后，首先通知 computed 需要进行重新计算，然后通知到视图执行渲染，再渲染中会访问到 computed 计算后的值，最后渲染到页面。

:::tip
计算属性每次取的都是缓存的值，如果依赖的响应式数据改变，会先将 computedWatcher 的 dirty 设置为 `true`, 更新视图的时候发现 `dirty === true` 就会重新取值
:::

## 用户 Watch - userWatcher

数据更新 -> 触发用户注册的回调

1. 初始化计算属性，为每个属性创建一个 watcher, 初始化时候传入的 `{ lazy: false, user: true }` 并传入回调函数, 即初始化时候立即触发 `this.get()` 方法
2. 当 watcher 更新时，执行回调
