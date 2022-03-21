/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function (nums) {
  const dp = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
      dp[i] = i;
  }

  for (let i = 0; i < nums.length; i++) {
      for (let j = nums[i]; j > 0; j--) {
          if (i + j >= nums.length) continue;
          dp[i + j] = Math.min(dp[i + j], dp[i] + 1)
      }
  }
  return dp[nums.length - 1]

};



/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function (nums) {
  let step = 0;
  let max = 0;
  let target = nums.length - 1;
  let end = 0;

  for (let i = 0; i < nums.length - 1; i++) {
      max = Math.max(nums[i] + i, max)
      if (i === end) {
          end = max;
          step++;
      }
      if (end >= target) break;
  }
  return step;
};