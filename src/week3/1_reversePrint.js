/**
 * 从尾到头打印链表
 * https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * 输入：head = [1,3,2]
 * 输出：[2,3,1]
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
const {generateList} = require('../utils/linkList')

const reversePrint = function (head) {
    let prev = null;
    let cur = head;
    while(cur) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    let idx = prev;
    const result = [];
    while(idx) {
        result.push(idx.val)
        idx = idx.next
    }
    return result
}

const head = generateList([1,3,2])
const result = reversePrint(head)
console.log(result)