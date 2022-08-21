# 函数柯里化

## 实现 sum(1, 2)(3, 4)(5).sumOf()

```js
const currying = function (fn, ...args) {
  return function (...innerArgs) {
    let argArr = [...args, ...innerArgs];
    if (fn.length === argArr.length) {
      return fn.apply(this, argArr);
    } else {
      return currying(fn, ...argArr);
    }
  };
};

function _sum(a, b, c, d, e) {
  return {
    sumOf() {
      return a + b + c + d + e;
    }
  };
}
const sum = currying(_sum);
```
