/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function (n) {
  if (n <= 1) return n;
  const dp = new Array(n);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
      dp[i % 3] = dp[(i - 1) % 3] + dp[(i - 2) % 3];
  }
  return dp[n % 3]
};