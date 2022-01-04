/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
 var makeConnected = function (n, connections) {
    const set = new UnionSet(n);
    let over = 0;
    for (let i = 0; i < connections.length; i++) {
        const a = connections[i][0];
        const b = connections[i][1];
        if (set.find(a) !== set.find(b)) {
            set.merge(a, b)
        } else {
            over += 1
        }
    }

    let root = 0;
    for (let i = 0; i < n; i++) {
        if (set.find(i) === i) root++;
    }

    if (root - 1 > over) {
        return -1
    } else {
        return root - 1
    }
};


/**
* 并查集代码
*/
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

