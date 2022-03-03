/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function (heights) {
  const n = heights.length;
  const prev = [], next = [];
  const stack = [];
  for (let i = 0; i < n; i++) {
      prev[i] = -1;
      next[i] = n;
  }

  for (let i = 0; i < n; i++) {
      // 2 3 3 3 2
      // 3 不出栈，prev提前设置了，是错的，找不对左
      // 3 出栈，next提前设置了，找不对右
      // 不影响结果，因为第一个或者最后一个相同的3一定能左右都是对的
      while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
          next[stack.pop()] = i;
      }
      if (stack.length) {
          prev[i] = stack[stack.length - 1];
      }
      stack.push(i);
  }


  let ans = 0;
  for (let i = 0; i < n; i++) {
      ans = Math.max(ans, heights[i] * (next[i] - prev[i] - 1));
  }
  return ans
};