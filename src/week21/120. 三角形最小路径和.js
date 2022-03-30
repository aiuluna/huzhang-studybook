/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function (triangle) {
  const dp = new Array(triangle.length).fill(0);
  dp[0] = triangle[0][0];
  for (let i = 1; i < triangle.length; i++) {
      for (let j = triangle[i].length - 1; j >= 0; j--) {
          const current = triangle[i][j];
          if (j === triangle[i].length - 1) dp[j] = dp[j - 1] + current;
          else if (j === 0) dp[j] = dp[j] + current;
          else dp[j] = Math.min(dp[j - 1], dp[j]) + current;
      }
  }
  let res = Infinity;
  for (let x of dp) {
      res = Math.min(res, x)
  }
  return res;
};