/**
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] !== 0) return -1;
  const n = grid.length;
  const queue = [];
  const dir = [[0, 1], [1, 0], [-1, 0], [0, -1], [-1, -1], [-1, 1], [1, 1], [1, -1]]
  const visit = new Array(n).fill(0).map(() => new Array(n).fill(0));
  queue.push(new Data(0, 0, 1));
  visit[0][0] = 1;
  while (queue.length) {
      const top = queue.shift();
      if (top.i === n - 1 && top.j === n - 1) return top.k;

      for (let i = 0; i < dir.length; i++) {
          const x = dir[i][0] + top.i;
          const y = dir[i][1] + top.j;
          if (x < 0 || x >= n) continue;
          if (y < 0 || y >= n) continue;
          if (grid[x][y]) continue;
          if (visit[x][y]) continue;
          visit[x][y] = 1;
          queue.push(new Data(x, y, top.k + 1));
      }
  }
  return -1;
};

const Data = function (i, j, k) {
  this.i = i;
  this.j = j;
  this.k = k;
}