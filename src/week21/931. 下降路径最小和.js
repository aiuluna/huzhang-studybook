/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  // const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 1; i < n; i++) {
      for (let j = 0; j < n; j++) {
          if (j === 0) {
              matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i - 1][j + 1]) + matrix[i][j];
          } else if (j === n - 1) {
              matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i - 1][j - 1]) + matrix[i][j];
          } else {
              matrix[i][j] = Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i - 1][j + 1]) + matrix[i][j];
          }
      }
  }
  let res = Infinity;
  for (let i = 0; i < n; i++) {
      res = Math.min(matrix[n - 1][i], res)
  }
  return res;
};