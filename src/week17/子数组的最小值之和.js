/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumSubarrayMins = function (arr) {
  const n = arr.length;
  const stack = [];
  const next = new Array(n).fill(n);
  const prev = new Array(n).fill(-1);
  const MOD = 1e9 + 7;
  let res = 0;

  for (let i = 0; i < n; i++) {
      while (stack.length && arr[i] < arr[stack[stack.length - 1]]) {
          next[stack.pop()] = i;
      }
      if (stack.length) {
          prev[i] = stack[stack.length - 1]
      }
      stack.push(i)
  }

  for (let i = 0; i < n; i++) {
      res = res + ((i - prev[i]) * (next[i] - i)) * arr[i]
  }

  return res % MOD
};