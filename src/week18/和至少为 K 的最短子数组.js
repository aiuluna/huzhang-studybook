/**
 * 单调队列+前缀和
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var shortestSubarray = function (nums, k) {
  const n = nums.length;
  const preSum = new Array(n + 1);
  const queue = []

  preSum[0] = 0;
  for (let i = 0; i < n; i++) {
      preSum[i + 1] = preSum[i] + nums[i];
  }

  let min = Infinity;
  let pos = -1, start = 0;
  for (let i = 0; i <= n; i++) {
      while (queue.length && preSum[i] < preSum[queue[queue.length - 1]]) {
          queue.pop()
      }
      queue.push(i);
      while (queue.length && preSum[i] - preSum[queue[start]] >= k) {
          pos = queue[start++];
          // min = Math.min(i - queue.shift(), min);
      }

      if (pos !== -1) {
          min = Math.min(i - pos, min)
      }
  }
  return min === Infinity ? -1 : min
};