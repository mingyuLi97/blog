# 原型和原型链

1. 1

```js
var A = function () {};
A.prototype.n = 1;
var b = new A();
A.prototype = {
  n: 2,
  m: 3
};
var c = new A();

console.log(b.n);
console.log(b.m);

console.log(c.n);
console.log(c.m);
```

> 1 undefined 2 3

```js
var F = function () {};

Object.prototype.a = function () {
  console.log('a');
};

Function.prototype.b = function () {
  console.log('b');
};

var f = new F();

f.a();
f.b();

F.a();
F.b();
```

> a b a b

```js
function Person(name) {
  this.name = name;
}
let p = new Person('Tom');
console.log(p.__proto__);
console.log(Person.__proto__);
```

> Person.construct Function.prototype

```js
var foo = {},
  F = function () {};
Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

console.log(foo.a);
console.log(foo.b);
console.log(F.a);
console.log(F.b);

// a undefined a b
```
