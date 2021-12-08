var MyLinkedList = function () {
    this.length = 0;
    this.head = null;
    this.tail = null;
};

/** 
 * https://leetcode-cn.com/problems/design-linked-list/
 * 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index >= this.length) return -1;
    let ans = this.head;
    while (index) {
        ans = ans.next;
        index--;
    }
    return ans.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const node = new ListNode(val, this.head);
    if (!this.length) {
        this.tail = node;
    }
    this.head = node;
    this.length += 1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const node = new ListNode(val, null);
    if (!this.length) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        this.tail = this.tail.next;
    }
    this.length += 1;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.length) {
        return
    } else if (index === this.length) {
        this.addAtTail(val)
    } else if (index <= 0) {
        this.addAtHead(val)
    } else {
        index -= 1;
        let current = this.head;
        let idx = 0;
        while (idx < index) {
            current = current.next;
            idx++;
        }
        const next = current.next;
        current.next = new ListNode(val, next);
        this.length += 1;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index >= this.length) return;
    if (index === 0) {
        this.head = this.head.next;
        this.length -= 1;
        return;
    }
    let current = this.head;
    while (index > 1) {
        current = current.next;
        index--;
    }
    if (current.next === this.tail) {
        this.tail = current;
    }
    current.next = current.next.next;
    this.length -= 1;
};

function ListNode(val, next) {
    this.val = val;
    this.next = next || null;
}

function getLen(node) {
    let count = 0;
    while (node) {
        node = node.next;
        count++;
    }
    return count;
}
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */







var MyLinkedList = function () {
    this.size = 0;
    const dump_head = new ListNode(-1);
    const dump_tail = new ListNode(-1);
    dump_head.next = dump_tail;
    dump_tail.prev = dump_head;
    this.head = dump_head
    this.tail = dump_tail;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index >= this.size) {
        return -1;
    }
    if ((index + 1) * 2 > this.size) {
        // 靠近尾部，从尾部查找
        let idx = this.size - index;
        let current = this.tail;
        while (idx) {
            current = current.prev;
            idx--;
        }
        return current.val;
    } else {
        let idx = index + 1;
        let current = this.head;
        while (idx) {
            current = current.next;
            idx--;
        }
        return current.val;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const next = this.head.next;
    const node = new ListNode(val, next, this.head);
    next.prev = node;
    this.head.next = node;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const prev = this.tail.prev;
    const node = new ListNode(val, this.tail, prev);
    this.tail.prev = node;
    prev.next = node;
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.size) {
        return
    } else if (index === this.size) {
        this.addAtTail(val)
    } else if (index <= 0) {
        this.addAtHead(val)
    } else {
        let idx = 0, current = null;
        if ((index + 1) * 2 > this.size) {
            idx = this.size - index;
            current = this.tail;
            while (idx) {
                current = current.prev;
                idx--;
            }
        } else {
            idx = index + 1;
            current = this.head;
            while (idx) {
                current = current.next;
                idx--;
            }
        }
        const prev = current.prev;
        const node = new ListNode(val, current, prev);
        prev.next = node;
        current.prev = node;
        this.size++;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index >= 0 && index < this.size) {
        let idx = 0, current = null;
        if ((index + 1) * 2 > this.size) {
            idx = this.size - index;
            current = this.tail;
            while (idx) {
                current = current.prev;
                idx--;
            }
        } else {
            idx = index + 1;
            current = this.head;
            while (idx) {
                current = current.next;
                idx--;
            }
        }
        const prev = current.prev;
        const next = current.next;
        prev.next = next;
        next.prev = prev;
        this.size--;
    }
};

function ListNode(val, next, prev) {
    this.val = val || 0;
    this.next = next || null;
    this.prev = prev || null;
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

