/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  let count = 0;
  let master = null;
  for (let x of nums) {
      if (!count) master = x; 
      if (master === x) count++;
      else count--;
  }
  return master;
};