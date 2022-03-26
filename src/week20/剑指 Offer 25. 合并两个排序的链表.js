/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function (l1, l2) {
  const dump = new ListNode(-1);
  let cur = dump;
  while (l1 && l2) {
      if (l1.val < l2.val) {
          const node = new ListNode(l1.val);
          cur.next = node;
          cur = cur.next;
          l1 = l1.next;
      } else {
          const node = new ListNode(l2.val);
          cur.next = node;
          cur = cur.next;
          l2 = l2.next;
      }
  }

  cur.next = l1 ? l1 : l2;
  return dump.next;
};