/**
 * 分隔链表
 * 
 * https://leetcode-cn.com/problems/partition-list/submissions/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    if (!head) return null;

    const dump = new ListNode(-1, head);
    const dump2 = new ListNode(null);
    let current = dump;
    let dumpCur = dump2;

    while (current.next) {
        if (current.next.val < x) {
            current = current.next;
            dumpCur.next = null;
        } else {
            dumpCur.next = current.next;
            dumpCur = dumpCur.next;
            current.next = current.next.next;
        }
    }
    current.next = dump2.next;

    return dump.next
};