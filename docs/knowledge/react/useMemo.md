# React.memo & useMemo

## React.memo

`React.memo()` 是一个高阶组件 (HOC)，它接收一个组件 A 作为参数并返回一个组件 B，如果组件 B 的 **props**（或其中的值）没有改变，则组件 B 会阻止组件 A 重新渲染 。

简单来说，`memo` 就是对传入的组件做了缓存，如果组件的 **props 没有改变**，那么就不会 re-render。值的注意的是对比是否改变是通过 `Object.is` 来完成的。

:::tip 一些情况下仍然会 re-render：

- 组件内部的 state 变更
- 组件被外部的 context 影响 `Context.Provider`

:::

### 语法

`const MemoizedComponent = memo(SomeComponent, arePropsEqual?)`

- `SomeComponent`：需要 memoization 的组件
- `arePropsEqual`：自定义比较函数

### 例子

- 如果没有增加 `memo()`，那么当 name 和 address 任意一个改变时，Greeting 都会渲染。
- 而如果加上了 `memo()`，则只有 name 修改时才会使 Greeting 重新渲染。

```jsx
import { memo, useState } from 'react';

export default function MyApp() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <label>
        Name{': '}
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Address{': '}
        <input value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </>
  );
}

const Greeting = memo(function Greeting({ name }) {
  console.log('Greeting was rendered at', new Date().toLocaleTimeString());
  return (
    <h3>
      Hello{name && ', '}
      {name}!
    </h3>
  );
});
```

## useMemo

```jsx
const [count, setCount] = useState(0);

const userInfo = {
  // ...
  age: count,
  name: 'abc'
}

return <UserCard userInfo={userInfo}>
```

上面代码在执行时，每次渲染都会创建一个新的 `userInfo`，即使与 old `userInfo` 值是一致的。这样 `memo()` 的优化就会失效。

因此我们可以得到结论，props 中如果传入的是引用对象，那么 `memo()` 优化就会失效。

```jsx
const [count, setCount] = useState(0);

const userInfo = useMemo(() => {
  return {
    // ...
    name: "abc",
    age: count
  };
}, [count]);

return <UserCard userInfo={userInfo}>

```

通过 useMemo 优化后，每次渲染时这个对象是不会改变的，仅依赖的 count 发生变化后，才会创建新的对象。

## 参考

- [https://juejin.cn/post/6844904101445124110](https://juejin.cn/post/6844904101445124110)
