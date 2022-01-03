/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function (height) {
    let max = -Infinity;
    let x = 0, y = height.length - 1;
    while (x <= y) {
        const a = height[x], b = height[y]
        max = Math.max(max, Math.min(a, b) * (y - x));
        if (a < b) {
            x++
        } else {
            y--
        }
    }
    return max
};