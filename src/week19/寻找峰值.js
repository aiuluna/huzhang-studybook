/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function (nums) {
    const n = nums.length;
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        const r = mid + 1 === n ? -Infinity : nums[mid + 1];
        const l = mid - 1 === -1 ? -Infinity : nums[mid - 1];

        if (nums[mid] > r && nums[mid] > l) {
            return mid
        } else if (nums[mid] < r) {
            left = mid + 1;
        } else {
            right = mid - 1; 
        }
    }
    return -1;

};