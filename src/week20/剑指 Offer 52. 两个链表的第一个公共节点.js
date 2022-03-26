/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
      return null;
  }
  let first = headA, secend = headB;
  while (first !== secend) {
      if (first) {
          first = first.next;
      } else {
          first = headB;
      }
      if (secend) {
          secend = secend.next;
      } else {
          secend = headA;
      }
  }
  return first;
};