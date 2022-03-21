/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function (nums, target) {
    if (nums[0] > target || nums[nums.length - 1] < target) return 0;
    const first = bs_first(nums, target);
    const last = bs_last(nums, target);
    return last - first + 1;
};

var bs_last = function (nums, target) {
    let l = 0, r = nums.length - 1, mid;
    while (l <= r) {
        mid = l + ((r - l) >> 1);
        if (nums[mid] > target) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return r
}

var bs_first = function (nums, target) {
    let l = 0, r = nums.length - 1, mid;
    while (l <= r) {
        mid = l + ((r - l) >> 1);
        if (nums[mid] < target) {
            l = mid + 1
        } else {
            r = mid - 1;
        }
    }
    return l
}