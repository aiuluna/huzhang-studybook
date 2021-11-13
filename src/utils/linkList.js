function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

function generateList(array) {
	let dump = new ListNode(-1)
	let idx = dump
	for (let val of array) {
		const cur = new ListNode(val, null)
		dump.next = cur
		dump = dump.next
	}
	return idx.next
}

function list2Array(root) {
	const arr = []
	while (root) {
		arr.push(root.val)
		root = root.next
	}
	return arr
}

module.exports = { ListNode, generateList, list2Array }
