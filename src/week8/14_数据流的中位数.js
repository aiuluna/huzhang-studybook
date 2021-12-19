/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
    this.largerHeap = new Heap((a, b) => a > b);
    this.lessHeap = new Heap((a, b) => a < b);
    this.count = 0;
    this.array = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (this.largerHeap.getSize() === 0 && this.lessHeap.getSize() === 0) {
        this.largerHeap.push(num)
    } else {
        const left = this.largerHeap.getTop(), right = this.lessHeap.getTop();
        if (num > right) {
            if (this.lessHeap.getSize() > this.largerHeap.getSize()) {
                this.largerHeap.push(this.lessHeap.pop())
            }
            this.lessHeap.push(num)
        } else if (num < left) {
            if (this.largerHeap.getSize() > this.lessHeap.getSize()) {
                this.lessHeap.push(this.largerHeap.pop())
            }
            this.largerHeap.push(num)
        } else {
            if (this.largerHeap.getSize() < this.lessHeap.getSize()) {
                this.largerHeap.push(num)
            } else {
                this.lessHeap.push(num)
            }
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    let res;
    if (!this.largerHeap.getSize() && !this.lessHeap.getSize()) {
        res = null;
    } else if (this.largerHeap.getSize() < this.lessHeap.getSize()) {
        res = this.lessHeap.getTop()
    } else if (this.largerHeap.getSize() > this.lessHeap.getSize()) {
        res = this.largerHeap.getTop()
    } else {
        res = (this.largerHeap.getTop() + this.lessHeap.getTop()) / 2;
    }
    return res
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */


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
