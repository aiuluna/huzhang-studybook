/**
 * https://leetcode-cn.com/problems/k-th-symbol-in-grammar/
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// var kthGrammar = function (n, k) {
//     const dp = new Array(n);
//     dp[0] = '0';
//     for (let i = 1; i < n; i++) {
//         let current = i % 2;
//         let prev = 1 ^ current;
//         dp[current] = dp[prev] + reverseStr(dp[prev])
//     }
//     return dp[n % 2][k-1]
// };

// function reverseStr(str) {
//     let ans = ''
//     for (let i =0; i < str.length; i++) {
//         ans+= 1 ^ str[i]
//     }
//     return ans;
// }

var kthGrammar = function (n, k) {
    if (n === 1) {
        return 0
    } else {
        const temp = Math.pow(2, n - 2);
        if (k > temp) {
            return 1 ^ kthGrammar(n - 1, k - temp)
        } else {
            return kthGrammar(n - 1, k)
        }
    }
}
