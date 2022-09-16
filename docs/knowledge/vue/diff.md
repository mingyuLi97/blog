# diff 算法

在 Vue 里面每个组件都有一个更新函数(patch)，通过对新旧虚拟节点(vnode)的对比，来更新真实 DOM，为了提高性能，增加 DOM 的复用性，提出了 diff 算法。

:::tip

1. 只比较同一层，不做跨级比较
2. 通过 `tag（标签名）&& key` 是否相同，来判断是否是同一个节点
   - 是：复用老节点，将属性更新到老节点，然后更新儿子节点；
   - 不是：删除老的的创建新的

:::

## Vue2

#### 比较节点属性

遍历旧的属性，如果新的属性上没有，就操作 DOM 从当前节点将属性移除，再遍历新节点，一次将属性设置在 DOM 上

```javascript
// 更新节点属性
function updateProperties() {
  // 比对样式 如果老的有新的没有，就删除这个属性
  for (let key in oldStyle) {
    if (!newStyle[key]) {
      el.style[key] = '';
    }
  }
  // 删除多余属性
  for (let key in oldProps) {
    if (!newProps[key]) {
      el.removeAttribute(key);
    }
  }
  // 遍历 newProps 设置新的属性
  for (let key in newProps) {
    if (key === 'style') {
      for (let styleName in newProps.style) {
        el.style[styleName] = newProps.style[styleName];
      }
    } else if (key === 'class') {
      el.className = newProps.class;
    } else {
      el.setAttribute(key, newProps[key]);
    }
  }
}
```

比较孩子节点：

