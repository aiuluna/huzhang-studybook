/**
 * @param {number} target
 * @return {number[][]}
 */
 var findContinuousSequence = function (target) {
  if (target < 3) return [];
  const res = [];
  const arr = [1, 2];
  let x = 1, y = 2;
  let sum = 3;
  while (x + y <= target) {
      if (sum < target) {
          y++;
          sum += y;
          arr.push(y);
      } else if (sum > target) {
          arr.shift();
          sum -= x;
          x++;
      } else {
          res.push([...arr]);
          y++;
          sum += y;
          arr.push(y);
      }
  }
  return res;
};