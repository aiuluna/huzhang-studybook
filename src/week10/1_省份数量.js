/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function (isConnected) {
    const n = isConnected.length;
    const set = new UnionSet(n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (isConnected[i][j]) set.merge(i, j);
        }
    }
    let res = 0;
    for (let i = 0; i < set.fathers.length; i++) {
        if (set.fathers[i] === i) res += 1
    }
    return res
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