# useEffect

在第一次渲染完成后和每次更新后，都会执行 useEffect 传递的函数（第一个参数）。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。

:::tip
我们可以理解把 useEffect Hook 看做 `componentDidMount，componentDidUpdate 和 componentWillUnmount` 这三个函数的组合。
:::

## 基本使用

```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
});
```

## 与某个变量关联

```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
```

## 仅首次渲染完成后更新

```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, []);
```

## 解决 async 语法

async 函数都会默认返回一个隐式的 promise。但是，useEffect 不应该返回任何内容，因此如我们想使用 async 应该在内部重新创建一个函数。

```jsx
useEffect(() => {
  const fetchData = async () => {
    const result = await axios('http://localhost/api/v1/search?query=redux');

    setData(result.data);
  };

  fetchData();
}, []);
```

## 参考

- [https://zh-hans.legacy.reactjs.org/docs/hooks-reference.html](https://zh-hans.legacy.reactjs.org/docs/hooks-reference.html)
- [https://juejin.cn/post/6952509261519781918#heading-2](https://juejin.cn/post/6952509261519781918#heading-2)
