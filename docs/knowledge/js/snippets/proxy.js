//#region code1
function code1() {
  const obj = { name: 'limy' };
  const handler = {
    get(obj, property) {
      console.log('get', obj, property);
      return obj[property];
    },
    set(obj, property, value) {
      console.log('set', obj, property);
      obj[property] = value;
    }
  };

  const proxy = new Proxy(obj, handler);

  console.log(proxy.name); // limy
  proxy.name = 'ccc';
  console.log(proxy.name); // ccc

  // 注意
  Proxy.prototype; // undefined

  proxy.__proto__ === Object.prototype; // true
}
//#endregion code1

const parent = {
  name: 'parent limy',
  get value() {
    return this.name;
  }
};

const obj = {
  name: 'limy',
  age: 19
};
const handler = {
  get(obj, property, receiver) {
    console.log('get', obj, property, receiver);
    return obj[property];
    // return Reflect.get(obj, property, receiver);
  },
  set(obj, property, value, receiver) {
    console.log('set', obj, property);
    return (obj[property] = value);
    return Reflect.set(obj, property, value, receiver);
  }
};
Object.setPrototypeOf(obj, parent);

const proxy = new Proxy(obj, handler);

console.log(proxy.name); // limy
// proxy.name = 'ccc';
console.log(proxy.name); // ccc

console.log(Proxy.prototype); // undefined

console.log(proxy.__proto__ === Object.prototype); // true

proxy.age = 14;

console.log(obj.name);
console.log(proxy.name);

// obj.log(); // this 指向 obj
// proxy.log(); // this 指向 proxy

// #region snippet
function foo() {
  const parent = {
    name: 'parent1',
    // 如果不用Reflect用 target 访问时 this 指向会错误  取 value 时是正常的  但是 name 改变时会有问题
    get value() {
      return this.name;
    }
  };

  const proxy = new Proxy(parent, {
    get(target, key, receiver) {
      // return Reflect.get(target, key);
      return target[key];
    }
  });

  const obj = {
    name: 'obj1'
  };

  // 设置obj继承与parent的代理对象proxy
  Object.setPrototypeOf(obj, proxy);

  console.log(obj.value); // parent1
}
// #endregion snippet

export default foo;
