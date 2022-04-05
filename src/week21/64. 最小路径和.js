/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function (grid) {
  const m = grid.length, n = grid[0].length;
  const dp = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (j === 0) {
              dp[j] += grid[i][j];
              continue;
          }
          if (i === 0 && j > 0) {
              dp[j] = dp[j - 1] + grid[i][j];
              continue;
          }
          dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j]
      }
  }
  return dp[n - 1];
};