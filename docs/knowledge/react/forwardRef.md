# forwardRef

```typescript
import { useImperativeHandle, useRef, forwardRef, useEffect } from 'react';

interface PropsType {
  title: string;
}

interface RefType {
  focus: () => void;
}

const InputView = forwardRef<RefType, PropsType>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        console.log('InputView focus!', inputRef);
        inputRef.current?.focus();
      }
    };
  });

  return (
    <div>
      <h3>{props.title}</h3>
      <input ref={inputRef}></input>
    </div>
  );
});

function App() {
  const ref = useRef<RefType>(null);

  useEffect(() => {
    console.log('ref', ref.current);
    ref.current?.focus();
  }, []);

  return (
    <div className="App">
      <InputView ref={ref} title="forwardRef:" />
    </div>
  );
}

export default App;
```
