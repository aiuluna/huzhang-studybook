/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
  if (s.length < n) return s;
  let left = '', right = '';
  for (let i = 0; i < s.length; i++) {
      if (i < n) {
          right += s[i];
      } else {
          left += s[i];
      }
  }
  return left + right;
};