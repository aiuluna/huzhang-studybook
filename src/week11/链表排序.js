/**
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
 var sortList = function (head) {
    if (!head || !head.next) return head;

    let slow = head, fast = head.next;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    const next = slow.next;
    slow.next = null;

    const left = sortList(head);
    const right = sortList(next);

    const dump = new ListNode(-1);
    let l = left, r = right, idx = dump;
    while (l || r) {
        if (!r || (l && l.val <= r.val)) {
            idx.next = new ListNode(l.val)
            l = l.next;
            idx = idx.next;
        } else {
            idx.next = new ListNode(r.val)
            r = r.next;
            idx = idx.next;
        }
    }
    if (l) {
        idx.next = l
    } else {
        idx.next = r
    }
    return dump.next;
};
