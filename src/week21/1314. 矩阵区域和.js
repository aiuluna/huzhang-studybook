/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
 var matrixBlockSum = function (mat, k) {
  const m = mat.length, n = mat[0].length;
  const ans = new Array(m).fill(0).map(() => new Array(n).fill(0));
  const sums = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          sums[i][j] = sums[i - 1][j] + sums[i][j - 1] - sums[i - 1][j - 1] + mat[i - 1][j - 1];
      }
  }
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          const x = Math.min(k + i + 1, m);
          const y = Math.min(k + j + 1, n);
          const a = Math.max(i - k, 0);
          const b = Math.max(j - k, 0);
          ans[i][j] = sums[x][y] + sums[a][b] - sums[x][b] - sums[a][y] 
      }
  }
  return ans
};