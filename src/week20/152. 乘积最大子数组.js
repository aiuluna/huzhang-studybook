/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function (nums) {
    const n = nums.length;
    if (n === 1) return nums[0];
    const dp = new Array(n);
    const sp = new Array(n);
    dp[0] = nums[0];
    sp[0] = nums[0];
    let res = nums[0];
    for (let i = 1; i < n; i++) {
        if (nums[i] >= 0) {
            dp[i] = Math.max(nums[i], dp[i - 1] * nums[i])
            sp[i] = Math.min(nums[i], sp[i - 1] * nums[i])
        } else {
            dp[i] = Math.max(nums[i], sp[i - 1] * nums[i])
            sp[i] = Math.min(nums[i], dp[i - 1] * nums[i])
        }
        res = Math.max(dp[i], res)
    }

    return res
};