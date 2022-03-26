/**
 * s = "leetcode", wordDict = ["leet", "code"]
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);
    const set = new Set();
    for (let x of wordDict) {
        set.add(x);
    }
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (dp[j] && set.has(s.substr(j, i - j))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
}
