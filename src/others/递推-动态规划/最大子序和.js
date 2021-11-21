/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * https://leetcode-cn.com/problems/maximum-subarray/
 * 
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//     const n = nums.length;
//     const dp = new Array(2).fill(0)
//     dp[0] = nums[0];

//     let max = dp[0]
//     for (let i = 1; i < n; i++) {
//         const idx = i % 2;
//         const pre_idx = (i - 1) % 2;
//         dp[idx] = Math.max(dp[pre_idx] + nums[i], nums[i])
//         max = Math.max(dp[idx], max)
//     }
//     return max
// };

var maxSubArray = function (nums) {
    const n = nums.length;
    const sum = new Array(n)
    sum[0] = nums[0];
    for (let i = 1; i < n; i++) {
        sum[i] = sum[i - 1] + nums[i];
    }
    let min = 0, result = -Infinity;
    sum.forEach(_s => {
        result = Math.max(_s - min, result)
        min = Math.min(_s, min)
    })
    
    return result
}
