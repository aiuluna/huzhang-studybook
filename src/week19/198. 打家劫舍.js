/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  const dp = new Array(2).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
      const pre_pre = (i - 2) % 2;
      const pre = (i - 1) % 2;
      dp[i % 2] = Math.max(dp[pre_pre] + nums[i], dp[pre])
  }

  return dp[(nums.length - 1) % 2]
};