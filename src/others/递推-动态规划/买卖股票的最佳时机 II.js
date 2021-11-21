/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 * 
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
    const n = prices.length;
    if (n === 1) return 0;
    const dp = new Array(2).fill(0).map(() => new Array(2).fill(0))
    dp[0][0] = 0;
    dp[0][1] = 0 - prices[0];
    dp[1][0] = Math.max(0, prices[1] - prices[0]);
    dp[1][1] = 0 - Math.min(prices[1], prices[0]);
    let max = Math.max(dp[1][0], dp[0][0]);
    for (let i = 2; i < n; i++) {
        const idx = i % 2;
        const pre_idx = (i - 1) % 2;
        // 当前没持股的成本
        dp[idx][0] = Math.max(dp[pre_idx][0], dp[pre_idx][1] + prices[i]);
        max = Math.max(dp[idx][0], max)
        // 当前持股
        dp[idx][1] = Math.max(dp[pre_idx][0] - prices[i], dp[pre_idx][1])
    }
    console.log(dp)
    return max
};