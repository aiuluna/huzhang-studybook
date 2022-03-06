/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var find132pattern = function (nums) {
  const n = nums.length;
  const stack = [];
  const left = new Array(n);
  const right = new Array(n);
  left[0] = Infinity;

  for (let i = 1; i < n; i++) left[i] = Math.min(left[i - 1], nums[i - 1]);

  for (let i = 0; i < n; i++) {
      right[i] = nums[i];
      while (stack.length && nums[i] >= nums[stack[stack.length - 1]]) {
          const top = stack[stack.length - 1];
          stack.pop();
          if (stack.length) {
              right[stack[stack.length - 1]] = nums[top];
          }
      }
      stack.push(i)
  }

  while (stack.length) {
      const top = stack[stack.length - 1];
      stack.pop();
      if (stack.length) {
          right[stack[stack.length - 1]] = nums[top];
      }
  }

  // console.log(left)
  // console.log(right)

  for (let i = 0; i < n; i++) {
      const current = nums[i];
      if (left[i] === current || right[i] === current) continue;
      const prev = left[i];
      const next = right[i];
      if (prev < next) return true;
  }
  return false;


};


/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var find132pattern = function (nums) {
  const n = nums.length;
  const stack = [];
  const left = new Array(n);
  left[0] = Infinity;

  for (let i = 1; i < n; i++) left[i] = Math.min(left[i - 1], nums[i - 1]);

  for (let i = n - 1; i >= 0; i--) {
      let k = nums[i];
      while(stack.length && nums[i] > stack[stack.length - 1]) {
          k = stack.pop()
      }

      if (k < nums[i] && k > left[i]) return true;

      stack.push(nums[i]);
  }

  return false;

};