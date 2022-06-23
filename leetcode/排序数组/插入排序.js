/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function (nums) {
    const n = nums.length;
    for (let i = 1; i < n; i++) {
        const data = nums[i]
        let j = i - 1;
        
        // [0 - num[i-1]]
        while (j >= 0 && data < nums[j]) {
            [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            j--;
        }
    }
    return nums;
};