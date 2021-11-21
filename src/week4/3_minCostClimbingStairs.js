/**
 * 使用最小花费爬楼梯
 * https://leetcode-cn.com/problems/min-cost-climbing-stairs/
 * 
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    const dp = []
    dp[0] = 0;
    dp[1] = 0;
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min((dp[i - 1] + cost[i - 1]), (dp[i - 2] + cost[i - 2]))
    }
    return dp[n]
};