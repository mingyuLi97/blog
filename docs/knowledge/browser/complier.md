# JS 预编译

## 编译器

把代码解析成为浏览器看得懂的结构

- 词法解析
- AST 抽象语法树
- 构建出浏览器可执行的代码

TODO：

## 引擎执行逻辑（V8）

- 变量提升

- ECStack：Execution Context Stack 执行环境栈
- EC: Execution Context 执行环境（执行上下文）
  - VO：Variable Object 变量对象
  - AO：Activation Object 活动对象 （函数的叫做 AO，可以理解为 VO 的分支）
- Scope：作用域，创建函数时赋予的
- Scope Chain：作用域链

#### 创建变量三部曲

```javascript
var n = 1;
```

1. 创建变量 声明 declare
2. 创建值
   1. 基础值 - 栈内存
   2. 引用值 - 堆内存
3. 关联（赋值）定义 defined
