/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function (nums) {
  const counts = new Array(32).fill(0)
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < 32; j++) {
          counts[j] += (nums[i] & 1);
          nums[i] >>>= 1;
      }
  }
  let res = 0;
  for (let i = 0; i < 32; i++) {
      res <<= 1;
      res ^= (counts[31 - i] % 3);
  }
  return res;
};