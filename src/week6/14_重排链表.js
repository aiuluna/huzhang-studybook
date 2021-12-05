/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode-cn.com/problems/reorder-list
 *
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
	const arr = []
	let p = null
	while (head) {
		p = head.next
		head.next = null
		arr.push(head)
		head = p
	}

	let left = 0,
		right = arr.length - 1
	while (left < right) {
		arr[left].next = arr[right]
		if (left + 1 < right) {
			arr[right].next = arr[left + 1]
		}
		left++
		right--
	}
}
