/**
 * https://leetcode-cn.com/problems/linked-list-cycle-lcci/
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function (head) {
    if (!head) return null;
    const dump = new ListNode(-1, head)
    let slow = dump.next, fast = dump.next.next;
    while (slow !== fast) {
        if (!slow || !fast) return null
        slow = slow.next;
        fast = fast.next?.next;
    }


    let current = dump;
    while (current !== slow) {
        current = current.next;
        slow = slow.next;
    }
    return current;

  
};