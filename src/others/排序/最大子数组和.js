/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function (nums) {
    const sum = new Array(nums.length + 1);
    sum[0] = 0;
    for (let i = 0; i < nums.length; i++) {
        sum[i + 1] = sum[i] + nums[i]
    }
    let min = 0, max = -Infinity;
    for (let i = 1; i < sum.length; i++) {
        // max要先算，因为要找前面的最小前缀和，不能min等于自己，这样是无效值
        max = Math.max(max, sum[i] - min)
        min = Math.min(min, sum[i])
    }
    return max
};