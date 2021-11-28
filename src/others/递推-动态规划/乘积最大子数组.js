/**
 * @param {number[]} nums
 * @return {number}
 * 
 * https://leetcode-cn.com/problems/maximum-product-subarray/
 * 
 */
 var maxProduct = function (nums) {
    // 初始化结果为最小值，iMax = iMin = 1，这样dp[0]就等于nums[0]
    let ans = -Infinity, iMax = 1, iMin = 1;

    for (let i = 0; i < nums.length; i++) {
        // 负数就将最大最小值对调
        if (nums[i] < 0) {
            const temp = iMax;
            iMax = iMin;
            iMin = temp;
        }
        // 最大值
        iMax = Math.max(nums[i] * iMax, nums[i]);
        // 最小值
        iMin = Math.min(nums[i] * iMin, nums[i]);
        
        ans = Math.max(iMax, ans);
    }
    return ans;
};