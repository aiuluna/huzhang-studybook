/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function (nums) {
    const preSums = [];
    preSums[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        preSums[i] = preSums[i - 1] + nums[i]
    }

    let min = 0, res = -Infinity;
    for (let i = 0; i < preSums.length; i++) {
        res = Math.max(preSums[i] - min, res);
        min = Math.min(preSums[i], min);
    }
    return res
};


/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function (nums) {
    if (nums.length === 1) return nums[0];
    const dp = [];
    dp[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    }

    let res = -Infinity;
    for (let i = 0; i < dp.length; i++) {
        res = Math.max(res, dp[i])
    }

    return res
};