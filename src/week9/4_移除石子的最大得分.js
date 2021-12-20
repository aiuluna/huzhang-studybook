/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
    if (a > b) {
        [a, b] = [b, a]
    }
    if (a > c) {
        [a, c] = [c, a]
    }
    if (b > c) {
        [b, c] = [c, b]
    }
    let res = 0;
    // 第一步将c和b的差值与a玩
    const num_1 = Math.min(a, c - b);
    a -= num_1;
    c -= num_1;
    res += num_1;

    // 第二步如果a还有剩余，说明b,c相等，将a一分为二，bc同时去减
    if (a) {
        const num_2 = a >> 1;
        b -= num_2;
        c -= num_2;
        res += num_2 * 2
    }

    // 第三步，b,c同步消去b
    res += b;

    return res;
};
