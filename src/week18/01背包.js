// var knapsack = function (weights, n, w) {
// 	// n表示背包， w表示最大承载重量
// 	const dp = new Array(n).fill(false).map(() => new Array(w + 1).fill(false))
// 	dp[0][0] = true
// 	dp[0][2] = true

// 	for (let i = 1; i < n; i++) {
// 		for (let j = 0; j <= w; j++) {
// 			if (dp[i - 1][j]) dp[i][j] = true
// 			if (j - weights[i] >= 0) {
// 				if (dp[i - 1][j]) dp[i][j + weights[i]] = true
// 			}
// 		}
// 	}

// 	for (let i = w; i >= 0; i--) {
// 		if (dp[n - 1][i]) return i
// 	}
// 	return 0
// }

var knapsack = function (weights, n, w) {
	// n表示背包， w表示最大承载重量
	const dp = new Array(w + 1).fill(0)
	if (weights[0] < w) {
		dp[weights[0]] = 1
	}

	for (let i = 1; i < n; i++) {
        for (let j = w - weights[i]; j >= 0; j--) {
            // console.log(j)
            if (dp[j]) {
                dp[j + weights[i]] = 1; 
            }
        }
    }

    console.log(dp)
	for (let i = w; i >= 0; i--) {
		if (dp[i]) return i
	}
	return 0
}

const result = knapsack([2, 2, 1, 5, 3], 5, 8)
console.log(result)
