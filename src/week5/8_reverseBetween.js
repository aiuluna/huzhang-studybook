/**
 * 反转链表 II
 * 
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function (head, left, right) {
    const dump = new ListNode(-1, head)
    let current = head;
    let idx = 1;
    let prev = null, leftNode = null, rightNode = null;
    while (current) {
        if (idx < left) {
            if (left - idx === 1) leftNode = current;
            current = current.next;
            idx++;
        } else if (idx === left) {
            rightNode = current;
            while (idx <= right) {
                const next = current.next;
                current.next = prev;
                prev = current;
                current = next;
                idx++
            }
            leftNode && (leftNode.next = prev)
            current && (rightNode.next = current)
            break;
        }
    }

    return leftNode ? dump.next : prev;
};