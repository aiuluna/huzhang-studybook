/**
 * 假如有一排房子，共 n 个，每个房子可以被粉刷成 k 种颜色中的一种，你需要粉刷所有的房子并且使其相邻的两个房子颜色不能相同。
 * 当然，因为市场上不同颜色油漆的价格不同，所以房子粉刷成不同颜色的花费成本也是不同的。每个房子粉刷成不同颜色的花费是以一个 n x k 的矩阵来表示的。
 * 例如，costs[0][0] 表示第 0 号房子粉刷成 0 号颜色的成本花费；costs[1][2] 表示第 1 号房子粉刷成 2 号颜色的成本花费，以此类推。请你计算出粉刷完所有房子最少的花费成本。
 *
 *
 * 注意：
 * 所有花费均为正整数。
 * 示例：
 * 输入: [[1,5,3],[2,9,4]]
 * 输出: 5
 * 解释: 将 0 号房子粉刷成 0 号颜色，1 号房子粉刷成 2 号颜色。最少花费: 1 + 4 = 5;
 * 或者将 0 号房子粉刷成 2 号颜色，1 号房子粉刷成 0 号颜色。最少花费: 3 + 2 = 5.
 */

const minCost = function (costs) {
	// N个房子
	const n = costs.length
    // 状态转移方程  dp[n][i] = min(dp[n-1][i] | 2种) + costs[n][i];
    // 根据状态转移方程，dp[n]只和dp[n-1]相关，所以可以建立一个长度为2的二维数组节省空间，每次只在0和1下标取值赋值
	const dp = new Array(2);
    for (let i = 0; i < 2; i++) {        
        dp[i] = new Array(3);
    }

	// 第0个房子的粉刷方案种类
	for (let i = 0; i < 3; i++) {
		dp[0][i] = costs[0][i]
	}
    
	for (let i = 1; i < n; i++) {
		const idx = i % 2
		const pre_idx = (idx === 1 ? 0 : 1)
    
		for (let j = 0; j < 3; j++) {
			dp[idx][j] =
				Math.min(dp[pre_idx][(j + 1) % 3], dp[pre_idx][(j + 2) % 3]) +
				costs[i][j]
		}
	}
	const idx = (n - 1) % 2
	return Math.min(dp[idx][0], dp[idx][1], dp[idx][2])
}

const result = minCost([[17,2,17],[16,16,5],[14,3,19]])
console.log(result)
