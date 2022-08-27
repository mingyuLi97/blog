# 重绘 - 回流

## 1. 重绘 - Repaint

- 当 render tree 中的一部分元素的样式改变（宽高、大小、位置等不变）导致页面重建
- 如：color backgroundColor visibility...

## 2. 回流 - Reflow

- 元素的大小或者位置发生了变化（当页面布局和几何信息发生变化的时候），触发了重新布局导致渲染树重新计算布局和渲染

- 如： 删除可见的 DOM 元素；元素的位置大小/尺寸变化；内容变化；页面初始渲染；浏览器窗口视图

- 每个页面至少需要一次回流，就是在页面第一次加载的时候

- 回流一定会触发重绘，而重绘不一定触发回流

## 3. 性能优化 - 减少回流重绘次数

1. 放弃传统操作 DOM 的时代，基于 Vue/React 开发
   mvvm / mvc / virtual / dom/ dom diff....
2. 分离读写
   现代浏览器都有渲染队列机制（遇到修改样式的代码后不会立刻渲染，而是添加到队列中，等到下一行是非修改样式代码再去将队列中的修改一起执行）

```javascript
// 错误写法 会导致2次回流
let box = document.getElementById('box');
box.style.width = '200px';
console.log(box.clientWidth);
box.style.height = '200px';

// 正确写法 执行1次回流
let box = document.getElementById('box');
box.style.width = '200px';
box.style.height = '200px';
console.log(box.clientWidth);
```

3. 集中样式更改
   创建样式类，为 dom 动态添加类
4. 缓存处理

```javascript
// 错误 回流2次
box.style.width = box.clientWidth + '200px';
box.style.height = box.clientHeight + '300px';
// 正确 回流1次
let a = box.clientWidth;
let b = box.clientHeight;
box.style.width = a + '200px';
box.style.height = b + '300px';
```

5. 元素批量修改

```javascript
// 错误 引发5次回流
for (let i = 0; i < 5; i++) {
  let li = document.createElement('li');
  li.innerHTML = i;
  box.appendChild(li);
}
// 正确 引发1次回流
// 1.文档碎片
let frg = document.createDocumentFragment();
for (let i = 0; i < 5; i++) {
  let li = document.createElement('li');
  li.innerHTML = i;
  frg.appendChild(li);
}
box.appendChild(frg);
frg = null;
// 2.字符串拼接
let str = ``;
for (let i = 0; i < 5; i++) {
  str += `<li>${i}</li>`;
}
box.innerHTML = str;
```

6. 动画效果应用到 position 属性为 absolute / fixed 的元素上（脱离文档流）
7. CSS3 硬件加速（GPU 加速）
   transform / opacity / filters 等等会触发硬件加速，不会引发重绘和回流
8. 牺牲平滑换取速度
   比如有个动画是每秒移动 1 个像素点，改为移动 10 个像素点
9. 避免 table 布局和使用 css 的 javascript

## 参考

- [bilibili](https://www.bilibili.com/video/BV1ZE411r7ri)
