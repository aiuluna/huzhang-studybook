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



/**
 * 二分法
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
 var findRadius = function (houses, heaters) {

    houses.sort((a, b) => a - b);
    heaters.sort((a, b) => a - b);
    
    let res = 0;
    for (let x of houses) {
        res = Math.max(binarySearch(heaters, x), res);
    }
    return res;
};

// 返回离target最近的值的距离
var binarySearch = function (array, target) {
    let x = 0, y = array.length - 1, mid, res = Infinity;
    while (y - x > 3) {
        mid = x + ((y - x) >> 1);
        if (array[mid] <= target) {
            x = mid;
        } else {
            y = mid;
        }
    }
    for (let i = x; i <= y; i++) {
        res = Math.min(Math.abs(array[i] - target), res);
    }
    return res;
}