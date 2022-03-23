/**
 * @param {number} n
 * @return {number}
 */
 var fib = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    const mod = 1e9 + 7;
    let first = 0, secend = 1;
    for (let i = 2; i <= n; i++) {
        const current = (first + secend) % mod;
        first = secend;
        secend = current;
    }
    return secend % mod;
};