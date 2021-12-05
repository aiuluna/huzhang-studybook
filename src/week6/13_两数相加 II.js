/**
 *  https://leetcode-cn.com/problems/add-two-numbers-ii 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function (l1, l2) {
    const stack_A = [], stack_B = [];
    while(l1) {
        stack_A.push(l1.val);
        l1 = l1.next;
    }
    while(l2) {
        stack_B.push(l2.val);
        l2 = l2.next;
    }
    let step = 0;
    let ans = null;
    while (stack_A.length || stack_B.length || step) {
        const a = stack_A.length > 0 ? stack_A.pop() : 0, b = stack_B.length > 0 ? stack_B.pop() : 0;
        let _step = step;
        let val;
        step = 0;
        if (a + b + _step >= 10) {
            step = 1;
            val = (a + b + _step) % 10;
        } else {
            val = (a + b + _step)
        }
        const node = new ListNode(val);
        node.next = ans;
        ans = node;
    }

    return ans;
};