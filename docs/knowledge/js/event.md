# addEventListener

## 语法

```js
addEventListener(type, listener);
addEventListener(type, listener, options);
addEventListener(type, listener, useCapture);
```

## 参数

- **type**

  表示监听[事件类型](https://developer.mozilla.org/zh-CN/docs/Web/Events)的字符串。

- **listener**

  回调函数

- **useCapture**

  - true - 事件捕获模式
  - false - 事件冒泡模式

- **options**

  - capture：一个布尔值，是否由捕获阶段开始传播
  - once：一个布尔值，表示只监听一次
  - signal： AbortSignal  的 abort() 方法被调用时，监听器会被移除
  - passive：一个布尔值，设置为 `true` 时，表示 listener  永远不会调用 `preventDefault()`。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。

:::tip 重点了解下 passive
在触发一个事件的时候，浏览器并不知道用户是否会调用 preventDefault()，它需要等到事件处理函数执行完后，才能去执行默认行为，这样就会造成一定的卡顿。
在大部分页面中，我们是不会主动调用 preventDefault()，这个方法的，但是浏览器仍然会等待，
利用这一点，我们可以将 passive 设置为 true 以优化滚动的流畅度。

:::details

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>passive</title>
    <style>
      * {
        padding: 0;
        margin: 0;
        outline: 0;
      }
      .container {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }

      .box {
        box-sizing: border-box;
        width: 200px;
        height: 300px;
        overflow: scroll;
        margin-top: 20px;
      }

      #boxL {
        background-color: pink;
      }
      #boxL::before {
        content: '1111';
        position: absolute;
        top: -20px;
      }

      #boxR {
        background-color: rgb(255, 253, 192);
      }
      span {
        display: block;
        width: 100%;
        height: 50px;
        text-align: center;
      }
      span:nth-of-type(odd) {
        background-color: red;
      }
    </style>
  </head>
  <body>
    <div class="container">
      passive: true
      <div id="boxL" class="box"></div>
      passive: false
      <div id="boxR" class="box"></div>
    </div>
    <div id="count"></div>
    <script>
      function createSpan(i) {
        const span = document.createElement('span');
        span.innerText = i;
        return span;
      }
      for (let i = 0; i < 10; i++) {
        boxL.appendChild(createSpan(i));
        boxR.appendChild(createSpan(i));
      }
      function handle() {
        let i = 10000;
        while (i-- > 0) {
          count.innerText = i;
        }
      }

      boxL.addEventListener(
        'touchmove',
        e => {
          handle();
          // e.preventDefault();
        },
        {
          passive: true
        }
      );

      boxR.addEventListener(
        'touchmove',
        e => {
          handle();
          // e.preventDefault();
        },
        {
          passive: false
        }
      );
    </script>
  </body>
</html>
```

:::

## DOM 事件流

#### DOM 事件流的 3 个阶段 (假定点击了盒子 c)

- 捕获阶段 - 向内传播
  - a => b => c
- 目标阶段
  - c
- 冒泡阶段 - 向外传播
  - c => b => a

#### 执行顺序

- 先捕获后冒泡
- 在执行目标阶段时，执行顺序按照注册顺序执行

#### 为什么一般在冒泡阶段, 而不是在捕获阶段注册监听?

在日常开发中，大多数情况下我们更希望事件先在目标元素上被处理完毕，再逐层向上传递，从而更好地控制事件的处理过程。而如果在捕获阶段注册事件监听函数，则可能会在目标元素上方的元素上先被触发，从而导致意料之外的结果。

:::details 演示代码

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

:::

## e.target 和 e.currentTarget

- `e.target`: 表示触发事件的元素，即事件最初发生的元素
- `e.currentTarget`:表示绑定事件的元素，即事件处理函数所在的元素。

:::details

```html
<div id="outer">
  <div id="inner">
    <button id="button">Click me</button>
  </div>
</div>
<script>
  var outer = document.getElementById('outer');
  var inner = document.getElementById('inner');
  var button = document.getElementById('button');

  outer.addEventListener('click', function (e) {
    console.log('Outer clicked');
    console.log('e.target:', e.target);
    console.log('e.currentTarget:', e.currentTarget);
    console.log('\n');
  });

  inner.addEventListener('click', function (e) {
    console.log('Inner clicked');
    console.log('e.target:', e.target);
    console.log('e.currentTarget:', e.currentTarget);
    console.log('\n');
  });

  button.addEventListener('click', function (e) {
    console.log('Button clicked');
    console.log('e.target:', e.target);
    console.log('e.currentTarget:', e.currentTarget);
    console.log('\n');
  });
</script>
```

![](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202303201907575.png)
:::

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

## handleEvent

我们在监听事件时，通常是传递函数，其实也可以通过[对象](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventListener)的方式完成。

```js
// 定义一个事件处理对象
const eventHandler = {
  attr: 1,
  // 事件处理函数
  handleEvent(event) {
    console.log(this.attr);
    console.log(`Event type: ${event.type}, target: ${event.target.id}`);
  }
};

// 为元素添加事件监听
el.addEventListener('click', eventHandler);
```

#### 优势

1. this 指向，普通函数的方式指向的是被监听的元素，handleEvent 方式指向的是传入的对象。因此能更方便的访问对象上的属性。
2. 在更换监听事件时仅需要执行 `obj.handleEvent = newFn;`，而不用先 remove 再 add。

## 参考

- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)
