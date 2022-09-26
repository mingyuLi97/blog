const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 26, 2, 46, 4, 19, 50, 48];

//#region code
Array.prototype.selectionSort = function () {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min === i) continue;
    const tmp = arr[i];
    arr[i] = arr[min];
    arr[min] = tmp;
  }
  console.log(arr);
};
//#endregion code

arr.selectionSort();
