/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var updateMatrix = function (mat) {
  const m = mat[0].length, n = mat.length;
  const visit = new Array(n).fill(0).map(() => new Array(m).fill(0));
  const res = new Array(n).fill(0).map(() => new Array(m).fill(0));
  const distance = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  const queue = [];

  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          if (mat[i][j] === 0) {
              visit[i][j] = 1;
              queue.push(new Data(i, j, 0))
          }
      }
  }

  while (queue.length) {
      const top = queue.shift();
      for (let i = 0; i < distance.length; i++) {
          const x = top.i + distance[i][0];
          const y = top.j + distance[i][1];
          if (x < 0 || x >= n) continue;
          if (y < 0 || y >= m) continue;
          if (visit[x][y]) continue;
          visit[x][y] = 1;
          res[x][y] = top.k + 1;
          queue.push(new Data(x, y, top.k + 1))
      }
  }

  return res;
};

class Data {
  constructor(i, j, k) {
      this.i = i;
      this.j = j;
      this.k = k;
  }
}