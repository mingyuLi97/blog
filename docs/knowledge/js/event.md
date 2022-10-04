# 事件冒泡

## 语法

> target.addEventListener(type, listener, useCapture);

## 参数

- **type**

  表示监听[事件类型](https://developer.mozilla.org/zh-CN/docs/Web/Events)的字符串。

- **listener**

  回调函数

- **useCapture**
  - true - 事件捕获模式
  - false - 事件冒泡模式

## 详细文档 - [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

## 结论

1. DOM 事件流的 3 个阶段 (假定点击了盒子 c)
   - 捕获阶段 - 向内传播
     - a => b => c
   - 目标阶段
     - c
   - 冒泡阶段 - 向外传播
     - c => b => a
2. 执行顺序
   - 先捕获后冒泡
   - 在执行目标阶段时，执行顺序按照注册顺序执行

## 完整代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        text-align: center;
      }
      #a {
        width: 300px;
        height: 300px;
        background-color: pink;
      }
      #b {
        width: 200px;
        height: 200px;
        background-color: skyblue;
        margin: 25px auto;
      }
      #c {
        width: 100px;
        height: 100px;
        background-color: olivedrab;
        margin: 25px auto;
      }
    </style>
  </head>
  <body>
    <div id="a">
      a
      <div id="b">
        b
        <div id="c">c</div>
      </div>
    </div>
    <script>
      a.addEventListener('click', () => {
        console.log('冒泡----a');
      });
      c.addEventListener('click', () => {
        console.log('冒泡----c');
      });

      a.addEventListener(
        'click',
        () => {
          console.log('捕获----a');
        },
        true
      );
      b.addEventListener(
        'click',
        () => {
          console.log('捕获----b');
        },
        true
      );
      c.addEventListener(
        'click',
        () => {
          console.log('捕获----c');
        },
        true
      );

      b.addEventListener('click', () => {
        console.log('冒泡----b');
      });
    </script>
  </body>
</html>
```

## 事件委托

事件委托利用了事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。所有用到按钮的事件（多数鼠标事件和键盘事件）都适合采用事件委托技术， 使用事件委托可以节省内存。

```javascript
<ul>
  <li>苹果</li>
  <li>香蕉</li>
  <li>凤梨</li>
</ul>;

// good
document.querySelector('ul').onclick = event => {
  const target = event.target;
  if (target.nodeName === 'LI') {
    console.log(target.innerHTML);
  }
};

// bad
document.querySelectorAll('li').forEach(e => {
  e.onclick = function () {
    console.log(this.innerHTML);
  };
});
```
