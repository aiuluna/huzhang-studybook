/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solve = function (board) {
    const m = board.length, n = board[0].length;
    const set = new UnionSet(m * n);
    const sideSet = new Set();
    var ind = function (i, j) {
        return i * n + j
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'X') {
                board[i][j] = 1;
            } else {
                board[i][j] = 0;
            }
            if (board[i][j] === 0) {
                if (i > 0 && board[i - 1][j] === 0) set.merge(ind(i, j), ind(i - 1, j));
                if (j > 0 && board[i][j - 1] === 0) set.merge(ind(i, j), ind(i, j - 1));
            }

        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((i === 0 || i === m - 1 || j === 0 || j === n - 1) && board[i][j] === 0) {
                sideSet.add(set.find(ind(i, j)));
            }
        }
    }


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                board[i][j] = 'X'
            } else {
                if (sideSet.has(set.find(ind(i, j)))) {
                    board[i][j] = 'O'
                } else{
                    board[i][j] = 'X'
                }
            }
        }
    }

    return board

};

const UnionSet = function (n) {
    this.fathers = new Array(n);
    this.sizes = new Array(n);

    for (let i = 0; i < n; i++) {
        this.fathers[i] = i;
        this.sizes[i] = 1;
    }
}

// 找到父节点
UnionSet.prototype.find = function (a) {
    const fa = this.fathers[a];
    if (fa === a) return a;
    return this.find(fa);
}

UnionSet.prototype.merge = function (a, b) {
    const fa = this.find(a), fb = this.find(b);
    // 有相同根节点
    if (fa === fb) return;
    if (this.sizes[fa] < this.sizes[fb]) {
        this.fathers[fa] = fb;
        this.sizes[fb] += this.sizes[fa];
    } else {
        this.fathers[fb] = fa;
        this.sizes[fa] += this.sizes[fb];
    }
}