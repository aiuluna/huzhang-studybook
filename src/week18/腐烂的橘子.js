/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function (grid) {
  const m = grid.length, n = grid[0].length;

  const visited = new Array(m).fill(0).map(() => new Array(n).fill(0));
  const badArr = [];
  let goodCount = 0;
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === 2) badArr.push([i, j]);
          if (grid[i][j] === 1) goodCount++;
          if (grid[i][j] === 0) visited[i][j] = 1;
      }
  }

  const queue = [];
  const vector = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  for (let bad of badArr) {
      queue.push(bad);
      visited[bad[0]][bad[1]] = 1;
  }

  let pos = 0, ans = 2;
  var bfs = function () {
      while (queue.length && pos < queue.length) {
          // const top = queue.shift();
          const top = queue[pos];
          const [i, j] = top;
          const current = grid[i][j];
          for (let v of vector) {
              const x = v[0] + i;
              const y = v[1] + j;
              if (x < 0 || x >= m) continue;
              if (y < 0 || y >= n) continue;
              if (visited[x][y]) continue;
              visited[x][y] = 1;
              if (grid[x][y] === 1) goodCount--;
              grid[x][y] = current + 1;
              ans = grid[x][y];
              queue.push([x, y]);
          }
          pos++;
      }
  }

  bfs();

  return goodCount ? -1 : (ans - 2)

  // let max = 2;
  // const arr = grid.flat()
  // for (let x of arr) {
  //     if (x === 1) return -1;
  //     max = Math.max(max, x)
  // }
  // return max - 2;

};