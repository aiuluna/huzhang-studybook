/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function (n) {
  if (n <= 1) return n;
  if (n === 2) return 1;
  const dp = new Array(4);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i <= n; i++) {
      dp[i % 4] = dp[(i - 3) % 4] + dp[(i - 2) % 4] + dp[(i - 1) % 4];
  }
  return dp[n % 4]
};