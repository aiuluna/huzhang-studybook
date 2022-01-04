/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function (lists) {
    const res = mergeSort(lists, 0, lists.length - 1);
    return res
};


var mergeSort = function (lists, l, r) {
    if (l > r) return null;
    if (l === r) return lists[l];
    const mid = l + ((r - l) >> 1);
    const left = mergeSort(lists, l, mid);
    const right = mergeSort(lists, mid + 1, r);
    const dump = new ListNode(-1);
    let p = left, q = right, current = dump;
    while (p || q) {
        if (!q || (p && p.val <= q.val)) {
            current.next = p;
            current = current.next;
            p = p.next;
        } else {
            current.next = q;
            current = current.next;
            q = q.next;
        }
    }
    return dump.next;
}