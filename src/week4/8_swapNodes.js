/**
 * 交换链表中的节点
 * https://leetcode-cn.com/problems/swapping-nodes-in-a-linked-list/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var swapNodes = function (head, k) {
    let n = 0, cur = head;
    while (cur) {
        cur = cur.next;
        n++;
    }
    
    let k1 = n - k + 1;
    let slow = head, fast = head;

    while (k > 1) {
        slow = slow.next;
        k--
    }
    while (k1 > 1) {
        fast = fast.next;
        k1--
    }
    const temp = slow.val;
    slow.val = fast.val;
    fast.val = temp;

    return head;
};