/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
 var maxProfit = function (prices, fee) {
  const n = prices.length;
  if (n === 1) return 0;
  const dp = new Array(n).fill(0).map(() => new Array(2).fill(0));
  // 0 未持有股票
  // 1 持有股票

  dp[0][0] = 0;
  dp[0][1] = -prices[0];
 
  for (let i = 1; i < n; i++) {
      dp[i][0] = Math.max(dp[i-1][1] + prices[i] - fee, dp[i-1][0]);
      dp[i][1] = Math.max(dp[i-1][0] - prices[i], dp[i-1][1])
  }
  return Math.max(dp[n - 1][0], dp[n - 1][1])
};