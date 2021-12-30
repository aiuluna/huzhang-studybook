/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findRedundantConnection = function(edges) {
    const n = edges.length;
    const set = new UnionSet(n + 1);
    let res = ''
    for (let i = 0; i < n; i++) {
        const data = edges[i];
        if (set.find(data[0]) !== set.find(data[1])) {
            set.merge(data[0], data[1])
        } else {
            res = data;
        }
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
