const arr = [1, 2, [3, 4, 5, [6, 7, 8], 9], 10, [11, 12]];

//#region es6
arr.flat(Infinity);
//#endregion es6

//#region recursion
function flat(arr, deep = Infinity) {
  const _arr = [];
  function run(item, d) {
    if (Array.isArray(item) && d <= deep) {
      item.forEach(v => run(v, d + 1));
    } else {
      _arr.push(item);
    }
  }
  run(arr, 0);
  return _arr;
}
//#endregion recursion

console.log(flat(arr, 0));
