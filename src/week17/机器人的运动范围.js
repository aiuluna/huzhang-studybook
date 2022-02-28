/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var movingCount = function (m, n, k) {
  if (k === 0) return 1;
  const queue = [];
  const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(0));
  let res = 1;
  queue.push(new Data(0, 0))
  visited[0][0] = 1;
  while (queue.length) {
      const top = queue.shift();
      const { x, y } = top;
      for (let i = 0; i < dir.length; i++) {
          const _x = x + dir[i][0];
          const _y = y + dir[i][1];

          if (_x < 0 || _x >= m) continue;
          if (_y < 0 || _y >= n) continue;
          if (visited[_x][_y]) continue;
          if (get(_x) + get(_y) > k) continue;

          visited[_x][_y] = 1;
          queue.push(new Data(_x, _y));
          res += 1;
      }
  }
  return res;
};

const get = function (x) {
  let res = 0;
  while (x / 10 > 0) {
      res += x % 10;
      x = parseInt(x / 10);
  }
  res += x;
  return res;
}

const Data = function (x, y) {
  this.x = x;
  this.y = y;
}