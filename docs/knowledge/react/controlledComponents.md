# 受控组件 & 非受控组件

## 受控组件

在 HTML 的表单元素中，（如`<input>`、 `<textarea>` 和 `<select`>），它们通常自己维护一套 state，并随着用户的输入自己进行 UI 上的更新，这种行为是不被我们程序所管控的。而如果将 React 里的 state 属性和表单元素的值建立依赖关系，再通过 `onChange` 事件与 `setState()` 结合更新 state 属性，就能达到控制用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做受控组件。

```tsx
function App() {
  const [state, setState] = useState('');

  return (
    <input type="text" value={state} onChange={e => setState(e.target.value)} />
  );
}
```

## 非受控组件

我们仅仅是想要获取某个表单元素的值，而不关心它是如何改变的，表单数据将交由 DOM 节点来处理。

```tsx
function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(inputRef.current?.value);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        defaultValue="123"
        ref={inputRef}
        onChange={e => console.log(e.target.value)}
      />
      <input type="submit" value="提交" />
    </form>
  );
}
```
