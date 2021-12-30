/**
 * @param {string[]} equations
 * @return {boolean}
 */
 var equationsPossible = function (equations) {
    const set = new UnionSet(26)
    for (let i = 0; i < equations.length; i++) {
        if (equations[i][1] == '!') continue;
        const a = equations[i][0].charCodeAt() - 'a'.charCodeAt();
        const b = equations[i][3].charCodeAt() - 'a'.charCodeAt();
        set.merge(a, b)
    }

    for (let i = 0; i < equations.length; i++) {
        if (equations[i][1] == '=') continue;
        const a = equations[i][0].charCodeAt() - 'a'.charCodeAt();
        const b = equations[i][3].charCodeAt() - 'a'.charCodeAt();
        if (set.find(a) === set.find(b)) return false
    }
    return true
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