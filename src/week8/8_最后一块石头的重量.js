/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    const len = stones.length;
    const heap = new Heap('greater', len);
    stones.forEach(stone => heap.push(stone));
    // let ans = 0;
    while (heap.getSize() > 1) {
        const big = heap.pop();
        const small = heap.pop();
        if (big - small) {
            heap.push(big - small);
        }
    }
    return heap.getSize() ? heap.getTop() : 0
};


class Heap {
    // type = greater, less
    constructor(type, max) {
        this.heap = [];
        this.type = type || 'less';
        this.count = 0;
        this.max = max || Infinity;
    }

}

Heap.prototype.push = function (val) {
    if (this.count === this.max) return false;
    this.heap[this.count++] = val;
    this.heapifyUp();
    // console.log('heap ===>', this.heap)
    return true;
}

Heap.prototype.pop = function () {
    if (this.count === 0) return false;
    const top = this.heap[0];
    this.swap(0, this.count - 1);
    this.count--;
    this.heapifyDown();
    // console.log('top ====>', top)
    // console.log('heap ===>', this.heap)
    return top;
}

Heap.prototype.heapifyDown = function () {
    let i = 0;
    while (i < this.count) {
        let temp = i;
        // 小顶堆
        if (this.type === 'less') {
            if (i * 2 + 1 < this.count && this.heap[i] > this.heap[i * 2 + 1]) {
                temp = i * 2 + 1;
            }
            if (i * 2 + 2 < this.count && this.heap[temp] > this.heap[i * 2 + 2]) {
                temp = i * 2 + 2;
            }

        } else {
            if (i * 2 + 1 < this.count && this.heap[i] < this.heap[i * 2 + 1]) {
                temp = i * 2 + 1;
            }
            if (i * 2 + 2 < this.count && this.heap[temp] < this.heap[i * 2 + 2]) {
                temp = i * 2 + 2;
            }
        }
        if (temp === i) break;
        this.swap(temp, i);
        i = temp;
    }
}

Heap.prototype.heapifyUp = function () {
    let i = this.count - 1;
    while (i > 0) {
        if (this.type === 'less') {
            if (this.heap[i] < this.heap[Math.floor((i - 1) / 2)]) {
                this.swap(i, Math.floor((i - 1) / 2))
                i = Math.floor((i - 1) / 2)
            } else {
                break;
            }
        } else {
            if (this.heap[i] > this.heap[Math.floor((i - 1) / 2)]) {
                this.swap(i, Math.floor((i - 1) / 2))
                i = Math.floor((i - 1) / 2)
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
