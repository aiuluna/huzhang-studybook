/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
 var minimumSize = function (nums, maxOperations) {
  let l = 1, r = 0;
  for (let x of nums) {
      r = r > x ? r : x
  }
  const ans = bs(nums, l, r, maxOperations);
  return ans;
};

// 查询球分成 1 -> 最大值 中哪个值最好
var bs = function (nums, l, r, n) {
  if (l === r) return l;
  const mid = (l + r) >> 1;
  const x = f(nums, mid);
  // console.log('mid==>', mid, '===x===>', x)
  // 步数小于，说明球分的大了，需要减小
  if (x <= n) {
      r = mid;
  } else {
      l = mid + 1;
  }
  return bs(nums, l, r, n)
}

// 给定最小开销是X，需要y步
var f = function (nums, x) {
  let count = 0;
  for (let item of nums) {
      count +=  (Math.floor(item / x) + (item % x ? 1 : 0) - 1)
  }
  return count;
}