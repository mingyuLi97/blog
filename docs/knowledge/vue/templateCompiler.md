# 模版解析

## 总流程

![总流程](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202301201428179.png)

## 解析器

#### HTML 解析器

```javascript
// 伪代码
parseHTML(template, {
  start(tag, attrs, unary) {
    // 每当解析到标签的开始位置时，触发该函数
  },
  end() {
    // 每当解析到标签的结束位置时，触发该函数
  },
  chars(text) {
    // 每当解析到文本时，触发该函数
  },
  comment(text) {
    // 每当解析到注释时，触发该函数
  }
});
```

1. 接收到模版字符串

```javascript
tpl = `<div>
    <h1>我是Berwin</h1>
    <p>我今年23岁</p>
</div>`;
```

2. 通过正则表达式匹配标签（开始标签、结束标签、文本标签等），调用对应的钩子函数（start、end、chars）

   - 开始标签中匹配出对应的属性值，拿到这些属性构建虚拟节点
   - 匹配到开始标签，将节点入栈（当前栈顶的节点就是该节点的父亲）
   - 匹配到结束标签，将栈顶的节点出栈

3. 删除匹配到的标签

![模板解析成AST](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202301191644945.png)

## 优化器

对一些静态的节点（更新时 DOM 不会变化的节点）打标记。

### 好处：

- 使 DIFF 的过程中可以跳过，既节省了 JS 运算成本，又减少了 DOM 的操作。
- 每次重新渲染的时候，静态节点可以直接复用，不用重新生成

:::tip
每次重新渲染，都会使用最新的状态生成一份全新的 VNode 与旧的 VNode 进行对比。而在生成 vode 的过程中，如果发现一个节点被标记为静态节点，那么除了首次渲染会生成节点外，在重新渲染时并不会生成新的子节点，而是克隆已经存在的静态节点。
:::

### 实现

[源码实现](https://github1s.com/vuejs/vue/blob/2.6/src/compiler/optimizer.js#L21-L22)

**1. 标记静态节点**

递归遍历 AST，根据 [`isStatic()`](https://github1s.com/vuejs/vue/blob/2.6/src/compiler/optimizer.js#L100-L101), 在当前节点上增加 `static` 属性

HTML 解析器在调用钩子函数创建 AST 节点时会根据节点类型的不同为节点加上不同的 type 属性，来标记 AST 节点的节点类型。所以在判断一个节点是否为静态节点时首先会根据 type 值判断节点类型。

- `type: 2`
  - 包含变量的动态文本节点，=> `false`
  - 仅纯文本节点 => `true`
- `type: 1` 说明该节点是元素节点
  - 使用了 v-pre 指令，那就断定它是静态节点；
  - 没有使用 v-pre 指令，那它要成为静态节点必须满足：
    - 不能使用动态绑定语法，即标签上不能有 v-、@、:开头的属性；
    - 不能使用 v-if、v-else、v-for 指令；
    - 不能是内置组件，即标签名不能是 slot 和 component；
    - 标签名必须是平台保留标签，即不能是组件；
    - 当前节点的父节点不能是带有  v-for  的  template  标签；
    - 节点的所有属性的  key  都必须是静态节点才有的  key，注：静态节点的 key 是有限的，它只能是 type,tag,attrsList,attrsMap,plain,parent,children,attrs 之一。

**2. 标记静态根节点**
递归遍历 AST，根据子节点类型判断，在当前节点标记 `staticRoot`

- 节点本身必须是静态节点
- 必须拥有子节点 children
- 子节点不能只是只有一个文本节点

## 生成器

根据生成的 AST 拼接成对应的 render 函数。

```javascript
with (this) {
  return _c(
    'div',
    {
      attrs: { id: 'el' }
    }[(_c('p'), [_v('Hello ' + _s(name))])]
  );
}
```

## 为什么使用 with 语句？

vue 并没有对模板中的 javascript 表达式进行 ast 语法分析，如果要移除 `with`，就需要对 javascript 表达式进行 ast 语法分析，并且还需要一个专门的解释器对 ast 语法树进行解释，这样就会导致存在两个并行的解析器，这样维护成本高，还可能会有潜在的 bug 风险。

## 参考

- [深入浅出 Vue.js](https://cnodejs.org/topic/5caae462d68ff5064921ae7e)
- [https://github.com/berwin/Blog/issues/18](https://github.com/berwin/Blog/issues/18)
- [掘金：【vue2 深度学习】模板编译篇-优化器](https://juejin.cn/post/7166831346319360036#heading-3)
- [https://segmentfault.com/q/1010000018552495](https://segmentfault.com/q/1010000018552495)
