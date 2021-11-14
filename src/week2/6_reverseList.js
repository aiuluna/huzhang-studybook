/**
 * 反转链表
 * https://leetcode-cn.com/problems/UHnkqh/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const {generateList} = require ('../utils/linkList');

const reverseList = function (head) {
    let prev = null;
    let current = head;
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;

    }
    return prev
};

const head = generateList([1, 2, 3, 4, 5]);
const result = reverseList(head);
console.log(result)