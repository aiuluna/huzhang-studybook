/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
  if (matrix.length === 0) return false;
  
  let m = matrix.length, n = matrix[0].length;

  let x = 0, y = n - 1;

  while(x < m && y >= 0) {
      if (matrix[x][y] === target) return true;
      if (matrix[x][y] > target) {
          y--
      } else {
          x++
      }
  }
  return false;

};