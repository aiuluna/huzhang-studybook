/**
 * 滑动窗口
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
 var minOperations = function (nums, x) {
    const sums = [0];
    for (let i = 0; i < nums.length; i++) {
        sums[i + 1] = sums[i] + nums[i];
    }
    const target = sums[nums.length] - x;
    if (target < 0) return -1;
    let left = 0, right = 0, maxPort = -1;
    while (left < sums.length) {
        if (right < sums.length) {
            right++;
        }
        if (right === sums.length) break;
        while (sums[right] - sums[left] > target && left < sums.length) {
            left++;
        }
        if (sums[right] - sums[left] === target) maxPort = Math.max(maxPort, right - left);
    }
    return maxPort === -1 ? -1 : (nums.length - maxPort)
};