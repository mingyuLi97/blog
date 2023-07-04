//#region snippet
let pending = false;
const callbacks = [];

function nextTick(cb) {
  callbacks.push(cb);
  if (!pending) {
    pending = true;
    Promise.resolve().then(flushCallbacks);
  }
}

function flushCallbacks() {
  pending = false;
  const copies = callbacks.slice(0);
  callbacks.length = 0;
  copies.forEach(cb => cb());
}
//#endregion snippet

console.log(1);
console.log(2);
nextTick(() => console.log(3));
nextTick(() => console.log(4));
console.log(5);

// 1 2 5 3 4
