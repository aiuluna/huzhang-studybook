/**
 * @param {number[]} nums
 * @return {number}
 */
 var wiggleMaxLength = function (nums) {
  const n = nums.length;
  const diff = new Array(n - 1).fill(0);
  const dp = new Array(n).fill(1);
  let res = 0;
  dp[0] = 1;
  dp[1] = nums[1] - nums[0] !== 0 ? 2 : 1;

  for (let i = 1; i < n; i++) {
      diff[i - 1] = nums[i] - nums[i - 1];
  }

  for (let i = 0; i < n; i++) {
      for (let j = i - 2; j >= 0; j--) {
          if ((diff[i - 1] > 0 && diff[j] <= 0) || (diff[i - 1] < 0 && diff[j] >= 0)) {
              dp[i] = Math.max(dp[i], dp[j + 1] + 1)
          }
      }
      res = Math.max(dp[i], res)
  }

  return res;
};




/**
 * @param {number[]} nums
 * @return {number}
 */
 var wiggleMaxLength = function (nums) {
  const n = nums.length;
  if (n <= 1) return n;
  const up = new Array(n).fill(1);
  const down = new Array(n).fill(1);
  let res = 1;

  for (let i = 1; i < n; i++) {
      if (nums[i] > nums[i - 1]) {
          up[i] = up[i - 1];
          down[i] = Math.max(up[i - 1] + 1, down[i - 1])
      } else if (nums[i] < nums[i - 1]) {
          up[i] = Math.max(up[i - 1], down[i - 1] + 1);
          down[i] = down[i - 1];
      } else {
          up[i] = up[i - 1];
          down[i] = down[i - 1];
      }
      res = Math.max(down[i], up[i])
  }
  return res;
};