/**
 * @param {number} n
 * @return {number[]}
 */
 var dicesProbability = function (n) {
  // f(n, x) = f(n-1, x - i) * 1/6 (i = 1 -> 6)
  // x = n -> n*6
  const dp = new Array(n + 1).fill(0).map(() => new Array(n * 6 + 1).fill(0));
  const res = [];

  for (let i = 1; i <= 6; i++) {
      dp[1][i] = 1 / 6
  }
  for (let i = 2; i <= n; i++) {
      for (let j = i; j <= n * 6; j++) {
          for (let k = 1; k <= 6; k++) {
              if (j - k < 1) break;
              dp[i][j] += dp[i - 1][j - k] * (1 / 6)
          }
      }
  }
  for (let i = n; i <= n * 6; i++) {
      res.push(Number(dp[n][i].toFixed(5)))
  }
  return res;
};



/**
 * @param {number} n
 * @return {number[]}
 */
 var dicesProbability = function (n) {
  // dp[i][j] = dp[i-1][j-k]

  let dp = new Array(6).fill(1 / 6);
  for (let i = 2; i <= n; i++) {
      const temp = new Array(i * 5 + 1).fill(0);
      for (let j = 0; j < dp.length; j++) {
          for (let k = 0; k < 6; k++) {
              temp[j + k] += dp[j] / 6
          }
      }
      dp = temp.map(x => Number(x.toFixed(5)))
  }
  return dp;
};