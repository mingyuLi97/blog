const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 26, 2, 46, 4, 19, 50, 48];

//#region code
Array.prototype.insertionSort = function () {
  const arr = this;
  let pre, curVal;
  for (let i = 1; i < arr.length; i++) {
    pre = i - 1;
    curVal = arr[i];
    while (pre >= 0 && arr[pre] > curVal) {
      arr[pre + 1] = arr[pre];
      pre--;
    }
    arr[pre + 1] = curVal;
  }
  console.log(arr);
};
//#endregion code

arr.insertionSort();
