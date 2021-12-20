/**
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function (orders) {
    const MOD = 1000000007;
    const buyHeap = new Heap((a, b) => a[0] > b[0]);
    const sellHeap = new Heap((a, b) => a[0] < b[0]);

    for (let i = 0; i < orders.length; i++) {
        // 采购订单
        if (!orders[i][2]) {
            const order = orders[i];
            while (sellHeap.getSize() && sellHeap.getTop()[0] <= order[0] && order[1]) {
                const amount = Math.min(order[1], sellHeap.getTop()[1]);
                order[1] -= amount;
                sellHeap.getTop()[1] -= amount;
                if (!sellHeap.getTop()[1]) {
                    sellHeap.pop()
                }
            }
            if (order[1]) {
                buyHeap.push(order)
            }
        } else {
            const order = orders[i];
            while (buyHeap.getSize() && buyHeap.getTop()[0] >= order[0] && order[1]) {
                const amount = Math.min(order[1], buyHeap.getTop()[1]);
                order[1] -= amount;
                buyHeap.getTop()[1] -= amount;
                if (!buyHeap.getTop()[1]) {
                    buyHeap.pop()
                }
            }
            if (order[1]) {
                sellHeap.push(order)
            }
        }
    }
    let ans = 0;
    let buySize = buyHeap.getSize();
    while (buySize) {
        ans += buyHeap.pop()[1] % MOD;
        buySize--;
    }
    let sellSize = sellHeap.getSize();
    while (sellSize) {
        ans += sellHeap.pop()[1] % MOD;
        sellSize--;
    }
    return ans % MOD;
};



// js实现堆
class Heap {
    constructor(compare, max) {
        this.heap = [];
        this.count = 0;
        // 默认小顶堆
        this.compare = compare || ((a, b) => a < b);
        this.max = max || Infinity;
    }
}

Heap.prototype.push = function (val) {
    if (this.count === this.max) return false;
    this.heap[this.count++] = val;
    this.heapifyUp();
    return true;
}

Heap.prototype.pop = function () {
    if (this.count === 0) return false;
    const top = this.heap[0];
    this.swap(0, this.count - 1);
    this.count--;
    this.heapifyDown();
    return top;
}

Heap.prototype.heapifyDown = function () {
    const compare = this.compare;
    let i = 0;
    while (i < this.count) {
        let temp = i;
        if (i * 2 + 1 < this.count && compare(this.heap[i * 2 + 1], this.heap[i])) {
            temp = i * 2 + 1;
        }
        if (i * 2 + 2 < this.count && compare(this.heap[i * 2 + 2], this.heap[temp])) {
            temp = i * 2 + 2;
        }
        if (temp === i) break;
        this.swap(temp, i);
        i = temp;
    }
}

Heap.prototype.heapifyUp = function () {
    const compare = this.compare;
    let i = this.count - 1;
    while (i > 0) {
        if (compare(this.heap[i], this.heap[(i - 1) >> 1])) {
            this.swap(i, (i - 1) >> 1)
            i = (i - 1) >> 1
        } else {
            break;
        }
    }
}

Heap.prototype.clear = function () {
    this.heap = [];
    this.count = 0;
}

Heap.prototype.swap = function (a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
}

Heap.prototype.get = function () {
    return this.heap;
}

Heap.prototype.getTop = function () {
    return this.heap[0];
}

Heap.prototype.getSize = function () {
    return this.count;
}
