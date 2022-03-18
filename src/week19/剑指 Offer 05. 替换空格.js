/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function (s) {
  let idx = 0, res = '';
  while (idx < s.length) {
      if (s[idx] === ' ') res += '%20';
      else res += s[idx];
      idx++;
  }
  return res;
};