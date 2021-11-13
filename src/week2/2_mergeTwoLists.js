/**
 * 合并两个有序链表
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const { ListNode, generateList, list2Array } = require('../utils/linkList')

// 迭代
// function mergeTwoLists(l1, l2) {
// 	let idx_l1 = l1,
// 		idx_l2 = l2
// 	let dump = new ListNode(-1)
// 	const idx = dump
// 	while (idx_l1 && idx_l2) {
// 		if (idx_l1.val < idx_l2.val) {
// 			dump.next = idx_l1
// 			idx_l1 = idx_l1.next
// 		} else {
// 			dump.next = idx_l2
// 			idx_l2 = idx_l2.next
// 		}
// 		dump = dump.next
// 	}
// 	dump.next = idx_l1 ? idx_l1 : idx_l2
// 	return idx.next
// }

// 递归
function mergeTwoLists(l1, l2) {
	if (!l1) return l2
	else if (!l2) return l1
	else if (l1.val < l2.val) {
		l1.next = mergeTwoLists(l1.next, l2)
		return l1
	} else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
}

const l1 = generateList([1, 2, 4])
const l2 = generateList([1, 3, 4])
const result = mergeTwoLists(l1, l2)
console.log(list2Array(result))
