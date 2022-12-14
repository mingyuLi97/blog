//#region all
/**
 * @param {Promise[]} promises
 */
Promise.all = promises => {
  const arr = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((p, idx) => {
      //
      Promise.resolve(p)
        .then(res => {
          arr[idx] = res;
          if (++count === promises.length) {
            resolve(arr);
          }
        })
        .catch(reject);
    });
  });
};
//#endregion all

//#region race
Promise.race = promises => {
  return new Promise((resolve, reject) => {
    promises.forEach(p => Promise.resolve(p).then(resolve, reject));
  });
};
//#endregion race

//#region any
Promise.any = promises => {
  const errs = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((p, idx) => {
      Promise.resolve(p).then(resolve, err => {
        errs[idx] = err;
        if (++count === promises.length) {
          reject(new AggregateError(errs));
        }
      });
    });
  });
};
//#endregion any

//#region allSettled
Promise.allSettled = promises => {
  /**
   * @type {{status: 'fulfilled' | 'rejected', reason?: any, value?:any}[]}
   */
  const arr = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((p, idx) => {
      Promise.resolve(p)
        .then(res => {
          arr.push({
            status: 'fulfilled',
            value: res
          });
        })
        .catch(err => {
          arr.push({
            status: 'rejected',
            reason: err
          });
        })
        .finally(e => {
          if (++count === promises.length) {
            resolve(arr);
          }
        });
    });
  });
};
//#endregion allSettled

function createTest() {
  const p1 = Promise.resolve('p1');

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p2 延时一秒');
    }, 1000);
  });

  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p3 延时两秒');
    }, 2000);
  });

  const p4 = Promise.reject('p4 rejected');

  const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('p5 rejected 延时1.5秒');
    }, 1500);
  });
  return [p1, p2, p3, p4, p5];
}

export function runPromiseAll() {
  console.log('---------------- Promise.all ---------------------');
  const [p1, p2, p3, p4, p5] = createTest();
  // 所有Promise实例都成功
  Promise.all([p1, p2, p3])
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err)); // 2秒后打印 [ 'p1', 'p2 延时一秒', 'p3 延时两秒' ]

  // 一个Promise实例失败
  Promise.all([p1, p2, p4])
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err)); // p4 rejected

  // 一个延时失败的Promise
  Promise.all([p1, p2, p5])
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err)); // 1.5秒后打印 p5 rejected

  // 两个Promise实例失败
  Promise.all([p1, p4, p5])
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err)); // p4 rejected
}

export function runPromiseRace() {
  console.log('---------------- Promise.race ---------------------');
  const [p1, p2, p3, p4, p5] = createTest();
  // p1无延时，p2延时1s，p3延时2s
  Promise.race([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.log(err)); // p1

  // p4无延时reject
  Promise.race([p4, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.log(err)); // p4 rejected

  // p5 延时1.5秒reject，p2延时1s
  Promise.race([p5, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.log(err)); // 1s后打印: p2 延时一秒
}

export function runPromiseAny() {
  console.log('---------------- Promise.any ---------------------');
  const [p1, p2, p3, p4, p5] = createTest();

  // 所有 Promise 都成功
  Promise.any([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.log(err)); // p1

  // 两个 Promise 成功
  Promise.any([p1, p2, p4])
    .then(res => console.log(res))
    .catch(err => console.log(err)); // p1

  // 只有一个延时成功的 Promise
  Promise.any([p2, p4, p5])
    .then(res => console.log(res))
    .catch(err => console.log(err)); // p2 延时1秒

  // 所有 Promise 都失败
  Promise.any([p4, p5])
    .then(res => console.log(res))
    .catch(err => console.log(err)); // AggregateError: All promises were rejected
}

export function runPromiseAllSettled() {
  console.log('---------------- Promise.allSettled ---------------------');
  const [p1, p2, p3, p4, p5] = createTest();
  // 所有 Promise 实例都成功
  Promise.allSettled([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.log(err));
  // [
  //   { status: 'fulfilled', value: 'p1' },
  //   { status: 'fulfilled', value: 'p2 延时一秒' },
  //   { status: 'fulfilled', value: 'p3 延时两秒' }
  // ]

  // 有一个 MyAllSettled 失败
  Promise.allSettled([p1, p2, p4])
    .then(res => console.log(res))
    .catch(err => console.log(err));
  // [
  //   { status: 'fulfilled', value: 'p1' },
  //   { status: 'fulfilled', value: 'p2 延时一秒' },
  //   { status: 'rejected' , value: 'p4 rejected' }
  // ]

  // 所有 MyAllSettled 都失败
  Promise.allSettled([p4, p5])
    .then(res => console.log(res))
    .catch(err => console.log(err));
  // [
  //   { status: 'rejected', reason: 'p4 rejected' },
  //   { status: 'rejected', reason: 'p5 rejected 延时1.5秒' }
  // ]
}

//#region main

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class _Promise {
  /**
   * @param {ConstructorParameters<PromiseConstructor>[0]} executor
   */
  constructor(executor) {
    this.value = null;
    this.reason = null;
    this.status = PENDING;

    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    // 使用箭头函数防止 this 指向有问题
    this.resolve = val => {
      if (this.status === PENDING) {
        this.value = val;
        this.status = FULFILLED;
        while (this.onFulfilledCallbacks.length) {
          this.onFulfilledCallbacks.shift()(val);
        }
      }
    };
    this.reject = reason => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;
        while (this.onRejectedCallbacks.length) {
          this.onRejectedCallbacks.shift()(val);
        }
      }
    };
    executor(this.resolve, this.reject);
  }

  /**
   * @param {(v)=>void} onFulfilled
   * @param {(r) => void} onRejected
   */
  then(onFulfilled, onRejected) {
    debugger;
    // 为了实现链式调用，直接返回一个新的 promise
    const promise2 = new _Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        const res = onFulfilled(this.value);
        resolvePromise(res, resolve, reject);
      } else if (this.status === REJECTED) {
        onRejected(this.reason);
      } else if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(onFulfilled);
        this.onRejectedCallbacks.push(onRejected);
      }
    });

    return promise2;
  }
}
/**
 * 如果是普通值直接 resolve 返回， 如果是 promise 对象，那么将 resolve 和 reject 方法透传到下一层
 * @param {*} v 传的值 可能是 promise 对象 也有可能是普通值
 * @param {*} resolve
 * @param {*} reject
 * @return {*}
 */
function resolvePromise(v, resolve, reject) {
  if (v instanceof _Promise) {
    v.then(resolve, reject);
  } else {
    resolve(v);
  }
}

function runCustomPromise() {
  const p = new _Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
    // reject(new Error('reject error!!!'));
  });

  p.then(value => {
    console.log(1);
    console.log('resolve', value);
    return 222;
  }).then(value => {
    console.log(2);
    console.log('resolve', value);
  });
}

// runCustomPromise();

//#endregion main
