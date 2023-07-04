// function* gen() {
//   const x = yield 1;
//   console.log(x);
//   const y = yield '1';
//   console.log(y);
//   return null;
// }

// for (const g of gen()) {
//   console.log(g);
// }

// console.log(g.next());  // { value: 1, done: false }
// console.log(g.next());  // x: undefined   { value: '1', done: false }
// console.log(g.next());  // y: undefined   { value: null, done: true }
// console.log(g.next());  // { value: undefined, done: true }
// console.log(g.next());  // { value: undefined, done: true }

// function* gen() {
//   const x = yield 1;
//   console.log(x);
// }
// const g = gen();
// console.log(g.next()); // { value: 1, done: false }
// console.log(g.next()); // x: undefined   { value: '1', done: false }

// function* generatorFn(i) {
//   console.log('i: ', i);
//   const j = 5 * (yield i * 10);
//   console.log('j: ', j);
//   const k = yield (2 * j) / 4;
//   console.log('k: ', k);
//   return i + j + k;
// }

// const gen = generatorFn(10);
// console.log(gen.next(20)); // i: 10  { value: 100, done: false }
// console.log(gen.next(10)); // j: 50  { value: 25, done: false }
// console.log(gen.next(5)); // k: 5   { value: 65, done: true }

// function fn(v) {
//   console.log(`in fn: `, v);
//   return v;
// }

// function* generator(x) {
//   console.log('x', x);
//   const a = yield fn(x);
//   console.log('a', a);
//   console.log('b', yield fn(x));
//   console.log('c', yield fn(a));
// }

// const gen = generator(1);
// gen.next();
// gen.next();
// gen.next();
// gen.next(222);

// function request(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(delay);
//     }, delay);
//   });
// }

// function* genRequest() {
//   yield request(1000);
//   console.log(`[async-await] 0`);
//   yield request(1000);
//   console.log(`[async-await] 1`);

//   yield request(1000);
//   console.log(`[async-await] 2`);
// }

// // const g = genRequest();
// // g.next().value.then(res => {
// //   g.next().value.then(res => {
// //     g.next().value.then(res => {
// //       g.next();
// //       // g.next().value.then(res => {});
// //     });
// //   });
// // });

// /**
//  * @description:
//  * @param {Generator<any, void, any>} fn
//  * @return {*}
//  */
// function generatorFn(fn) {
//   const gen = fn();

//   const _call = res => {
//     const { done, value } = gen.next(res);
//     if (done) return;
//     value.then(_call);
//   };
//   _call(null);
// }

// generatorFn(genRequest);

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
console.log(g.next()); // { value: 1, done: false }
console.log(g.return(4)); // { value: 4, done: true }
console.log(g.next()); // { value: undefined, done: true }
