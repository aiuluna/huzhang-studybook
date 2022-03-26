/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function (s) {
  const n = s.length;
  const dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = (s[0] > 0 && s[0] <= 26) ? 1 : 0;
  for (let i = 1; i < n; i++) {
      const two = Number(s[i-1] + s[i]);
      if (two > 26 && s[i] === '0') return 0;
      dp[i + 1] =  (s[i] !== '0' ? dp[i] : 0) + (two >= 10 && two <= 26 ? dp[i-1] : 0);
  }
  return dp[n];
};