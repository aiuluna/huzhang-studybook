/**
 *  https://leetcode-cn.com/problems/minimum-remove-to-make-valid-parentheses
 *
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
	let count = 0
	const n = s.length
	let ans = ''
	for (let i = 0; i < n; i++) {
		if (s[i] === '(') {
			count++
		} else if (s[i] === ')') {
			if (!count) {
				continue
			} else {
				count--
			}
		}
		ans += s[i]
	}
	let res = ans
	if (count > 0) {
		res = ''
		for (let i = ans.length - 1; i >= 0; i--) {
			if (ans[i] === '(') {
				count--
				if (count >= 0) continue
			}
			res = ans[i] + res
		}
	}
	return res
}
