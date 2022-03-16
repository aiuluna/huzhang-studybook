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
	if (!head) return null;

	const dump = new Node(-1, head);
	while (head) {
			const next = head.next;
			const cur = new Node(head.val);
			head.next = cur;
			cur.next = next;
			head = next;
	}
	head = dump.next;

	while(head) {
			const cp = head.next;
			const random = head.random ? head.random.next : null;
			cp.random = random;
			head = head.next.next;
	}

	head = dump.next;
	let res = head.next;
	while(head) {
			const cp = head.next;
			const next = cp.next;
			head.next = next;
			cp.next = next ? next.next : null;
			head = head.next;
	}
	return res;

};


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
var copyRandomList = function (head, map = new Map()) {
	if (!head) return null;

	if (!map.has(head)) {
		const current = new Node(head.val);
		map.set(head, current);
		current.next = copyRandomList(head.next, map);
		current.random = copyRandomList(head.random, map);
	}

	return map.get(head)

};


