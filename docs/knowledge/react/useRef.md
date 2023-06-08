# useRef

## 获取 DOM

通过 ref.current 就可以拿到对应的 DOM 元素。

```jsx
function App() {
  const iptEl = useRef(null);

  function toFocus() {
    iptEl.current.focus();
  }
  return (
    <>
      <input ref={iptEl} type="text" />
      <button onClick={toFocus}>focus</button>
    </>
  );
}
```

## 存储值

- 你可以在重新渲染之间 存储信息（不像是普通对象，每次渲染都会重置）。
- 改变它 **不会触发重新渲染**（不像是 state 变量，会触发重新渲染）。
- state 的值是个 capture value，也就是每次渲染中任意处的 state 都是不变的，但是 ref 不一样，ref 就是一个普通的 js 对象，因此在任意时刻拿到的都是最新的
- 对于你的组件的每个副本来说，这些信息都是本地的（不像是外面的变量，是共享的）。

## 参考

- [https://juejin.cn/post/7071998820225122335](https://juejin.cn/post/7071998820225122335)
- [https://zh-hans.react.dev/reference/react/useRef](https://zh-hans.react.dev/reference/react/useRef)
