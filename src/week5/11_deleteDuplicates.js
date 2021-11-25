/**
 * 删除排序链表中的重复元素 II
 * 
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
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
    // let dump = new ListNode(-101, head);
    // let current = dump;

    // const stack = []
    // let prev = null;
    // while (current) {
    //     if (prev !== current.val) {
    //         prev = current.val;
    //         stack.push(current.val)
    //     } else {
    //        (stack[stack.length - 1] === prev) && stack.pop();
    //     }
    //     current = current.next;
    // }
    // let resultDump = new ListNode(-1); 
    // const result = resultDump;

    // for (let i = 1; i < stack.length; i++) {
    //     resultDump.next = new ListNode(stack[i])
    //     resultDump = resultDump.next
    // }

    // return result.next

    if (!head) return null;
    const dump = new ListNode(-101, head)
    let current = dump;

    while(current.next && current.next.next) {
        if (current.next.val === current.next.next.val) {
            const x = current.next.val;
            while(current.next && current.next.val === x) {
                current.next = current.next.next
            }
        }else {
            current = current.next
        }
    }

    console.log(dump)
    return dump.next

};