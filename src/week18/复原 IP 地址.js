/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function (s) {
  const res = [];
  dfs(0, 0, s, res);
  return res;
};

var dfs = function (dot, ind, s, arr) {
  if (dot === 3) {
      if (ind === s.length) return;
      if (ind < s.length - 1 && s[ind] === '0') return;
      let data = 0;
      for (let i = ind; i < s.length; i++) {
          data = 10 * data + (+s[i]);
      }
      if (data > 255) return;
      arr.push(s);
      return;
  }

  if (ind === s.length - 1) return;

  let data = 0;
  for (let i = ind + 1; i < s.length; i++) {
      if (i - ind > 1 && s[ind] === '0') return;
      data = 10 * data + (+s[i - 1]);
      if (data > 255) return;
      s = s.slice(0, i) + '.' + s.slice(i);
      dfs(dot + 1, i + 1, s, arr);
      s = s.slice(0, i) + s.slice(i + 1);
  }
}