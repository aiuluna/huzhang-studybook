/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    const map = new Map();
    for (let i = 0; i < words.length; i++) {
        let count = map.get(words[i]) || 0;
        map.set(words[i], ++count)
    }
    const compare = function (a, b) {
        if (a.count > b.count) {
            return true
        } else if (a.count === b.count) {
            let i = 0, max = Math.min(a.val.length, b.val.length)
            while (i < max) {
                if (a.val[i].charCodeAt() - 'a'.charCodeAt() < b.val[i].charCodeAt() - 'a'.charCodeAt()) {
                    return true;
                } else if (a.val[i].charCodeAt() - 'a'.charCodeAt() === b.val[i].charCodeAt() - 'a'.charCodeAt()) {
                    i++;
                    continue
                } else {
                    return false
                }
            }
            return a.val.length < b.val.length;
        } else {
            return false;
        }
    }
    const heap = new Heap(compare);
    for (let [key, value] of map) {
        heap.push({
            val: key,
            count: value
        })
    }
    const res = [];
    while (k && heap.getSize()) {
        res.push(heap.pop().val)
        k--
    }
    return res
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
