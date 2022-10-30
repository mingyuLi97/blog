# 防抖、节流

<script setup>
import DebounceAndThrottle from '@components/DebounceAndThrottle.vue'
</script>

## 防抖

在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。

#### 适用场景

- input 标签支持搜索联想时，用户在不断输入值时，用防抖来节约请求资源。
- window 触发 resize 的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次

#### 实现

```js
function debounce(fn, wait = 500, immediate = true) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);

    if (immediate && !timer) {
      fn.apply(this, args);
      timer = setTimeout(function () {}, 0);
      return;
    }

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
```

<DebounceAndThrottle type='debounce'/>

## 节流

规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。

#### 适用场景

- 鼠标不断点击触发，`mousedown` 事件单位时间内只触发一次
- 监听滚动事件，比如是否滑到底部自动加载更多，用 throttle 来判断

#### 实现

```js
function throttle(fn, time = 1000) {
  let prev = +new Date();
  let cur = 0;

  return function (...args) {
    const context = this;
    cur = +new Date();
    if (cur - prev >= time) {
      prev = cur;
      fn.apply(context, args);
    }
  };
}

// 保证最后一次一定执行
function throttle1(fn, time) {
  let pre = new Date().getTime();
  let timer = null;
  return function (...args) {
    const now = new Date().getTime();
    if (now >= pre + time) {
      fn.apply(this, args);
      pre = now;
    } else {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, time);
    }
  };
}
```

<DebounceAndThrottle type='throttle'/>
