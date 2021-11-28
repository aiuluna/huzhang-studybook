/**
 * 设计循环队列
 * 
 * https://leetcode-cn.com/problems/design-circular-queue/
 * 
 * @param {number} k
 */
 var MyCircularQueue = function (k) {    
    this.queue = new Array(k + 1)
    this.n = k + 1;
    this.head = 0;
    this.tail = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if ((this.tail + 1) % this.n === this.head) return false;
    this.queue[this.tail] = value;
    this.tail = (this.tail + 1) % this.n;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.tail === this.head) return false;
    this.head = (this.head + 1) % this.n;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.tail === this.head) return -1;
    return this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () { 
    if (this.tail === this.head) return -1;
    return this.queue[(this.tail - 1 + this.n) % this.n];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.tail === this.head
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return (this.tail + 1) % this.n === this.head;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */