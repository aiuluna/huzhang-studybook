/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isStraight = function (nums) {
  const set = new Set();
  let min = 14, max = -1;
  for (let x of nums) {
      if (!x) continue;
      if (set.has(x)) {
          return false;
      }
      set.add(x);
      min = Math.min(min, x)
      max = Math.max(max, x)
  }
  return max - min < 5;
};