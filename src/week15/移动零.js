/**
 * 双指针
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let fast = 0, slow = 0;
    while(fast < nums.length) {
        while(!nums[fast] && fast < nums.length) fast++;
        if (fast >= nums.length) break;
        if (nums[slow] === 0) {
            const temp = nums[fast];
            nums[fast] = nums[slow];
            nums[slow] = temp;
        }
        fast++;
        slow++;
    }
    return nums;
};