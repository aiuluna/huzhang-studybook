/**
 * https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/
 * 
 * Initialize your data structure here.
 */
 var MyQueue = function () {
    this.offer = [];
    this.poll = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.offer.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    this.prepare();
    return this.poll.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    this.prepare();
    return this.poll[this.poll.length - 1]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.offer.length === 0 && this.poll.length === 0;
};

MyQueue.prototype.prepare = function () {
    if (!this.poll.length) {
        while (this.offer.length) {
            this.poll.push(this.offer.pop())
        }
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */