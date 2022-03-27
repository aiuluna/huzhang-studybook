/**
 * @param {number} n
 * @return {number}
 */
 var nthUglyNumber = function (n) {
  const dp = new Array(n);
  dp[0] = 1;
  let x = 0, y = 0, z = 0;
  for (let i = 1; i < n; i++) {
      dp[i] = Math.min(dp[x] * 2, dp[y] * 3, dp[z] * 5);
      if (dp[i] === dp[x] * 2) x++;
      if (dp[i] === dp[y] * 3) y++;
      if (dp[i] === dp[z] * 5) z++;
  }
  return dp[n - 1]
};