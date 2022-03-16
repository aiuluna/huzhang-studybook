/**
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
var copyRandomList = function (head) {
	const dump = new Node(-1);
    const res = dump;
	const map = new Map()
	while (head) {
		if (!map.has(head.val)) map.set(head.val, new Node(head.val))
		const cur = map.get(head.val)
		if (head.random) {
            const random = head.random;
			if (!map.has(random.val)) map.set(random.val, new Node(random.val))
            cur.random = map.get(random.val)
		}
		dump.next = cur;
        head = head.next;
        dump = dump.next;
	}
    return res.next;
}
