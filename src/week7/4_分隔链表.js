/**
 * https://leetcode-cn.com/problems/split-linked-list-in-parts/
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
 * @return {ListNode[]}
 */
 var splitListToParts = function (head, k) {
    let current = head, count = 0;
    while (current) {
        current = current.next;
        count++;
    }
    // console.log(count)
    // num 每个最长的数组中的数量, small 少的数组的数量， big 多的数组的数量
    let num = 0, small = 0, big = 0;

    num = Math.ceil(count / k);
    small = num * k - count;
    big = k - small;
    const ans = [];
    let idx = head;
    for (let i = 0; i < k; i++) {
        const len = big ? num : (num - 1);
        const dump = new ListNode(-1, null);
        let cur = dump;
        for (let j = 0; j < len; j++) {
            const node = new ListNode(idx.val, null);
            cur.next = node;
            cur = cur.next;
            idx = idx.next;
        }
        ans[i] = dump.next;
        big ? big-- : small--
    }
    return ans
};