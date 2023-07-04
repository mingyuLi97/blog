const limy = {
  name: 'limy',
  say(...args) {
    console.log('name is ', this.name, ...args);
  }
};
const limy1 = {
  name: 'limy1'
};
//#region call
Function.prototype._call = function (target, ...args) {
  target = target || window;
  const key = Symbol();
  target[key] = this;
  const res = target[key](...args);
  delete target[key];
  return res;
};
//#endregion call

limy.say(1, 2);
limy.say.call(limy1, 1, 2);
limy.say._call(limy1, 1, 2);

//#region apply
Function.prototype._apply = function (target, args) {
  target = target || window;
  const key = Symbol();
  target[key] = this;
  const res = target[key](...args);
  delete target[key];
  return res;
};
//#endregion apply

limy.say._apply(limy1, [1, 2, 'apply']);

//#region bind
Function.prototype._bind = function (target, ...args) {
  target = target || window;
  const key = Symbol();
  target[key] = this;
  return function (...innerArgs) {
    const res = target[key](...args, ...innerArgs);
    // delete target[key]; // 不能删除，否则第二次调用的时候，就会出现问题。
    return res;
  };
};
//#endregion bind

limy.say.bind(limy1, 1)(2, 'bind');
const bindFn = limy.say._bind(limy1, 1);
bindFn('_bind');
bindFn('_bind');
