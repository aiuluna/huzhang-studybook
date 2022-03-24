/**
 * abba
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	const n = s.length
	if (n === 0) return 0
	const map = new Map()
	const dp = new Array(n)
    let res = 1;
    let lastIdx = 0;
	dp[0] = 1;
	map.set(s[0], 0);
	for (let i = 1; i < n; i++) {
		if (!map.has(s[i]) || map.get(s[i]) < lastIdx) {
			dp[i] = dp[i - 1] + 1
		} else {
            const idx = map.get(s[i]);
            dp[i] = i - idx;
            lastIdx = idx;
        }
        map.set(s[i], i);
        res = Math.max(dp[i], res)
	}
    return res;

}
