/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function (matrix) {
  const m = matrix.length, n = matrix[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  let max = 0;
  for (let i = 0; i < m; i++) {
      dp[i][0] = +matrix[i][0];
      max = Math.max(max, dp[i][0]);
  }
  for (let i = 0; i < n; i++) {
      dp[0][i] = +matrix[0][i];
      max = Math.max(max, dp[0][i]);
  }

  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          if (matrix[i][j] === '0') continue;
          dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
          max = Math.max(max, dp[i][j])
      }
  }
  return max*max;
}; 