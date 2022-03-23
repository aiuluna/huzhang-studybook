/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
    const n = prices.length
    if (n === 0) return 0
    const dp = new Array(n)
    dp[0] = 0
    let min = prices[0]
    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], prices[i] - min);
        min = Math.min(min, prices[i])
    }
    return dp[n - 1] > 0 ? dp[n - 1] : 0;
}
