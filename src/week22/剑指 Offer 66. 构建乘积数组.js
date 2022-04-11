/**
 * 给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B[i] 的值是数组 A 中除了下标 i 以外的元素
 * 的积, 即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。
 *
 * 输入: [1,2,3,4,5]
 * 输出: [120,60,40,30,24]
 * [1, 2, 0, 4, 5]
 * [0,0,40,0,0]
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  const n = a.length;
  const sums_l = new Array (n + 1).fill (0);
  const sums_r = new Array (n + 1).fill (0);
  const res = [];
  sums_l[0] = 1;
  sums_r[n] = 1;
  for (let i = 0; i < n; i++) {
    sums_l[i + 1] = sums_l[i] * a[i];
  }
  for (let i = n - 1; i >= 0; i--) {
    sums_r[i] = sums_r[i + 1] * a[i];
  }
  for (let i = 0; i < n; i++) {
      res[i] = sums_l[i] * sums_r[i + 1];
  }
  return res;
};

constructArr([1, 2, 0, 4, 5])
