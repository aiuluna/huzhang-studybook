/**
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/
 * 
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function (nums) {
    const n = nums.length;
    // 每个i位置的递增子序列最小值肯定为1，初始化后dp[0] = 1
    const dp = new Array(n).fill(1);
    let ans = 1;
    for (let i = 1; i < n; i++) {
        // 遍历i位置之前的元素，找到合法的递增子序列
        for (let j = 0; j < i; j++) {
            // 必须要j位置的值小于i位置的值才是递增
            if (nums[j] < nums[i]) {
                // dp[i]等于所有j位置的递增子序列长度+1中的最大值。
                dp[i] = Math.max(dp[j] + 1, dp[i])
            }
        }
        // ans等于所有以i为结尾的递增子序列长度中的最大值
        ans = Math.max(dp[i], ans)
    }
    return ans;
};