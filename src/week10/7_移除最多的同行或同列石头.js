/**
 * @param {number[][]} stones
 * @return {number}
 */
 var removeStones = function (stones) {
    const set = new UnionSet(stones.length);
    const x_map = new Map(), y_map = new Map();
    for (let i = 0; i < stones.length; i++) {
        const [x, y] = stones[i];
        if (x_map.has(x)) {
            set.merge(i, x_map.get(x))
        }
        if (y_map.has(y)) {
            set.merge(i, y_map.get(y))
        }
        x_map.set(x, i)
        y_map.set(y, i)
    }
    let count = 0
    for (let i = 0; i < stones.length; i++) {
        if (set.get(i) === i) count++;
    }
    return stones.length - count;
};


const UnionSet = function (n) {
    this.fathers = new Array(n);
    this.count = new Array(n);
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
    // a比b树小, a接到b上
    if (this.count[fa] < this.count[fb]) {
        this.fathers[fa] = fb;
        this.count[fb] += this.count[fa];
    } else {
        this.fathers[fb] = fa;
        this.count[fa] += this.count[fb];
    }
}