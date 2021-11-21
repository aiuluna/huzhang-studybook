/**
 * 买卖股票的最佳时机
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * 
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 * 
 * @param {number[]} prices
 * @return {number}
 */
 /**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = Infinity;
    let maxProfit = 0;
    const n = prices.length;

    for (let i = 0; i < n; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else {
            maxProfit = Math.max(prices[i] - min, maxProfit) ;
        }
    }
    return maxProfit
};

const result = maxProfit([7,1,5,3,6,4])