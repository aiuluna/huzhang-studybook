/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
 var minMoves = function (target, maxDoubles) {
    if (maxDoubles === 0) return target - 1;
    let ans = 0;
    while (target > 1) {
        // 偶数
        if (target % 2 === 0 && maxDoubles > 0) {
            maxDoubles--;
            target = target / 2;
            ans++;
        } else {
            if (maxDoubles === 0) {
                ans += (target - 1);
                return ans;
            } else {
                target--;
                ans++;
            }
        }
    }
    return ans
};