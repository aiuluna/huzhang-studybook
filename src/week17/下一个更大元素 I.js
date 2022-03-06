/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const next = new Array(nums2.length).fill(-1);
  const map = new Map();

  for (let i = 0; i < nums2.length; i++) {
      while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
          next[stack.pop()] = i;
      }
      stack.push(i);
      map.set(nums2[i], i)
  }


  const ans = [];
  for (let i = 0; i < nums1.length; i++) {
      const idx = next[map.get(nums1[i])];
      if (idx > -1) {
          ans[i] = nums2[idx];
      } else {
          ans[i] = -1;
      }
  }
  return ans;
};