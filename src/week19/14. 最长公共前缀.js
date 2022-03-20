/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];
  let a = strs[0], b = strs[1];
  let res = compareTwo(a, b);
  for(let i = 2; i < strs.length; i++) {
      res = compareTwo(res, strs[i])
  }
  return res;
};

var compareTwo = function (a, b) {
  let i = 0, n = Math.min(a.length, b.length);
  while (i < n) {
      if (a[i] === b[i]) {
          i++;
          continue;
      } else {
          break
      }
  }
  return a.substr(0, i)
}