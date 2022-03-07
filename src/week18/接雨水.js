/**
 * 单调栈
 * @param {number[]} height
 * @return {number}
 */
 var trap = function (height) {
  const n = height.length;
  const stack = [];
  const next = new Array(n).fill(n), prev = new Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
      while (stack.length && height[i] > height[stack[stack.length - 1]]) {
          next[stack.pop()] = i;
      }
      if (stack.length) {
          prev[i] = stack[stack.length - 1];
      }
      stack.push(i)
  }

  let sum = 0;
  for (let i = 1; i < n; i++) {
      if (prev[i] === -1 || next[i] === n) continue;
      sum += (next[i] - prev[i] - 1) * (Math.min(height[prev[i]], height[next[i]]) - height[i])
  }
  return sum;
};




/**
 * 双指针
 * @param {number[]} height
 * @return {number}
 */
 var trap = function (height) {
  const n = height.length;
  let leftMax = 0, rightMax = 0;
  let left = 0, right = n - 1;
  let res = 0;

  while (left < right) {
      leftMax = Math.max(leftMax, height[left])
      rightMax = Math.max(rightMax, height[right])

      if (height[left] < height[right]) {
          res += (leftMax - height[left]);
          left++;
      } else {
          res += (rightMax - height[right])
          right--;
      }
  }
  return res;
};