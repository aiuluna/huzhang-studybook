/**
 * @param {number} n
 * @return {number}
 */
 var fib = function (n) {
  if (n <= 1) return n;
  const dp = new Array(n);

  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n]
};