/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0];
    const dp = new Array(nums.length);
    dp[0] = nums[0];
    let res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        res = Math.max(res, dp[i])
    }
    return res;
};