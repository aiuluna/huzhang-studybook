/**
 * 旋转链表
 * https://leetcode-cn.com/problems/rotate-list/
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
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
var rotateRight = function (head, k) {
  // 链表长度
  let count = 0;
  let slow = head;
  let current = new ListNode (-1, head);
  while (current.next) {
    current = current.next;
    count++;
  }
  let n = count - k % count;
  current.next = head;

  while (n) {
    slow = slow.next;
    current = current.next;
    n--;
  }
  current.next = null;
  return slow;
};
