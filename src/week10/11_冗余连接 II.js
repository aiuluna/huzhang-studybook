/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findRedundantDirectedConnection = function (edges) {
    const set = new UnionSet(edges.length + 1);
    let fathers = new Array();
    for (let i = 1; i <= edges.length; i++) {
        fathers[i] = i;
    }
    let res;
    let conflict = -1, cycle = -1;

    for (let i = 0; i < edges.length; i++) {
        const [a, b] = edges[i]
        // 父节点不是自己，有冲突，冲突边不进新图（当前[a,b]不进入新图，若仍然出现环，
        // 当前冲突边肯定不在环内，所以只要解掉之前的冲突边就能解掉环。之前的冲突边是[fathers[b], b]）
        if (fathers[b] !== b) {
            conflict = i;
        } else {
            fathers[b] = a;
            // 判断是否有环
            if (set.get(a) === set.get(b)) {
                cycle = i;
                continue;
            }
            set.merge(a, b)
        }
    }

    if (cycle < 0) {
        // 没有环，解最后一条冲突边
        res = edges[conflict]
    } else {
        // 有环无冲突边，解成环的边
        if (conflict < 0) {
            res = edges[cycle]
        } else {
            //有环有冲突边，解之前的冲突边
            const [, b] = edges[conflict];
            res = [fathers[b], b]
        }
    }
    return res
};

const UnionSet = function (
    n) {
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