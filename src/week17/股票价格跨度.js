var StockSpanner = function () {
    this.stack = [];
    this.prev = [];
    this.arr = [];
    this.count = 0;
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    this.arr.push(price);
    while (this.stack.length && this.arr[this.stack[this.stack.length - 1]] <= price) {
        this.stack.pop()
    }
    this.stack.push(this.count++)
 
    if (this.stack.length < 2) {
        if (this.stack[0] === 0) {
            return 1
        } else {
            return this.stack[0] + 1
        }
    } else {
        return this.stack[this.stack.length - 1] - this.stack[this.stack.length - 2]
    }
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */