/**
 * https://leetcode-cn.com/problems/pascals-triangle-ii/
 * 
 * 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 * @param {number} rowIndex
 * @return {number[]}
 */
// var getRow = function(rowIndex) {
//     const n = rowIndex + 1;
//     const dp = new Array(n).fill(1).map(() => new Array(n).fill(1))
    
//     for(let i = 1; i < n; i++) {
//         for (let j = 1; j < i; j++) {
//             dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
//         }
//     }

//     return dp[n - 1]
// };

var getRow = function(rowIndex) {
    const n = rowIndex + 1;
    const dp = new Array(n).fill(0)
    dp[0] = 1;
    for (let i = 1; i < n; i++) {
        for (let j = i; j > 0; j--) {
            dp[j] += dp[j-1]
        }
    }
    return dp
}