const data = { foo: 1, bar: true };
const obj = new Proxy(data, {
  // 拦截 obj.foo
  get(target, key) {
    return target[key];
  },
  // 拦截 'foo' in obj
  has(target, key) {
    return Reflect.has(target, key);
  },
  //拦截 for (const k in obj) {}
  ownKeys(target) {
    return Reflect.ownKeys(target);
  }
});

for (const k in obj) {
}