| 旧（有子节点） | 新 （有子节点） | 处理                                    |
| :------------: | :-------------: | --------------------------------------- |
|       ✅       |       ✅        | [双端对比算法](#双端对比算法)更新子节点 |
|       ✅       |       ❌        | 直接清空                                |
|       ❌       |       ✅        | 遍历增加新的儿子的节点                  |

#### 双端对比算法

首先为新、旧两个数组创建头尾双指针

1. 头头比较
2. 尾尾比较
3. 交叉比较：新头 & 老尾
4. 交叉比较：新尾 & 旧头
5. 乱序比对

::: details 双端对比算法 code

```javascript
// 比较儿子节点
function updateChildren(el, oldChildren, newChildren) {
  // 我们操作列表 经常会是有  push shift pop unshift reverse sort这些方法  （针对这些情况做一个优化）
  // vue2中采用双指针的方式 比较两个节点
  let oldStartIndex = 0;
  let newStartIndex = 0;
  let oldEndIndex = oldChildren.length - 1;
  let newEndIndex = newChildren.length - 1;

  let oldStartVnode = oldChildren[0];
  let newStartVnode = newChildren[0];

  let oldEndVnode = oldChildren[oldEndIndex];
  let newEndVnode = newChildren[newEndIndex];

  function makeIndexByKey(children) {
    let map = {};
    children.forEach((child, index) => {
      map[child.key] = index;
    });
    return map;
  }

  let map = makeIndexByKey(oldChildren);

  while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {
    // 双方有一方头指针，大于尾部指针则停止循环
    if (!oldStartVnode) {
      oldStartVnode = oldChildren[++oldStartIndex];
    } else if (!oldEndVnode) {
      oldEndVnode = oldChildren[--oldEndIndex];
    } else if (isSameVnode(oldStartVnode, newStartVnode)) {
      // 头头比较
      patchVnode(oldStartVnode, newStartVnode); // 如果是相同节点 则递归比较子节点
      oldStartVnode = oldChildren[++oldStartIndex];
      newStartVnode = newChildren[++newStartIndex];
      // 比较开头节点
    } else if (isSameVnode(oldEndVnode, newEndVnode)) {
      // 尾尾比较
      patchVnode(oldEndVnode, newEndVnode);
      oldEndVnode = oldChildren[--oldEndIndex];
      newEndVnode = newChildren[--newEndIndex];
    } else if (isSameVnode(oldEndVnode, newStartVnode)) {
      // 交叉比较：新头 & 老尾
      patchVnode(oldEndVnode, newStartVnode);
      // insertBefore 具备移动性 会将原来的元素移动走
      el.insertBefore(oldEndVnode.el, oldStartVnode.el); // 将老的尾巴移动到老的前面去
      oldEndVnode = oldChildren[--oldEndIndex];
      newStartVnode = newChildren[++newStartIndex];
    } else if (isSameVnode(oldStartVnode, newEndVnode)) {
      // 交叉比较：新尾 & 旧头
      patchVnode(oldStartVnode, newEndVnode);
      // insertBefore 具备移动性 会将原来的元素移动走
      el.insertBefore(oldStartVnode.el, oldEndVnode.el.nextSibling); // 将老的尾巴移动到老的前面去
      oldStartVnode = oldChildren[++oldStartIndex];
      newEndVnode = newChildren[--newEndIndex];
    } else {
      // 在给动态列表添加key的时候 要尽量避免用索引，因为索引前后都是从0 开始 ， 可能会发生错误复用
      // 乱序比对
      // 根据老的列表做一个映射关系 ，用新的去找，找到则移动，找不到则添加，最后多余的就删除
      let moveIndex = map[newStartVnode.key]; // 如果拿到则说明是我要移动的索引
      if (moveIndex !== undefined) {
        let moveVnode = oldChildren[moveIndex]; // 找到对应的虚拟节点 复用
        el.insertBefore(moveVnode.el, oldStartVnode.el);
        oldChildren[moveIndex] = undefined; // 表示这个节点已经移动走了
        patchVnode(moveVnode, newStartVnode); // 比对属性和子节点
      } else {
        el.insertBefore(createElm(newStartVnode), oldStartVnode.el);
      }
      newStartVnode = newChildren[++newStartIndex];
    }
  }
  if (newStartIndex <= newEndIndex) {
    // 新的多了 多余的就插入进去
    for (let i = newStartIndex; i <= newEndIndex; i++) {
      let childEl = createElm(newChildren[i]);
      // 这里可能是像后追加 ，还有可能是向前追加
      let anchor = newChildren[newEndIndex + 1]
        ? newChildren[newEndIndex + 1].el
        : null; // 获取下一个元素
      // el.appendChild(childEl);
      el.insertBefore(childEl, anchor); // anchor 为null的时候则会认为是appendChild
    }
  }

  if (oldStartIndex <= oldEndIndex) {
    // 老的多了，需要删除老的
    for (let i = oldStartIndex; i <= oldEndIndex; i++) {
      if (oldChildren[i]) {
        let childEl = oldChildren[i].el;
        el.removeChild(childEl);
      }
    }
  }
}
```

:::

## Vue3

| 旧孩子 | 新孩子 | 处理                     |
| :----: | :----: | ------------------------ |
|  数组  |  文本  | 删除老儿子，设置文本内容 |
|  文本  |  文本  | 更新文本                 |
|  数组  |  数组  | diff 算法                |
|  文本  |  数组  | 清空文本，创建新儿子挂载 |
|  数组  |   空   | 清空儿子                 |

#### diff 全量更新 patchKeyedChildren()

```javascript
/**
 * diff 更新vnode -> dom
 * @param c1  oldChildren
 * @param c2  newChildren
 * @param el
 */
const patchKeyedChildren = (c1, c2, el) => {
  let i = 0; // 两个子节点的头指针
  let e1 = c1.length - 1;
  let e2 = c2.length - 1;
  /** more */
};
```

从前往后比 相同的节点直接复用，不同的时候退出循环

```javascript
// 任意一方头尾指针相同，结束循环
while (i <= e1 && i <= e2) {
  const n1 = c1[i];
  const n2 = c2[i];
  if (isSameVnode(n1, n2)) {
    patch(n1, n2, el); // 同一个dom节点 复用 递归比较属性和子节点了
  } else {
    // 不同 则退出循环 后面的节点默认都是不同的 前面的都是相同节点
    break;
  }
  i++;
}
```

从后开始往前比

```javascript
while (i <= e1 && i <= e2) {
  const n1 = c1[e1];
  const n2 = c2[e2];
  if (isSameVnode(n1, n2)) {
    patch(n1, n2, el);
  } else break;
  e1--;
  e2--;
}
```

同序列的情况下，对上面的两步进行创建或者卸载

```javascript
// 同序列 common sequence + mount
// i 比 e1 大 则 i 和 e2 之间的节点都是新增节点(可能没有)
// 上面的从前往后和从后往前两种情况都可以通过下面代码来处理
if (i > e1) {
  // 循环创建新增节点
  while (i <= e2) {
    /**
     * 从前往后、从后往前两种情况需要区分新增的节点是要插在最后(类似 push)呢还是插在最前面(unshift)
     * 我们可以狠巧妙的发现，无论哪种情况 其实都是看后面的节点是否存在
     * 因为 insertBefore 有个特性 如果传入的是真实节点就插入到其前面，如果是 null 就追加在后面(类似appendChild)
     */
    const nextPos = e2 + 1;
    // 插入指定兄弟节点之前
    const anchor = c2[nextPos]?.el;
    patch(null, c2[i++], el, anchor);
  }
}
// 同序列卸载
else if (i > e2) {
  while (i <= e1) {
    unmount(c1[i++]);
  }
}
```

乱序比对：

1. 将新的 vnode 创建 `<key, index>` 的 Map 对象
2. 根据新的节点的个数创建标记 newIndexToOldIndex, 新的索引对应老索引
   如果后面遍历一次之后 位置上的值还是 0，说明这个节点是新增的
3. 倒序插入（通过最长递增子序列进行优化）

```javascript
let s1 = i,
  s2 = i;
// 将新的vnode做成map比较 `{e:2, c:3, d:4, h:5}`
const keyToNewIndexMap = new Map();
for (let i = s2; i <= e2; i++) {
  keyToNewIndexMap.set(c2[i].key, i);
}
// 应该移动的节点个数
let toBePatched = e2 - s2 + 1;
/**
 * 标记被patch过的节点 也就是复用的节点 用于后面倒序插入时判断是新增的还是patch的
 * 如果后面遍历一次之后，位置上的值还是0，说明这个节点是新增的
 */
const newIndexToOldIndex = new Array(toBePatched).fill(0);
/**
 * 循环老的节点 看新的有没有 有就比较差异 没有就卸载节点
 * 注意 这里只是将节点给做了 patch 和卸载，并没有将其移动到正确的位置
 */
for (let i = s1; i <= e1; i++) {
  const oldChild = c1[i];
  const existIndex = keyToNewIndexMap.get(oldChild.key);
  if (!existIndex) {
    // 卸载
    unmount(oldChild);
  } else {
    // 比较节点差异 新的索引对应老索引
    newIndexToOldIndex[existIndex - s2] = i + 1;
    patch(oldChild, c2[existIndex], el);
  }
}
// 移动节点位置 从后往前插入
// 最长递增子序列 优化
// 获取最长递增子序列
const increment = getSequence(newIndexToOldIndex);
let j = increment.length - 1;
for (let i = toBePatched - 1; i >= 0; i--) {
  // 计算出节点的真实索引
  let index = s2 + i;
  const current = c2[index]; // 找到最后一个节点
  const anchor = c2[index + 1]?.el; // 参照物 插入该节点前
  // 是新增 还是移动复用节点
  if (newIndexToOldIndex[i] === 0) {
    // 需要创建
    patch(null, current, el, anchor);
  } else {
    // 不相等 就插入节点 相同 就跳过
    if (i !== increment[j]) {
      // 比对过 直接移动节点即可复用
      hostInsert(current.el, el, anchor);
    } else {
      j--;
    }
  }
}
```

## key 的作用

key 主要是为了更高效的更新 DOM

vue 的 patch 方法中，会通过标签名和 key 来判断是否是相同节点，相同的执行更新，不同的则会删除重建

#### 不能用 index 作为 key

1. 会影响性能，在插入节点操作时，如果用 index 作为 key，那么插入的节点的后面所有节点都会认为不是同一个（因为 index 有变化），都会重新创建 DOM，极大的浪费了性能。
2. 删除操作时，可能会导致数组错位(常见于 input 输入框)

## vue3 相比 vue2 的优点

1. 增加了 [PatchFlags](https://github.com/vuejs/core/blob/main/packages/shared/src/patchFlags.ts#L19) 在编译的时候（创建 render 函数）将静态节点提升，将动态节点标记出哪些属性是动态的，使 vue 在运行时做 diff 更加高效。

:::tip 静态提升 hoist
将一些静态的节点提升到 render 函数外，每次 render 函数树执行直接引用提升了的静态节点即可，不需要反复创建。
:::

2. cacheHandlers 事件侦听器缓存

事件更新时需要先卸载之前的在换上新的，很耗费性能，所以 vue3 增加了事件缓存,diff 时只修改旧事件函数的地址

:::tip cacheHandlers

1. 给绑定事件的 el 增加 \_vei(vue event invoker)
2. `addEventListener(el, name, invoker, options)` 绑定的回调设置为 invoker
3. 用户绑定的事件设置在 invoker 上，`invoker[rawName] = createInvoker(xxx)`
4. diff 的时候修改 invoker 对象上对应方法名的地址
   :::

5. 使用最长递增子序列优化乱序比对，可以最大程度的减少对 DOM 的操作

## 参考

- [掘金：深入浅出虚拟 DOM 和 Diff 算法，及 Vue2 与 Vue3 中的区别](https://juejin.cn/post/7010594233253888013)
- [b 站：珠峰 vue2 源码](https://www.bilibili.com/video/BV1mR4y1w7cU?p=16&vd_source=90f72d18968e9c13d70200bc4fd4291e)
- [b 站：珠峰 vue3 源码](https://www.bilibili.com/video/BV1Q3411w7SQ?p=18&vd_source=90f72d18968e9c13d70200bc4fd4291e)
