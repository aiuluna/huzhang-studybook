/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function (grid) {
    const n = grid.length, m = grid[0].length;

    var set = new UnionSet(m * n);
    var ind = function (i, j) {
        return i * m + j
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === '0') continue;
            if (i > 0 && grid[i - 1][j] === '1') set.merge(ind(i, j), ind(i - 1, j))
            if (j > 0 && grid[i][j - 1] === '1') set.merge(ind(i, j), ind(i, j - 1))
        }
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === '1' && set.fathers[ind(i, j)] === ind(i, j)) {
                ans += 1
            }
        }
    }
    return ans
};



var UnionSet = function (n) {
    this.fathers = new Array(n);
    this.size = new Array(n)
    for (let i = 0; i < n; i++) {
        this.fathers[i] = i
        this.size[i] = 1
    }

}

UnionSet.prototype.find = function (x) {
    if (this.fathers[x] === x) return x;
    return this.find(this.fathers[x])
}

UnionSet.prototype.merge = function (a, b) {
    const fa = this.find(a), fb = this.find(b);
    if (fa === fb) return;
    if (this.size[fa] < this.size[fb]) {
        this.fathers[fa] = fb
        this.size[fb] += this.size[fa]
    } else {
        this.fathers[fb] = fa
        this.size[fa] += this.size[fb]
    }

}