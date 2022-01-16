/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var findSubsequences = function (nums) {
    if (nums.length === 1) return [];
    const set = new Set()
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        find(ans, set, [nums[i]], nums.slice(i + 1))
    }
    return ans;
};

var find = function (ans, set, before, last) {
    if (last.length === 0) return;
    const a = before[before.length - 1];
    for (let i = 0; i < last.length; i++) {
        if (a <= last[i]) {
            const _before = [...before, last[i]]
            if (_before.length > 1) {
                isVaild(set, _before.toString()) && ans.push(_before);
            }
            find(ans, set, _before, last.slice(i + 1))
        }
    }
}

var isVaild = function (set, d) {
    if (set.has(d)) return false;
    set.add(d);
    return true;
}

