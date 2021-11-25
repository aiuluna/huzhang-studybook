/**
 * https://leetcode-cn.com/problems/maximum-width-ramp/
 * 
 * @param {number[]} nums
 * @return {number}
 */
 var maxWidthRamp = function(nums) {
    const stack = [0];
    for(let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[stack[stack.length - 1]]) {
            stack.push(i)
        }
    }
    let idx = nums.length - 1;
    let result = 0;
    while (idx > result) {
        while(stack.length && nums[idx] >= nums[stack[stack.length - 1]]) {
            result = Math.max(result, idx - stack.pop())
        }
        idx--;
    }
    return result 
};