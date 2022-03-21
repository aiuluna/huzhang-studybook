/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function (nums) {
  const dp = new Array(nums.length);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
      dp[i] = Math.max(dp[i-1] + nums[i], nums[i])
  }
  let res = -Infinity;
  for (let x of dp) {
      res = Math.max(res, x)
  }
  return res;
};