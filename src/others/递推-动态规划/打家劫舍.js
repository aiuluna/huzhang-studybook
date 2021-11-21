/**
 * https://leetcode-cn.com/problems/house-robber/
 * 
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    // dp[i] = max(dp[i-1], dp[i-2]+nums[i])

    const n = nums.length;
    if (n === 1) return nums[0]
    const dp = new Array(3)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < n; i++) {
        const idx = i % 2;
        const idx_pre = (i - 1) % 2;
        const idx_pre_pre = (i - 2) % 2
        dp[idx] = Math.max(dp[idx_pre], dp[idx_pre_pre]+nums[i])
    }
    return dp[(n - 1) % 2]
};