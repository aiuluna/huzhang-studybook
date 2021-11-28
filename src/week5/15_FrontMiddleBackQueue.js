/**
 * 设计前中后队列
 * 
 * https://leetcode-cn.com/problems/design-front-middle-back-queue/
 */

var FrontMiddleBackQueue = function () {
    this.head = this.tail = this.middle = null;
    this.count = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
    const node = new ListNode(val);
    this.count++;
    if (!this.head) {
        this.head = node;
        this.middle = node;
        this.tail = node;
    } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = this.head.prev;
        if (this.count % 2 === 0) {
            this.middle = this.middle.prev;
        }
    }
    console.log(this.head, this.middle, this.tail)

};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
    const node = new ListNode(val);
    this.count++;
    if (!this.middle) {
        this.head = node;
        this.middle = node;
        this.tail = node;
    } else {
        if (this.count % 2 === 0) {
            const prev = this.middle.prev;
            this.middle.prev = node;
            node.next = this.middle;
            if (!prev) {
                this.head = this.head.prev;
            } else {
                node.prev = prev;
                prev.next = node;
            }
            this.middle = this.middle.prev;
        } else {
            const next = this.middle.next;
            this.middle.next = node;
            node.prev = this.middle;
            if (!next) {
                this.tail = this.tail.next;
            } else {
                node.next = next;
                next.prev = node;
            }
            this.middle = this.middle.next;
        }
    }
    console.log(this.head, this.middle, this.tail)

};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
    const node = new ListNode(val);
    this.count++;
    if (!this.tail) {
        this.head = node;
        this.middle = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = this.tail.next;
        if (this.count % 2 === 1) {
            this.middle = this.middle.next;
        }
    }
    console.log(this.head, this.middle, this.tail)
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
    if (!this.head) return -1;
    const ret = this.head.val;
    this.head = this.head.next;
    this.count--;
    if (this.count === 0) {
        this.head = this.middle = this.tail = null;
    } else if (this.count % 2 === 1) {
        this.middle = this.middle.next;
    }
    console.log('popFront', this.head, this.middle, this.tail)
    return ret;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
    if (!this.middle) return -1;
    const ret = this.middle.val;
    this.count--;
    if (this.count === 0) {
        this.head = this.middle = this.tail = null;
    } else if (this.count % 2 === 0) {
        this.middle = this.middle.prev;
        this.middle.next = this.middle.next.next;
    } else {
        this.middle = this.middle.next;
        this.middle.prev = this.middle.prev.prev;
        if (this.middle.prev) {
            this.middle.prev.next = this.middle;
        }
    }
    console.log('popMiddle', this.count, this.head, this.middle, this.tail)

    return ret;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
    if (!this.tail) return -1;
    const ret = this.tail.val;
    this.tail = this.tail.prev;
    // this.tail.next = null;
    this.count--;
    if (this.count === 0) {
        this.head = this.middle = this.tail = null;
    } else if (this.count % 2 === 0) {
        this.middle = this.middle.prev;
    }
    console.log('popBack', this.head, this.middle, this.tail)

    return ret;
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */