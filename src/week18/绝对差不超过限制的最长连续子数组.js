/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
 var longestSubarray = function (nums, limit) {
  const n = nums.length;

  const minQueue = []; // 递减
  const maxQueue = []; // 递增
  let right = 0, left = 0;
  let res = 0;

  while (right < n) {
      while (maxQueue.length && nums[right] >= nums[maxQueue[maxQueue.length - 1]]) maxQueue.pop();
      while (minQueue.length && nums[right] <= nums[minQueue[minQueue.length - 1]]) minQueue.pop();
      maxQueue.push(right);
      minQueue.push(right);
   
      while (maxQueue.length && minQueue.length && nums[maxQueue[0]] - nums[minQueue[0]] > limit) {
          if (maxQueue[0] === left) maxQueue.shift();
          if (minQueue[0] === left) minQueue.shift();
          left++;
      }

      res = Math.max(res, right - left + 1);
      right++;
  }
  return res;
};