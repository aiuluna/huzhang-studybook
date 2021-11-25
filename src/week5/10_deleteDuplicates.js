/**
 * 删除排序链表中的重复元素
 * 
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
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
 var deleteDuplicates = function (head) {
    const map = new Map();
    let current = head;
    const dump = new ListNode(-1, head)
    while (current && current.next) {
        if (!map.get(current.val)) {
            map.set(current.val, 1);
        }
        while (current.next && map.get(current.next.val)) {
            current.next = current.next.next
        }
        current = current.next
    }
    return dump.next;
};