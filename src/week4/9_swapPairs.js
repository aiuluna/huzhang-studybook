/**
 * 两两交换链表中的节点
 * 
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * 
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
 var swapPairs = function(head) {
    if (!head || !head.next) return head;
    let next = head.next;
    head.next = swapPairs(next.next)
    next.next = head;

    return next;
};