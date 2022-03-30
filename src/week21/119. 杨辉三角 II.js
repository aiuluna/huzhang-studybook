/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
  const dp = new Array(rowIndex + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i < rowIndex + 1; i++) {
      for (let j = i; j > 0; j--) {
          dp[j] += dp[j - 1];
      }
  }
  return dp
};