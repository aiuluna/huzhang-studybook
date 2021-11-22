/**
 * 合并K个升序链表
 * 
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/
 * 
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
    const n = lists.length;
    // let ans = null;
    // for (let i = 0; i < n; i++) {
    //     ans = mergeTwoList(ans, lists[i])
    // }
    // return ans
    return merge(0, n - 1, lists)
};

var merge = function (l, r, list) {
    if (l === r) return list[l];
    if (l > r) return null;
    const mid = ((r - l) >> 1) + l;
    return mergeTwoList(merge(l, mid, list), merge(mid + 1, r, list))
}

var mergeTwoList = function (l, r) {
    if (!l || !r) return l ? l : r;
    let left = l, right = r;
    let dump = new ListNode(-1);
    const result = dump;
    while (left && right) {
        if (left.val > right.val) {
            dump.next = right;
            right = right.next;
        } else {
            dump.next = left;
            left = left.next;
        }
        dump = dump.next;
    }
    dump.next = left ? left : right;
    return result.next;
}