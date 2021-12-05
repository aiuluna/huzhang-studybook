/**
 * https://leetcode-cn.com/problems/omKAoA/
 * 
 * @param {string} s
 * @return {number}
 */
 var minCut = function (s) {
    const n = s.length;
    const dp = new Array(n).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i <= n; i++) {
        dp[i] = i;
        for (let j = 0; j < i; j++) {
            if (isHuiwen(s, j, i - 1)) {
                dp[i] = Math.min(dp[i], dp[j] + 1)
            }
        }
    }
    return dp[n] - 1
};

const isHuiwen = function (s, i, j) {
    while (i <= j) {
        if (s[i] === s[j]) {
            i++;
            j--;
        } else {
            return false
        }
    }
    return true;
}