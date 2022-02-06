/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function (nums, target) {
    const ret = [];
    ret[0] = first_binary_search(nums, target);
    ret[1] = last_binary_search(nums, target);
    return ret;
};


var first_binary_search = function (nums, target) {
    let head = 0, tail = nums.length, mid;
    let res = -1;
    while (head <= tail) {
        mid = head + ((tail - head) >> 1);
        if (nums[mid] < target) {
            head = mid + 1;
        } else {
            tail = mid - 1;
            if (nums[mid] === target) {
                res = mid;
            }
        }
    }
    return res;
}

var last_binary_search = function (nums, target) {
    let head = 0, tail = nums.length, mid;
    let res = -1;
    while (head <= tail) {
        mid = head + ((tail - head) >> 1);
        if (nums[mid] <= target) {
            head = mid + 1;
            if (nums[mid] === target) {
                res = mid;
            }
        } else {
            tail = mid - 1;
        }
    }
    return res;
}