/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function (nums) {
    let x = 0, y = nums.length - 1;
    while (x < y) {
        while (x < y && nums[x] % 2 === 1) x++;
        while (x < y && nums[y] % 2 === 0) y--;
        if (x < y) {
            [nums[x], nums[y]] = [nums[y], nums[x]];
            x++;
            y--;
        }
    }
    return nums;
};

exchange([1,2,3,4])