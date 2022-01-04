/**
 * @param {number[]} row
 * @return {number}
 */
 var minSwapsCouples = function (row) {
    const n = row.length
    const unionSet = new UnionSet(n)

    for (let i = 0; i < n; i++) {
        unionSet.merge(row[i], row[i] ^ 1)
        if (i % 2 === 0) {
            unionSet.merge(row[i], row[i + 1])

        }
    }

    return (row.length >> 1) - unionSet.size
};

const UnionSet = function (n) {
    this.fathers = new Array(n);
    this.count = new Array(n);
    this.size = n;
    for (let i = 0; i < n; i++) {
        this.fathers[i] = i;
        this.count[i] = 1;
    }
}

UnionSet.prototype.get = function (a) {
    if (this.fathers[a] === a) return a;
    const root = this.get(this.fathers[a]);
    this.fathers[a] = root;
    return root;
}

UnionSet.prototype.merge = function (a, b) {
    const fa = this.get(a), fb = this.get(b);
    if (fa === fb) return;
    this.size--;
    // a比b树小, a接到b上
    if (this.count[fa] < this.count[fb]) {
        this.fathers[fa] = fb;
        this.count[fb] += this.count[fa];
    } else {
        this.fathers[fb] = fa;
        this.count[fa] += this.count[fb];
    }
}