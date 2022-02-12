/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var flatten = function (head, next) {
    const dump = new Node(-1, null, head, null);
    let last = null;
    while (head) {
        if (!head.next) {
            last = head;
        }
        if (!head.child) {
            head = head.next
        } else {
            let _next = null;
            if (head.next) {
                _next = head.next;
                _next.prev = null;
            }
            const child = head.child;
            head.child = null;

            const newF = flatten(child, _next);
            head.next = newF;
            newF.prev = head;
        }
    }
    if (next) {
        last.next = next;
        next.prev = last;
    }
    return dump.next;
};