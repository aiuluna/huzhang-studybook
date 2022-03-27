/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function (board, word) {
  const m = board.length, n = board[0].length;
  function dfs(i, j, idx) {
      if (i >= m || i < 0 || j >= n || j < 0 || board[i][j] !== word[idx]) return false;
      if (idx === word.length - 1) return true;
      board[i][j] = '';
      let res = dfs(i - 1, j, idx + 1) || dfs(i + 1, j, idx + 1) || dfs(i, j - 1, idx + 1) || dfs(i, j + 1, idx + 1);
      board[i][j] = word[idx];
      return res;
  }
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (dfs(i, j, 0)) return true;
      }
  }
  return false;
};