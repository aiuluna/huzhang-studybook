/**
 * 删除链表的倒数第 N 个结点
 * 
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function (head, n) {
    if (!head) return null;
    let idx = 0;
    let current = head;
    let dump = new ListNode(-1, head)
    while (current) {
        current = current.next;
        idx++;
    }
    let target = idx - n - 1;
    current = head;
    if (target < 0) {
        head = head.next;
        return head;
    }
    while (target > 0) {
        current = current.next;
        target--;
    }
    current.next ? current.next = current.next.next : current.next = null;
    return dump.next;

};