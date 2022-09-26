const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 26, 2, 46, 4, 19, 50, 48];

//#region code
Array.prototype.mergeSort = function () {
  const arr = this;
  function split(arr) {
    if (arr.length < 2) {
      return arr;
    }
    const mid = arr.length >> 1;
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(split(leftArr), split(rightArr));
  }

  /**
   * @description:
   * @param {Array<number>} lArr
   * @param {Array<number>} rArr
   * @return {*}
   */
  function merge(lArr, rArr) {
    const res = [];
    while (lArr.length && rArr.length) {
      res.push(lArr[0] >= rArr[0] ? rArr.shift() : lArr.shift());
    }

    while (lArr.length) {
      res.push(lArr.shift());
    }

    while (rArr.length) {
      res.push(rArr.shift());
    }
    return res;
  }
  console.log(split(arr));
};
//#endregion code

arr.mergeSort();
