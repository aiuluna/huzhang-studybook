/**
 * prices = [1,2,3,0,2]
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	const n = prices.length
	if (n === 1) return 0
	const dp = new Array(n)
	let min = Math.min(prices[0], prices[1]),
		res = 0
	dp[0] = 0
	dp[1] = prices[1] - prices[0] > 0 ? prices[1] - prices[0] : 0
	for (let i = 1; i < n; i++) {
		if (min - prices[i] > prices[i]) {
		}
	}
}
