/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function (s) {
  s = s.trim();
  let x = s.length - 1, y = x;
  let res = ''
  while (x >= 0) {
      while (x >= 0 && s[x] !== ' ') x--;
      res += s.substring(x + 1, y + 1) + ' ';
      while (x >= 0 && s[x] === ' ') x--;
      y = x;
  }
  return res.trim();
};