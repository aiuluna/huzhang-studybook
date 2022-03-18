/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  let curr = 0;
  let prev = 0;
  let next;

  for (let i = 2; i <= n; i++) {
      next = Math.min(prev + cost[i - 2], curr + cost[i - 1]);
      prev = curr;
      curr = next;
  }
  return next;
};