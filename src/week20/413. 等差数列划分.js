/**
 * @param {number[]} nums
 * @return {number}
 */
 var numberOfArithmeticSlices = function (nums) {
  if (nums.length < 3) return 0;
  
  let first = 0, secend = 0;
  let res = 0;
  for (let i = 2; i < nums.length; i++) {
      let cur = 0;
      if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
          cur = 1 + secend;
          res += cur;
      }
      first = secend;
      secend = cur;
  }
  return res;
};