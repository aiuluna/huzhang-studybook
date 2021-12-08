/**
 * https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    // 递归超时
    // if (n === 0) return 0;
    // if (n === 1) return 1;
    // return fib(n - 1) + fib(n - 2);

    // 递推
    // const dp = new Array(n);
    // dp[0] = 0;
    // dp[1] = 1;
    // for (let i = 2; i <= 100; i++) {
    //     dp[i] = (dp[i-1] + dp[i-2]) % 1000000007
    // }
    // return dp[n];

    // 滚动数组优化
    const dp = new Array(3);
    const MOD = 1000000007;
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        const current = i % 3;
        const prev = (i - 1) % 3;
        const prev_prev = (i - 2) % 3;
        dp[current] = (dp[prev] + dp[prev_prev]) % MOD;
    }
    return dp[n % 3]
};
