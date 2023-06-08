# Hooks

## 注意事项

1. 不能在类组件中使用
2. 只能在函数的最外层调用 hook，不能在循环、条件判断或子函数中使用

```typescript
// 错误示范
const [count, setCount] = useState(0);
const [name] = useState('abc');

if (count < 2) {
  useEffect(() => {
    document.title = name + count;
  });
}
```

3. 只能在 react 函数中使用，不能在普通 js 函数中使用

[Hook 规则](https://zh-hans.legacy.reactjs.org/docs/hooks-rules.html)
