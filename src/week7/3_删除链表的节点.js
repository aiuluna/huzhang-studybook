/**
 * https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function (head, val) {
    const dump = new ListNode(-1, head);
    let current = dump;
    while (current.next && current.next.val !== val) {
        current = current.next;
    }
    if (current.next) {
        current.next = current.next.next;
    }
    return dump.next;
};