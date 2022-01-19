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
 var addTwoNumbers = function (l1, l2) {
    const dump = new ListNode(-1);
    // const _l1 = reverseLink(l1);
    // const _l2 = reverseLink(l2);
    let x = l1, y = l2, result = dump, up = 0;
    while (x && y) {
        let d = x.val + y.val + up;
        if (d >= 10) {
            up = 1;
            result.next = new ListNode(d % 10);
        } else {
            up = 0;
            result.next = new ListNode(d);
        }
        result = result.next;
        x = x.next;
        y = y.next;
    }
    if (x) {
        let t = x;
        while (t && up) {
            const v = t.val + up;
            if (v >= 10) {
                up = 1;
                t.val = v % 10
            } else {
                up = 0
                t.val = v;
            }
            t = t.next
        }
        result.next = x
         while(result.next) {
            result = result.next
        }
    }
    if (y) {
        let t = y;
        while (t && up) {
            const v = t.val + up;
            if (v >= 10) {
                up = 1;
                t.val = v % 10
            } else {
                up = 0
                t.val = v;
            }
            t = t.next
        }
        result.next = y
        while(result.next) {
            result = result.next
        }
    }
    if (up === 1) {
        result.next = new ListNode(1);
    }
    return dump.next;
};

var reverseLink = function (node) {
    let pre = null;
    let current = node;
    while (current) {
        const next = current.next;
        current.next = pre;
        pre = current;
        current = next;
    }
    return pre;
}