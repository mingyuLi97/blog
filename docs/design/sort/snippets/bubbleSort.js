const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 26, 2, 46, 4, 19, 50, 48];

//#region code
Array.prototype.bubbleSort = function () {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  console.log(arr);
};

//#endregion code

arr.bubbleSort();
