/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length, n = text2.length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
  dp[0][0] = text1[0] === text2[0] ? 1 : 0;
  for (let i = 1; i < m; i++) {
      dp[i][0] = text1[i] === text2[0] ? 1 : dp[i - 1][0]
  }
  for (let i = 1; i < n; i++) {
      dp[0][i] = text1[0] === text2[i] ? 1 : dp[0][i - 1];
  }
  for (let i = 1; i < m; i++) {
      for(let j = 1; j < n; j++) {
          if (text1[i] === text2[j]) {
              dp[i][j] = dp[i-1][j-1] + 1;
          } else {
              dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
          }
      }
  }
  return dp[m-1][n-1]
};