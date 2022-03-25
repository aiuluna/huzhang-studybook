/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
    let fast = head;
    while(k > 0 && fast) {
        fast = fast.next;
        k--;
    }
    if (!fast && k > 0) return null;
    if (!fast) return head;
    let slow = head;
    while(fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow
};