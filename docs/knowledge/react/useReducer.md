# useReducer

## reducer

reducer 是一个利用 action 提供的信息，将 state 从 A 转换到 B 的一个纯函数

- 语法：(state, action) => newState
- Immutable：每次都返回一个 newState， 永远不要直接修改 state 对象
- Action：一个常规的 Action 对象通常有 type 和 payload（可选）组成
  - type： 本次操作的类型，也是 reducer 条件判断的依据
  - payload： 提供操作附带的数据信息

```js
const action = {
  type: 'addBook',
  payload: {
    book: {
      bookId,
      bookName,
      author
    }
  }
};
function bookReducer(state, action) {
  switch (action.type) {
    // 添加一本书
    case 'addBook':
      const { book } = action.payload;
      return {
        ...state,
        books: {
          ...state.books,
          [book.bookId]: book
        }
      };
    case 'sub':
    // ....
    default:
      return state;
  }
}
```

## useReducer

```jsx
import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }
  throw Error('Unknown action.');
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: 'incremented_age' });
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
```
