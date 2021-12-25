var ListNode = function (val, prev, next) {
    this.val = val;
    this.prev = prev || null;
    this.next = next || null;
}

var Queue = function () {
    this.size = 0;
    this.head = this.tail = null;
}

Queue.prototype.getSize = function () {
    return this.size;
}

Queue.prototype.isEmpty = function () {
    return !this.getSize()
}

Queue.prototype.push_back = function (val) {
    const node = new ListNode(val);
    if (this.isEmpty()) {
        this.head = this.tail = node;
    } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
    this.size++;
}

Queue.prototype.push_front = function (val) {
    const node = new ListNode(val);
    if (this.isEmpty()) {
        this.head = this.tail = node;
    } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    this.size++;
}

Queue.prototype.pop_back = function () {
    if (this.isEmpty()) return -1;
    const ret = this.tail.val;
    this.tail = this.tail.prev;
    if (this.tail) {
        this.tail.next = null;
    } else {
        this.head = null;
    }
    this.size--;
    return ret;
}

Queue.prototype.pop_front = function () {
    if (this.isEmpty()) return -1;
    const ret = this.head.val;
    if (this.getSize() === 1) {
        this.head = this.tail = null;
    } else {
        this.head = this.head.next;
        this.head.prev = null;
    }
    this.size--;
    return ret;
}

var FrontMiddleBackQueue = function () {
    this.q1 = new Queue()
    this.q2 = new Queue()
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
    this.q1.push_front(val)
    this.balance()
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
    if (this.q1.getSize() != this.q2.getSize()) {
        this.q2.push_front(this.q1.pop_back())
    }
    this.q1.push_back(val)
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
    if (this.q1.isEmpty()) {
        this.q1.push_back(val)
        return
    }
    this.q2.push_back(val)
    this.balance()
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
    const ret = this.q1.pop_front();
    this.balance();

    return ret
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
    const ret = this.q1.pop_back();
    this.balance()

    return ret;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
    if (this.q2.isEmpty()) {
        return this.q1.pop_back();
    }
    const ret = this.q2.pop_back()
    this.balance()

    return ret;
};

FrontMiddleBackQueue.prototype.balance = function () {
    if (this.q1.getSize() - this.q2.getSize() === 2) {
        this.q2.push_front(this.q1.pop_back())
    } else if (this.q2.getSize() - this.q1.getSize() === 1) {
        this.q1.push_back(this.q2.pop_front())
    }
}

FrontMiddleBackQueue.prototype.printQueue = function () {
    const arr = [];
    const q1 = [], q2 = [];
    let p1 = this.q1.head;
    while (p1) {
        arr.push(p1.val)
        q1.push(p1.val)
        p1 = p1.next;
    }
    let p2 = this.q2.head;
    while (p2) {
        arr.push(p2.val)
        q2.push(p2.val)
        p2 = p2.next;
    }
    console.log('q1==>', q1, 'q2==>', q2, 'queue==>', arr)
    return arr;
}

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

