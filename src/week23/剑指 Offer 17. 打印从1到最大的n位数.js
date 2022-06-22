/**
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
 * 示例 1:
 * 输入: n = 1
 * 输出: [1,2,3,4,5,6,7,8,9]
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
	const res = []
	dfs(0, n, '', res)
	return res
}

var dfs = function (x, n, str, res) {
	if (x === n) {
		str !== '0' && res.push(str)
		return
	}
	for (let i = 0; i < 10; i++) {
		str = str === '0' ? i + '' : str + i;
		dfs(x + 1, n, str, res)
		str = str.substr(0, str.length - 1)
	}
}

printNumbers(3)
