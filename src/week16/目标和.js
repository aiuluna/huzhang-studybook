/**
 * 回溯
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = function (nums, target) {
    let ans = 0;
    var find = function (i, rest) {
        if (i === nums.length) {
            if (rest === target) {
                ans++;
            }
            return
        }

        for (let x of [-1, 1]) {
            rest += nums[i] * x;
            find(i + 1, rest);
            rest -= nums[i] * x;
        }
    }

    find(0, 0)
    return ans;
};



/**
 * 动态规划，变种01背包问题
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = function (nums, target) {
    let sum = 0;
    for (let x of nums) {
        sum += x;
    }
    let rest = (sum - target);
    if (rest < 0 || (rest & 1)) return 0;
    rest = rest >> 1;
    // dp[i][j] 表示前i位重量为j的可能性
    const dp = new Array(nums.length + 1).fill(0).map(() => new Array(rest + 1).fill(0))
    dp[0][0] = 1;

    for (let i = 1; i <= nums.length; i++) {
        const num = nums[i - 1];
        for (let j = 0; j <= rest; j++) {
            // 当前不放，可以用i-1的可能性
            dp[i][j] = dp[i - 1][j];
            // 当前想放，可以加上前i-1个且重量等于j-num的可能性
            if (j - num >= 0) {
                dp[i][j] += dp[i - 1][j - num]
            }
        }
    }
    return dp[nums.length][rest]
};