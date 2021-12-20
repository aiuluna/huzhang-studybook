/**
 * @param {number} n
 * @return {number}
 */
// var nthUglyNumber = function(n) {
//     const dp = new Array(n)
//     dp[0] = 1;
//     let cur2 = 0, cur3 = 0, cur5 = 0;
//     for (let i = 1; i < n; i++) {
//         dp[i] = Math.min(dp[cur2] * 2, dp[cur3] * 3, dp[cur5] * 5);
//         if (dp[i] === dp[cur2] * 2) cur2++;
//         if (dp[i] === dp[cur3] * 3) cur3++;
//         if (dp[i] === dp[cur5] * 5) cur5++;
//     }
//     return dp[n-1]
// };


var nthUglyNumber = function (n) {
    const set = new Set();
    const heap = new Heap((a, b) => a < b);

    heap.push(1);
    let top = 0;
    while (heap.getSize() && n > 0) {
        top = heap.pop();
        n--;
        const num2 = top * 2, num3 = top * 3, num5 = top * 5;
        if (!set.has(num2)) {
            heap.push(num2)
            set.add(num2)
        }
        if (!set.has(num3)) {
            heap.push(num3)
            set.add(num3)
        }
        if (!set.has(num5)) {
            heap.push(num5)
            set.add(num5)
        }
    }
    return top

}

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
