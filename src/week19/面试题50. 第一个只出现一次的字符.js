/**
 * @param {string} s
 * @return {character}
 */
 var firstUniqChar = function(s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
      const x = s[i];
      if (map.has(x)) {
          map.set(x, -1)
      } else {
          map.set(x, i)
      }
  }
  for (let [k, v] of map) {
      if (v !== -1) {
          return k
      }
  }
  return ' '
};