/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function (numRows) {
  // [1,2,1]
  // [1,3,3,1]

  const res = [];
  for (let i = 0; i < numRows; i++) {
      const arr = new Array(i + 1).fill(1);
      for (let j = 1; j < i; j++) {
          arr[j] = res[i - 1][j - 1] + res[i - 1][j];
      }
      res.push(arr)
  }
  return res;
};