/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function(numbers) {
  let l = 0, r = numbers.length - 1;
  while(l < r && numbers[r] === numbers[l]) {
      r--;
  }
  if (l === r) return numbers[l];

  while(l < r) {
      const mid = l + ((r - l) >> 1);
      if (numbers[mid] <= numbers[r]) {
          r = mid;
      } else {
          l = mid + 1;
      }
  }   
  return numbers[l]

};