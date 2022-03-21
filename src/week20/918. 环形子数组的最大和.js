/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubarraySumCircular = function (nums) {
  const dp = new Array(nums.length);
  const sp = new Array(nums.length);
  let sum = nums[0];
  dp[0] = nums[0];
  sp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
      dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
      sp[i] = Math.min(nums[i], sp[i - 1] + nums[i]);
      sum += nums[i];
  }
  let max = -Infinity, min = Infinity;
  for (let i = 0; i < nums.length; i++) {
      max = Math.max(max, dp[i])
      min = Math.min(min, sp[i])
  }

  return max > 0 ? Math.max(max, sum - min) : max
};