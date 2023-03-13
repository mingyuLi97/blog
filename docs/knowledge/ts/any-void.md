# any、never、void、unknown

## any

任意类型，如果设置了 any，那么 ts 不会对该变量进行类型检查，该变量可以被任何值赋值，也可以访问任何属性。

#### 场景

1. 重构时，可以快速避开类型错误（不推荐）
2. 当我们调用 `console.log` 时，其可以接受任何的类型

## never

```typescript
// 因为这个是无限循环，我们可以使用never作为返回值表示它永远不会返回
function foreverLoop(): never {
  while (true) {}
}

// 因为这个函数会抛出异常，所以也是不会返回的
function crashFunc(): never {
  throw new Error('this function will crash');
}
```

#### 场景

```typescript
let v: 'a' | 'b' = Math.random() > 0.5 ? 'a' : 'b';

switch (v) {
  case 'a':
    // ...
    break;
  case 'b':
    // ...
    break;
  default:
    // 这里永远走不到，如果传入的值类型出现了这个分支，那么会出现类型报错
    const check: never = v;
}
```

## void

不返回任何值，仅可以由 `null` `undefined` 赋值

## 参考

- https://juejin.cn/post/7151926103324983304
