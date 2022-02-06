/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let head = 0, tail = nums.length - 1;
    while(tail - head > 3) {
        const mid = head + ((tail - head) >> 1);
        if (nums[mid] >= target) tail = mid;
        else head = mid;
    }
    for (let i = head; i <= tail;i++) {
        if (nums[i] >= target) return i;
    }
    return nums.length;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function (nums, target) {
    let head = 0, tail = nums.length - 1;
    while (head <= tail) {
        const mid = head + ((tail - head) >> 1);
        if (nums[mid] >= target) {
            tail = mid - 1;
        } else {
            head = mid + 1;
        }
    }
    return head;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function (nums, target) {
    let head = 0, tail = nums.length - 1, ans = nums.length;
    while (head <= tail) {
        const mid = head + ((tail - head) >> 1);
        if (nums[mid] >= target) {
            ans = mid;
            tail = mid - 1;
        } else {
            head = mid + 1;
        }
    }
    return ans;
};