/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var movingCount = function (m, n, k) {
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(0));
    let count = 0;
    const dfs = function (i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) return;
        let a = 0, b = 0, x = i, y = j;
        while (parseInt(x / 10) > 0) {
            a += x % 10;
            x = parseInt(x / 10)
        }
        a += x;
        while (parseInt(y / 10) > 0) {
            b += y % 10;
            y = parseInt(y / 10)
        }
        b += y;
        if (a + b > k) return;

        visited[i][j] = 1;
        count++;

        dfs(i - 1, j) || dfs(i + 1, j) || dfs(i, j - 1) || dfs(i, j + 1);

    }

    dfs(0, 0);
    return count;
};