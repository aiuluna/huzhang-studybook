/**
 * 回文数
 * https://leetcode-cn.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    const x_arr = String(x).split('');
    let l = 0, r = x_arr.length - 1;
    while(l < r && x_arr[l] === x_arr[r]) {    
            l++;
            r--;     
    }
    return r - l <= 0;
};