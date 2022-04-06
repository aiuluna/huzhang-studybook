/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumbers = function (nums) {
  let a = 0, b = 0;
  let res = 0;
  for (let x of nums) {
      res ^= x;
  }
  let m = 1;
  // 找到最低位为1的m，表示该位的的a,b值不同
  while ((m & res) === 0) {
      m <<= 1;
  }
  for (let x of nums) {
      if (x & m) {
          a ^= x;
      } else {
          b ^= x;
      }
  }
  return [a, b]
};