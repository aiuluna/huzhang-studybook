/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const small_dump = new ListNode(-1, null);
    const big_dump = new ListNode(-1, null);
    let small = small_dump, big = big_dump;
    while (head) {
        if (head.val < x) {
            small.next = head;
            small = small.next;
        } else {
            big.next = head;
            big = big.next;
        }
        head = head.next;
    }
    big.next = null;
    small.next = big_dump.next;
    return small_dump.next;
};
