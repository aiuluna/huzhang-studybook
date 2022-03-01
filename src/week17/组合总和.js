/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function (candidates, target) {
  const res = [];
  var dfs = function (i, target, arr, candidates) {
      if (target < 0) return;
      if (target === 0) {
          res.push([...arr]);
          return;
      }
      if (i === candidates.length) return;
      // 不选当前值
      dfs(i + 1, target, arr, candidates);
      // 当前值
      target -= candidates[i];
      arr.push(candidates[i]);
      dfs(i, target, arr, candidates);
      target += candidates[i];
      arr.pop();

      return;

  }

  dfs(0, target, new Array(), candidates);
  return res;
};

