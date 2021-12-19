/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const heap = new Heap('less', k, (a, b) => a < b);
    for (let i = 0; i < nums.length; i++) {
        if (heap.getSize() < k) {
            heap.push(nums[i])
        } else if (nums[i] > heap.getTop()) {
            heap.pop();
            heap.push(nums[i])
        }
    }
    return heap.getTop()
};

class Heap {
    // type = greater, less
    constructor(type, max, compare) {
        this.heap = [];
        this.type = type || 'less';
        this.count = 0;
        this.max = max || Infinity;
        this.compare = compare || null;
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
        // 小顶堆
        if (this.type === 'less') {
            if (i * 2 + 1 < this.count && (compare ? compare(this.heap[i], this.heap[i * 2 + 1]) : this.heap[i] > this.heap[i * 2 + 1])) {
                temp = i * 2 + 1;
            }
            if (i * 2 + 2 < this.count && (compare ? compare(this.heap[temp], this.heap[i * 2 + 2]) : this.heap[temp] > this.heap[i * 2 + 2])) {
                temp = i * 2 + 2;
            }

        } else {
            if (i * 2 + 1 < this.count && (compare ? compare(this.heap[i], this.heap[i * 2 + 1]) : this.heap[i] < this.heap[i * 2 + 1])) {
                temp = i * 2 + 1;
            }
            if (i * 2 + 2 < this.count && (compare ? compare(this.heap[temp], this.heap[i * 2 + 2]) : this.heap[temp] < this.heap[i * 2 + 2])) {
                temp = i * 2 + 2;
            }
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
        if (this.type === 'less') {
            if (compare ? compare(this.heap[i], this.heap[(i - 1) >> 1]) : this.heap[i] < this.heap[(i - 1) >> 1]) {
                this.swap(i, (i - 1) >> 1)
                i = (i - 1) >> 1
            } else {
                break;
            }
        } else {
            if (compare ? compare(this.heap[i], this.heap[(i - 1) >> 1]) : this.heap[i] > this.heap[(i - 1) >> 1]) {
                this.swap(i, (i - 1) >> 1)
                i = (i - 1) >> 1
            } else {
                break;
            }
        }
    }
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
