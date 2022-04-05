/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);
  let res = 1;
  for (let i = 1; i < nums.length; i++) {
      for (let j = i - 1; j >= 0; j--) {
          if (nums[i] > nums[j]) {
              dp[i] = Math.max(dp[j] + 1, dp[i])
          }
      }
      res = Math.max(res, dp[i])
  }
  return res;
};