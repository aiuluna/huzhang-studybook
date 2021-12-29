/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function (height) {
    let left = 0, right = height.length - 1;
    let max = -Infinity;
    while (left < right) {
        max = Math.max(Math.min(height[left], height[right])*(right - left), max) 
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return max
};