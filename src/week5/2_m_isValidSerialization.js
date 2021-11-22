/**
 * 验证二叉树的前序序列化
 *
 * https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree/
 *
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
	// 初始化给root节点一个坑位，除了root节点都需要两个坑位
	const stack = [1]
	const array = preorder.split(',')

	while (array.length > 0) {
		let n = stack.length
		// 当坑位不足但是还有节点时，false
		if (n === 0) return false

		const current = array.shift()
		// 占用上个节点一个坑位
		stack[n - 1] -= 1
		// 没坑位就出栈
		if (stack[n - 1] === 0) {
			stack.pop()
		}
		// 非null节点会产生2个坑位
		if (current !== '#') {
			stack.push(2)
		}
	}
	// 节点放置完成后查看是否还有坑位剩余，没剩余则为true
	return stack.length === 0
}

/** -------------------------------- */

var isValidSerialization = function (preorder) {
	// 如果是子节点就把整个节点重置为一个#
	const stack = []
	const array = preorder.split(',')
	const n = array.length
	for (let i = 0; i < n; i++) {
		stack.push(array[i])
		while (
			stack.length >= 3 &&
			stack[stack.length - 1] === '#' &&
			stack[stack.length - 2] === '#' &&
			stack[stack.length - 3] !== '#'
		) {
			stack.pop()
			stack.pop()
			stack[stack.length - 1] = '#'
		}
	}
	return stack.length === 1 && stack[0] === '#'
}
