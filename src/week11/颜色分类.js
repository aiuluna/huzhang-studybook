/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function (nums) {
    if (nums.length < 2) return nums;
    let x = 0, y = nums.length - 1;
    let idx = 0;
    while (idx <= y) {
        if (nums[idx] === 1) {
            idx++
        } else if (nums[idx] < 1) {
            swap(nums, x, idx);
            x++;
            idx++;
        } else {
            swap(nums, y, idx);
            y--;
        }
    }
    return nums;
};

function swap(nums, x, y) {
    const temp = nums[x];
    nums[x] = nums[y]
    nums[y] = temp;
}