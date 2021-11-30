/**
 * https://leetcode-cn.com/problems/sum-of-square-numbers/
 * 
 * @param {number} c
 * @return {boolean}
 */
 var judgeSquareSum = function(c) {
    let left = 0, right = Math.round(Math.sqrt(c))
    while(left <= right) {
        const res = left * left + right * right;
        if (res === c) {
            return true;
        } else if (res < c) {
            left++
        } else {
            right--
        }
    }
    return false;
};