/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return nums[i];
        set.add(nums[i])
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function (nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === i) {
            i += 1;
            continue;
        }
        if (nums[nums[i]] === nums[i]) return nums[i];

        const temp = nums[nums[i]];
        nums[nums[i]] = nums[i];
        nums[i] = temp;
    }
    return -1;
};