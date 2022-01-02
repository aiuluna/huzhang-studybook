/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
 var accountsMerge = function (accounts) {
    const map = new Map();
    const set = new UnionSet(accounts.length);

    for (let i = 0; i < accounts.length; i++) {
        const [a, ...b] = accounts[i];
        for (let j = 0; j < b.length; j++) {
            if (!map.has(b[j])) {
                map.set(b[j], i);
            } else {
                set.merge(i, map.get(b[j]))
            }
        }
    }

    const arrMap = new Map();
    for (let i = 0; i < accounts.length; i++) {
        const key = set.get(i)
        const [...b] = accounts[i];
        if (!arrMap.has(key)) {
            arrMap.set(key, []);
        }
        for (let j = 0; j < b.length; j++) {
            if (!arrMap.get(key).includes(b[j])) arrMap.get(key).push(b[j])
        }
    }
    let ans = [];
    for (let [, val] of arrMap) {
        const [a, ...b] = val;
        ans.push([a, ...b.sort()])
    }
    return ans
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