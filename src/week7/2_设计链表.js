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