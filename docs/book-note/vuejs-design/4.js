// 用一个全局变量临时存储被注册的副作用函数
let activeEffect;
const effectStack = [];

// 用于注册副作用函数
function effect(fn, options = {}) {
  const effectFn = () => {
    cleanup(effectFn);
    activeEffect = effectFn;
    effectStack.push(effectFn);
    const res = fn();
    effectStack.pop();
    activeEffect = effectStack[effectStack.length - 1];
    return res;
  };
  // activeEffect.deps 用来存储所有该副作用函数相关的依赖合集
  effectFn.deps = [];
  effectFn.options = options;
  // 用于计算属性
  if (!options.lazy) {
    // 执行副作用函数
    effectFn();
  } else {
    return effectFn;
  }
}

function cleanup(effectFn) {
  for (let i = 0; i < effectFn.deps.length; i++) {
    const deps = effectFn.deps[i];
    // 将副作用函数在 deps（依赖集合）中移除
    deps.delete(effectFn);
  }
  effectFn.deps.length = 0;
}

// 在 get 拦截函数内调用 track 函数追踪变化
function track(target, key) {
  if (!activeEffect) return;
  let depsMap = bucket.get(target);
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()));
  }
  let deps = depsMap.get(key);
  if (!deps) {
    depsMap.set(key, (deps = new Set()));
  }
  /**
   * 这里就是完成了一个双向的绑定。
   * - 每个集合里收集了副作用函数
   * - 每个副作用函数收集了自己在哪些个集合
   */
  deps.add(activeEffect);
  activeEffect.deps.push(deps);
}

function trigger(target, key) {
  const depsMap = bucket.get(target);
  if (!depsMap) return;
  const effects = depsMap.get(key);

  const effectsToRun = new Set();
  effects &&
    effects.forEach(fn => {
      if (fn !== activeEffect) {
        effectsToRun.add(fn);
      }
    });

  effectsToRun.forEach(fn => {
    if (fn.options.scheduler) {
      fn.options.scheduler(fn);
    } else {
      fn();
    }
  });
}

const bucket = new WeakMap();
const data = { foo: 1, bar: true };

const obj = new Proxy(data, {
  get(target, key) {
    // 将 activeEffect 存储的副作用函数收集到桶里
    track(target, key);
    return target[key];
  },
  set(target, key, val) {
    target[key] = val;
    // 将副作用函数从 桶 中取出来并调用
    trigger(target, key);
  }
});

let temp1, temp2;
const jobs = new Set();
const p = Promise.resolve();

let isFlushing = false;
function flushJob() {
  if (isFlushing) return;
  isFlushing = true;
  p.then(() => {
    jobs.forEach(job => job());
  }).finally(() => {
    isFlushing = false;
  });
}

effect(
  function fn1() {
    console.log('fn1 exec', obj.foo);
    // effect(function fn2() {
    //   console.log('fn2 exec', obj.bar);
    //   temp2 = obj.bar;
    // });
    // if (obj.foo < 10) {
    //   temp1 = obj.foo++;
    // }
    temp1 = obj.foo;
  },
  {
    scheduler: effectFn => {
      jobs.add(effectFn);
      flushJob();
      // setTimeout(effectFn, 1000);
    }
  }
);

obj.foo++;
obj.foo++;
obj.foo++;
console.log(`[a] `, obj);

function computed(fn) {
  let value;
  // 为计算属性提供缓存，每次访问计算属性取的都是缓存的值。 如果依赖的值有更新，会先刷新缓存 然后在返回值
  let dirty = true;
  const effectFn = effect(fn, {
    lazy: true,
    scheduler() {
      if (!dirty) {
        // 当依赖更新时，不需要执行计算 而是将 dirty=true，这样当计算属性访问时就可
        dirty = true;
        // 当计算属性依赖的响应式数据有变化时 手动调用 trigger 触发响应
        trigger(obj, 'value');
      }
    }
  });
  const obj = {
    get value() {
      if (dirty) {
        value = effectFn();
        dirty = false;
      }
      // 当读取 value 时，手动调用 track 函数进行跟踪
      track(obj, 'value');
      return value;
    }
  };
  return obj;
}

const val = computed(() => {
  console.log(`[a] dddsds`);
  return obj.bar + obj.foo;
});

// console.log(val.value);
// console.log(val.value);
// obj.foo++;
// console.log(val.value);

/**
 * 遍历对象的所有属性，这样就能触发所有属性的 get，从而实现 track
 * @param {*} obj 原始对象
 * @param {*} seen 防止重复引用
 */
function traverse(obj, seen = new Set()) {
  if (typeof obj !== 'object' || obj === null || seen.has(obj)) return obj;
  seen.add(obj);
  // 假设只有对象，其他数据结构先不处理
  for (const key in obj) {
    traverse(obj[key], seen);
  }
  return obj;
}

function watch(source, cb, option) {
  let oldVal, newVal;
  const getter = typeof source === 'function' ? source : () => traverse(source);

  const job = () => {
    newVal = effectFn();
    cb(oldVal, newVal);
    oldVal = newVal;
  };

  const effectFn = effect(() => getter(), {
    lazy: true,
    scheduler: job
  });
  if (option.immediate) {
    job();
  } else {
    oldVal = effectFn();
  }
}

watch(
  obj,
  (old, val) => {
    console.log(JSON.stringify(old), val, 123);
  },
  { immediate: false }
);
obj.foo++;
