/**
 * 链表中倒数第k个节点
 * 
 * https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * 
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
    let cur = head;
    let count = 0;
    while(cur) {
        cur = cur.next;
        count++;
    }
    let target = count - k;
    while(target) {
        head = head.next;
        target--;
    }
    return head
};