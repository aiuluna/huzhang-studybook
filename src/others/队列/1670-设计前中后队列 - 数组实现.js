var Queue = function () {
    this.queue = new Array();
    this.size = 0;
}

Queue.prototype.push_front = function (val) {
    this.queue.unshift(val);
    this.size++;
}

Queue.prototype.push_back = function (val) {
    this.queue.push(val);
    this.size++;
}

Queue.prototype.pop_front = function () {
    if (this.isEmpty()) return -1;
    const ret = this.queue.shift();
    this.size--;
    return ret;
}

Queue.prototype.pop_back = function () {
    if (this.isEmpty()) return -1;
    const ret = this.queue.pop();
    this.size--;
    return ret;
}

Queue.prototype.getSize = function () {
    return this.size;
}

Queue.prototype.isEmpty = function () {
    return !this.getSize()
}

var FrontMiddleBackQueue = function () {
    this.q1 = new Queue();
    this.q2 = new Queue();
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
    if (this.q1.getSize() > this.q2.getSize()) {
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
        this.q1.push_back(val);
        return
    }
    this.q2.push_back(val);
    this.balance()
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
    const ret = this.q1.pop_front();
    this.balance()
    return ret;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
    const ret = this.q1.pop_back()
    if (this.q1.getSize() !== this.q2.getSize()) {
        this.balance()
    }

    return ret;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
    if (this.q2.isEmpty()) {
        return this.q1.pop_back();
    }
    const ret = this.q2.pop_back();
    this.balance();

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
    console.log('q1==>', this.q1.queue, 'q2==>', this.q2.queue)
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