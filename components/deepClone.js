const test = { a: data };
// 测试数据
var data = {
  a: 'string',
  b: 123,
  c: true,
  d: undefined,
  e: null,
  f: {
    name: 'limy',
    age: 18,
    likes: {
      ball: ['足球', '篮球']
    }
  },
  regExp: /\w/gi,
  symbol: Symbol('abc'),
  bigInt: BigInt(9007199254740991),
  arr: [1, 'ddd', { a: 1 }],
  fn: function () {
    console.log('in function');
    return;
  },
  date: new Date(),
  m: null,
  err: new Error('ccc')
};

data.m = data;

function deepClone(obj, hash = new WeakMap()) {
  // 处理 boolean number string undefined null bigint symbol
  if (typeof obj !== 'object' || obj == null) return obj;

  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Error) return new Error(obj);

  if (hash.has(obj)) return hash.get(obj);

  const target = new obj.constructor(); // 通过原型创建出实例，可能为 {}、[] 等
  hash.set(obj, target);

  for (let k in obj) {
    if (Object.hasOwnProperty.call(obj, k)) {
      target[k] = deepClone(obj[k], hash);
    }
  }

  return target;
}
const cloneData = deepClone(data);

data.regExp = /ccc/g;
data.arr = [];
data.bigInt = BigInt(4);
data.date = new Date(122);
data.symbol = Symbol(222);
data.err = new Error('1111');

console.log(`[deepClone] data`, data);
console.log(`[deepClone] cloneData`, cloneData);
