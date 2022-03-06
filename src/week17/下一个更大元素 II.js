/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function (nums) {
    const stack = [];
    const next = new Array(nums.length).fill(-1)

    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
            next[stack.pop()] = nums[i];
        }
        stack.push(i)
    }

    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
            next[stack.pop()] = nums[i];
        }
        stack.push(i)
    }

    return next;

};

