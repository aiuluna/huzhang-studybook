/**
 * 三角形最小路径和
 * https://leetcode-cn.com/problems/triangle/
 * 
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
	const n = triangle.length
	const dp = new Array(n)
	for (let i = 0; i < n; i++) {
		dp[i] = new Array(i + 1)
	}

	// dp[n, i] =  min(dp[n - 1][i, i - 1]) + triangle[i]
	dp[0][0] = triangle[0][0]
	for (let i = 1; i < n; i++) {
		for (let j = 0; j <= i; j++) {
			dp[i][j] =
				Math.min(
					dp[i - 1][j === i ? j - 1 : j],
					dp[i - 1][j > 0 ? j - 1 : j]
				) + triangle[i][j]
		}
	}
	let result = Infinity
	for (let i = 0; i < dp[n - 1].length; i++) {
		if (dp[n - 1][i] < result) {
			result = dp[n - 1][i]
		}
	}
	return result
}

const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
minimumTotal(triangle)
