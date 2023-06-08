# useState

## 基础使用

```javascript
const [number, setNumber] = useState(0);

// 可以通过函数实现复杂的初始化
const [count, setCount] = useState(() => props.initial || 10);
```

## 多次设置值是同一个

```jsx
function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setTimeout(() => alert(count), 3000);
  }

  return (
    <>
      <button onClick={handleClick}>count is {count}</button>
    </>
  );
}
```

:::tip

- 设置 state 只会为下一次渲染变更 state 的值，该例子中的每次设置值都可以看为
  `setCount(0 + 1);` 所以即使设置了多次，页面的值仍是 `count + 1`
- React 会使 state 的值始终”固定“在一次渲染的各个事件处理函数内部。 你无需担心代码运行时 state 是否发生了变化。因此 `alert` 的值就是当次 `count`

:::

## 解决[上一个](./useState.md#多次设置值是同一个)问题，实现多次更新 state

如果传递的是更新函数，React 将会把其加入到队列。 React 会获取你上一个更新函数的返回值，并将其作为 n 传递给下一个更新函数，这样就能实现多次更新

```jsx
export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber(n => n + 1);
          setNumber(n => n + 1);
        }}
      >
        增加数字
      </button>
    </>
  );
}
```

## 更新对象(Object)

```jsx
export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  function onPointerMove(e) {
    // 错误的
    position.x = e.clientX;
    position.y = e.clientY;

    // 正确的
    setPosition({
      x: e.clientX,
      y: e.clientY
    });

    // 只改变部分值
    setPosition({
      ...position,
      y: e.clientY
    });
  }

  return (
    // xxx
  )

```
