/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  if (k === 0) return [];
  if (k > arr.length) return arr;
  fastSort (arr, 0, arr.length - 1);
  return arr.slice (0, k);
};

var fastSort = function (arr, l, r, k) {
  if (l >= r) return;
  const parttern = arr[r];
  let i = l - 1, j = l;
  while (j <= r - 1) {
    if (arr[j] <= parttern) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    j++;
  }
  [arr[i + 1], arr[r]] = [arr[r], arr[i + 1]];
  if (i + 1 === k) return;
  else if (i + 1 < k) {
    fastSort (arr, i + 1, k - i - 1);
  } else {
    fastSort (arr, l, i, k);
  }
};
