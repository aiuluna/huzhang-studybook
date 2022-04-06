/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
  let x = 0, y = 0;
  while(x < s.length && y < t.length) {
      if (s[x] === t[y]) {
          x++;
          y++;
      } else {
          y++;
      }
  }
  return x === s.length;
};


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function (s, t) {
  const dp = new Array(t.length + 1).fill(0).map(() => new Array(26).fill(0));
  for (let i = 0; i < 26; i++) {
      dp[t.length][i] = t.length;
  }
  for (let i = t.length - 1; i >= 0; i--) {
      for (let j = 0; j < 26; j++) {
          if (t[i].charCodeAt() - 'a'.charCodeAt() === j) {
              dp[i][j] = i;
          } else {
              dp[i][j] = dp[i + 1][j];
          }
      }
  }
  let m = s.length, idx = 0;
  for (let i = 0; i < m; i++) {
      if (dp[idx][s[i].charCodeAt() - 'a'.charCodeAt()] >= t.length) return false;
      idx = dp[idx][s[i].charCodeAt() - 'a'.charCodeAt()] + 1;
  }
  return true;
};