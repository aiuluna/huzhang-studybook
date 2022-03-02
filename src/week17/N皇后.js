/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function (n) {
    const arr = new Array(n).fill([]).map(() => new Array(n).fill('.'))
    const res = [];
    dfs(0, arr, res, n);
    return res;
};

var dfs = function (i, arr, res, n) {
    if (i === n) {
        res.push(arr.map(item => item.join('')));
        return;
    }

    for (let x = 0; x < n; x++) {
        if (!isVaild(i, x, arr, n)) continue;
        arr[i][x] = 'Q';
        dfs(i + 1, arr, res, n);
        arr[i][x] = '.';
    }

}

var isVaild = function (row, col, arr, n) {
    if (row === 0) return true;
    let left = col - 1, right = col + 1;
    for (let i = row - 1; i >= 0; i--) {
        const result = arr[i];

        if (result[col] === 'Q') return false;
        if (left >= 0 && result[left] === 'Q') return false;
        if (right < n && result[right] === 'Q') return false;
        left--; right++;
    }
    return true
}