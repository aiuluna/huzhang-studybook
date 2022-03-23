/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
    const n = prices.length;
    if (n === 1) return 0;

    let min = prices[0], res = 0;
    for (let i = 1; i < n; i++) {
        if (prices[i] > min) {
            res += prices[i] - min;
        }
        min = prices[i];
    }
    return res;
};