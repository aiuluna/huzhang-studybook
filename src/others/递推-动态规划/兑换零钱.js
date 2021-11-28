/**
 * https://leetcode-cn.com/problems/gaM7Ch/
 * 
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function (coins, amount) {
    const n = amount + 1;
    const dp = new Array(n).fill(-1);

    //边界条件
    dp[0] = 0;

    for (let i = 1; i < n; i++) {
        for (let k of coins) {
            let j = i - k;
            // 金额小于当前硬币金额
            if (i < k) continue;
            // j金额没有有效性
            if (dp[j] === -1) continue;
            // 之前值是无效值或者之前值比现在j金额+1数量大，就替换成当前的较小值
            if (dp[i] === -1 || dp[i] > dp[j] + 1) dp[i] = dp[j] + 1;
        }
    }
    return dp[amount]
};