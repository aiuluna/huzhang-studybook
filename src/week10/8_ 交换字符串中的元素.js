/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
 var smallestStringWithSwaps = function (s, pairs) {
    const set = new UnionSet(s.length);
    const map = new Map();

    for (let i = 0; i < pairs.length; i++) {
        const [a, b] = pairs[i];
        set.merge(a, b);
    }
    for (let i = 0; i < s.length; i++) {
        const key = set.get(i);
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(s[i])
    }
    for (let [key,] of map) {
        map.get(key).sort((a, b) => b.charCodeAt() - a.charCodeAt())
    }

    let ans = ''
    for (let i = 0; i < s.length; i++) {
        let arr = map.get(set.get(i));
        ans += arr.pop();
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