/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
 var openLock = function (deadends, target) {
  if (deadends.includes('0000')) return -1;

  const queue = [];
  const dir = [-1, 1];
  const visit = new Set();

  for (let x of deadends) {
      visit.add(x);
  }

  queue.push(new Data('0000', 0));

  while (queue.length) {
      const top = queue.shift();
      const { str, k } = top;
      if (target === str) return k;

      for (let i = 0; i < 4; i++) {
          for (let j = 0; j < dir.length; j++) {
              let x = parseInt(str[i]) + dir[j];
              if (x > 9) x = 0;
              if (x < 0) x = 9;
              const next = str.substr(0, i) + x + str.substr(i + 1);
              // if (deadends.includes(next)) continue;
              if (visit.has(next)) continue;
              visit.add(next);
              queue.push(new Data(next, k + 1));
          }
      }
  }

  return -1;
};

const Data = function (str, k) {
  this.str = str;
  this.k = k;
}