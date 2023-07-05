# Type vs Interface

## 相同点

### 描述对象 & 函数

```ts
interface User {
  name: string;
  age: number;
}

interface SetUser {
  (name: string, age: number): void;
}
```

```ts
type User = {
  name: string
  age: number
};

type SetUser = (name: string, age: number): void;
```

### 类型合并

interface extends interface

```typescript
interface Name {
  name: string;
}
interface User extends Name {
  age: number;
}
```

type 与 type 交叉

```typescript
type Name = {
  name: string;
};
type User = Name & { age: number };
```

interface extends type

```typescript
type Name = {
  name: string;
};
interface User extends Name {
  age: number;
}
```

type 与 interface 交叉

```typescript
interface Name {
  name: string;
}
type User = Name & {
  age: number;
};
```

## 不同点

### type 可以而 interface 不行

类型别名，联合类型，元组等类型等

```typescript
// 基本类型别名
type Name = string;

// 联合类型
interface Dog {
  wong();
}
interface Cat {
  miao();
}

type Pet = Dog | Cat;

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet];
```

类型体操

```typescript
let div = document.createElement('div');
type B = typeof div;

type _NonNullable<T> = T extends null | undefined ? never : T;
```

### interface 可以而 type 不行

声明合并

```typescript
interface User {
  name: string;
  age: number;
}

interface User {
  sex: string;
}

/*
User 接口为 {
  name: string
  age: number
  sex: string 
}
*/
```

### 可变性

type 关键字声明的 type 在创建后是不可变的。而 interface 在创建后是可变的，但是这种可变性可以通过索引签名来约束。

```typescript
interface __IGetUserServiceList {
  // 增加索引签名后不能再加入boolean属性
  [k: string]: string | number;
  id: string;
}
interface __IGetUserServiceList {
  rich: boolean; // error
}
```

## 总结

- **interface** 是一种关系结构的描述，里面可以包含属性和方法，能够扩展（继承、派生、合并）

- **type** 是一个 alias，可以使用一些表达式操作符，并且通过这些操作符实现和 interface 近似等价的关系描述。

- **选择：** 如果希望是能够继承并约束的，就用 interface，但是如果想简化类型描述（做类型体操）应该使用 type。如果都能实现效果 interface 应该优先于 type 被考虑。

## 参考

- https://github.com/SunshowerC/blog/issues/7
