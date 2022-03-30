/**
 * @param {number[]} nums
 * @return {string}
 */
 var minNumber = function (nums) {
  let res = '';
  mergeSort(nums, 0, nums.length - 1);
  for (let x of nums) {
      res += x;
  }
  return res;
};

const mergeSort = function (nums, l, r) {
  if (l >= r) return;
  const mid = l + ((r - l) >> 1);
  mergeSort(nums, l, mid);
  mergeSort(nums, mid + 1, r);
  const temp = [];
  let p = l, q = mid + 1, k = 0;
  while (p <= mid || q <= r) {
      if (q > r || (p <= mid && compare(nums[p], nums[q]))) {
          temp[k++] = nums[p++];
      } else {
          temp[k++] = nums[q++];
      }
  }
  for (let i = 0; i < temp.length; i++) {
      nums[l + i] = temp[i];
  }
}

const compare = function (a, b) {
  // a在前 => 1
  const x = a.toString() + b.toString();
  const y = b.toString() + a.toString();
  if (Number(x) < Number(y)) return 1;
  return 0;
}