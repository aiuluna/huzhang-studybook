/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function (nums) {
    const n = nums.length;
    let max = 0;
    let step = 0;
    let end = 0;

    for (let i = 0; i < n - 1; i++) {
        max = Math.max(nums[i] + i, max);
        if (i === end) {
            end = max;
            step++;
        }
    }
    return step
};
