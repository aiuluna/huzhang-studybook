/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
	// 0 持有
	// 1 冷冻期
	// 2 不在冷冻期
	const n = prices.length;
	if (n === 1) return 0;
	const dp = new Array(n).fill(0).map(() =>new Array(3).fill(0));
	dp[0][0] = -prices[0];
	dp[0][1] = 0;
	dp[0][2] = 0;
	for (let i = 1; i < n; i++) {
			dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
			dp[i][1] = dp[i - 1][0] + prices[i];
			dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]);
	}
	return Math.max(dp[n - 1][1], dp[n - 1][2])

};