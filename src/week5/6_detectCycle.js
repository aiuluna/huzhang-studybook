/**
 * 环形链表 II
 * 
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/
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
 var detectCycle = function(head) {
    if (!head || !head.next) {
        return null;
    }
    let slow = head.next, fast = head.next.next;
    let isCycle = false;
    while(fast && fast.next && fast.next.next && fast !== slow) {    
        fast = fast.next.next;
        slow = slow.next;        
    }0.

    isCycle = fast && fast === slow


    if (!isCycle) return null;
    let current = head;
    while(current !== fast) {
        current = current.next;
        fast = fast.next;
    }

    return current;
};