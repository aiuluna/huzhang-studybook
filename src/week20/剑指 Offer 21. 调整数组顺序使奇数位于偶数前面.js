/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function (nums) {
  const n = nums.length;
  if (n === 0) return [];
  let left = 0, right = n - 1;
  while (left < right) {
      while (left < right && nums[left] % 2 === 1) {
          left++;
      }
      while (left < right && nums[right] % 2 === 0) {
          right--;
      }
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
  }
  return nums;
};