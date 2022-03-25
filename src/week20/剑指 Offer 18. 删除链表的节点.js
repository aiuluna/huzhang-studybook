/**
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
 var deleteNode = function(head, val) {
    if (!head) return null;
    const dump = new ListNode(-1, head);
    let fast = head.next, slow = head;
    if (slow.val === val) return slow.next;
    while(fast && slow) {
        if (fast.val === val) {
            slow.next = fast.next;
            return dump.next;
        }
        fast = fast.next;
        slow = slow.next;
    }
    return dump.next;
};