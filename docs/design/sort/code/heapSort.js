const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 26, 2, 46, 4, 19, 50, 48];

//#region code
Array.prototype.heapSort = function () {
  const arr = this;
  let len = arr.length;

  function swap(a, b) {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }

  function heap(i) {
    let maxIndex = i;
    let lIndex = i * 2 + 1;
    let rIndex = i * 2 + 2;
    if (lIndex < len && arr[lIndex] < arr[maxIndex]) {
      maxIndex = lIndex;
    }
    if (rIndex < len && arr[rIndex] < arr[maxIndex]) {
      maxIndex = rIndex;
    }

    if (i !== maxIndex) {
      swap(i, maxIndex);
      heap(maxIndex);
    }
  }

  function buildHeap() {
    for (let i = len >> 1; i >= 0; i--) {
      heap(i);
    }
  }
  buildHeap();
  console.log(arr);

  for (let i = len - 1; i > 0; i--) {
    swap(0, i);
    len--;
    heap(0);
  }
  console.log(arr);
};

//#endregion code

arr.heapSort();
