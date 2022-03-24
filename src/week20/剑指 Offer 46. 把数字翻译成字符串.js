/**
 * 12258
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
	if (num === 0) return 1
	const str = String(num)
	const n = str.length
	const dp = new Array(n)
	dp[0] = 1
	dp[1] = dp[0] + Number(str.substring(0, 2)) > 25 ? 0 : 1

	for (let i = 2; i < n; i++) {
		dp[i] = Number(str.substr(i - 1, 2) > 25 ? 0 : dp[i - 2]) + dp[i - 1]
	}
    return dp[n - 1];
}
