/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  return Math.max(rob_range(0, nums.length - 2, nums), rob_range(1, nums.length - 1, nums));
};


const rob_range = function (start, end, nums) {
  let pre_pre = nums[start], pre = Math.max(nums[start], nums[start + 1]);

  for (let i = start + 2; i <= end; i++) {
      const cur = Math.max(pre_pre + nums[i], pre)
      pre_pre = pre;
      pre = cur;
  }

  return pre;
}