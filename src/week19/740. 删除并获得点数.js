/**
 * @param {number[]} nums
 * @return {number}
 */
 var deleteAndEarn = function(nums) {
  let max = 0;
  for (let x of nums) max = Math.max(max, x);
  const sums = new Array(max + 1).fill(0);
  for (let x of nums) sums[x] += x;

  let pre_pre = sums[0];
  let pre = Math.max(sums[0], sums[1]);

  for (let i = 2; i <= max; i++) {
      const cur = Math.max(pre, pre_pre + sums[i]);
      pre_pre = pre;
      pre = cur;
  }
  return pre;
};