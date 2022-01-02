/**
 * 并查集
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function (nums) {
    const set = new UnionSet(nums.length)
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        if (map.has(x)) continue;
        if (map.has(x - 1)) {
            set.merge(i, map.get(x - 1))
        }
        if (map.has(x + 1)) {
            set.merge(i, map.get(x + 1))
        }
        if (!map.has(x)) map.set(x, i)
    }

    let ans = 0;
    for (let i = 0; i < set.count.length; i++) {
        ans = Math.max(ans, set.count[i])
    }
    // for (let i = 0; i < nums.length; i++) {
    //     if (set.get(i) === i) {
    //         ans = Math.max(ans, set.count[i])
    //     }
    // }
    return ans;
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



/**
 * 循环set
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function (nums) {
    const set = new Set(nums);
    let ans = 0;
    for (let x of set) {
        // 找没有前置数据的值，作为连续序列的起点
        if (!set.has(x - 1)) {
            let size = 1;
            let temp = x + 1;
            // 找到下一个节点，若有，长度+1，temp = temp+1 继续寻找下一个节点
            while (set.has(temp)) {
                size++;
                temp++;
            }
            ans = Math.max(size, ans)
        }
    }
    return ans;
};