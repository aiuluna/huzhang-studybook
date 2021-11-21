/**
 * 复制带随机指针的链表
 * 
 * https://leetcode-cn.com/problems/copy-list-with-random-pointer/
 * 
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function (head, cachedNode = new Map()) {
    if (!head) return null;

    if (!cachedNode.has(head)) {
        // 新的节点，新的值，旧的next
        // cachedNode.set(head, { val: head.val });
        const node = new Node(head.val)
        cachedNode.set(head, node);
        node.next = copyRandomList(head.next, cachedNode);
        node.random = copyRandomList(head.random, cachedNode)
    }
    return cachedNode.get(head)
};
