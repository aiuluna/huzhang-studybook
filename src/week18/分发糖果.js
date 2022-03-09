/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function (ratings) {
  const leftArr = new Array(ratings.length).fill(1), rightArr = new Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
      if (ratings[i] > ratings[i - 1]) {
          leftArr[i] = leftArr[i - 1] + 1;
      }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
      if (ratings[i] > ratings[i + 1]) {
          rightArr[i] = rightArr[i + 1] + 1;
      }
  }

  let res = 0;
  for (let i = 0; i < ratings.length; i++) {
      res += Math.max(leftArr[i], rightArr[i])
  }
  return res
};