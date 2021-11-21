/**
 * 回文子串
 * https://leetcode-cn.com/problems/palindromic-substrings/
 * 
 * @param {string} s
 * @return {number}
 */
//  var countSubstrings = function (s) {
//     // dp[i] = dp[i-1]+valid(s)
//     // 超时了！！！！！！

//     const n = s.length;
//     const dp = new Array(n)
//     dp[0] = 1;
//     for (let i = 1; i < n; i++) {
//         let temp = 0;
//         for (let j = 0; j <= i; j++) {
//             valid(s.slice(j, i + 1)) && temp++;
//         }
//         dp[i] = dp[i - 1] + temp;
//     }
//     return dp[n - 1]
// };

// const valid = function (s) {
//     const n = s.length;
//     if (n === 0) return false;
//     let left = 0, right = n - 1;
//     while (left <= right && s[left] === s[right]) {
//         left++;
//         right--;
//     }
//     return left > right
// }


/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function (s) {
    const n = s.length;
    let result = 0;
    // 求回文中心点
    for (let i = 0; i < 2 * n - 1; i++) {
        let left = i >> 1, right = (i >> 1) + i % 2;
        while (left >= 0 && right < n && s.charAt(left) === s.charAt(right)) {
            left--;
            right++;
            result++;
        }
    }
    return result
};


