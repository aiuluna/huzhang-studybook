/**
 * @param {number[][]} questions
 * @return {number}
 */
 var mostPoints = function (questions) {
    if (questions.length === 1) return questions[0][0];
    const n = questions.length;
    const dp = new Array(n + 1).fill(0);
    // 反向动归，dp[i]表示i到n-1道题目的分数最大值
    for (let i = n - 1; i >= 0; i--) {
        const q = questions[i];
        let j = i + q[1] + 1;
        dp[i] = Math.max(dp[i + 1], q[0] + (j < n ? dp[j] : 0))
    }
    return dp[0]
};