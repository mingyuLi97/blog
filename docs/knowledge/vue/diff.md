# diff 算法

## Vue2

vue 中每个组件都有一个更新函数，其主要就是对比 oldVnode 和 newVnode, 将更新的地方同步到真实 DOM 上。
为了提高性能，增加 DOM 的复用性，提出了 diff 算法，diff 遵循深度优先，比较时只进行同层比较。
vue 中通过 vnode 上的 tag 和 key 字段进行对比，如果都相同认为是同一个节点，

1. 判断是否是同一个节点，如果不是，就删除老的的创建新的
2. 如果是 就更新其属性 然后更新儿子节点
   - 新节点和老节点都有儿子：双端对比算法更新子节点
   - 老的有儿子，新的没有儿子：直接清空
   - 老的没有儿子，新的有儿子：遍历增加新的儿子的节点

```javascript
function patchVnode(params) {
  if(tag 不相等){
    标签不一致说明是两个不同节点，直接用新节点替换老节点
  }
  if(!tag){ // 文本节点
    比较文本内容，不相同就做替换
  }
  updateProperties()
  // 开始比较儿子节点

  if(新节点和老节点都有儿子){
    updateChildren()
  }else if(老的有儿子，新的没有儿子){
    直接清空
  }else if(老的没有儿子，新的有儿子){
    遍历增加新的儿子的节点
  }
}
```

#### 属性更新策略

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

#### 双端对比算法

首先为新、旧两个数组创建头尾双指针

1. 头头比较
2. 尾尾比较
3. 交叉比较：新头 & 老尾
4. 交叉比较：新尾 & 旧头
5. 乱序比对

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
    // 老的对了，需要删除老的
    for (let i = oldStartIndex; i <= oldEndIndex; i++) {
      if (oldChildren[i]) {
        let childEl = oldChildren[i].el;
        el.removeChild(childEl);
      }
    }
  }
}
```
