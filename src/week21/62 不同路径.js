/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function (m, n) {
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0) dp[0][j] = 1;
            if (j === 0) dp[i][0] = 1;
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i][j-1] + dp[i-1][j]
        }
    }

    return dp[m-1][n-1]
};