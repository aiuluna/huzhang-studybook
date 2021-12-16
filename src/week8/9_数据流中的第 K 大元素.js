/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.heap = new Heap('less', k);
    this.count = k;
    nums.forEach(num => {
        if (this.heap.getSize() < k) {
            this.heap.push(num)
        } else {
            const top = this.heap.getTop();
            if (num > top) {
                this.heap.pop();
                this.heap.push(num)
            }
        }
    })
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (this.heap.getSize() < this.count) {
        this.heap.push(val)
    } else {
        const top = this.heap.getTop();
        if (val > top) {
            this.heap.pop();
            this.heap.push(val)
        }
    }

    return this.heap.getSize() ? this.heap.getTop() : null;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */




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
            if (this.heap[i] < this.heap[(i - 1) >> 1]) {
                this.swap(i, (i - 1) >> 1)
                i = (i - 1) >> 1
            } else {
                break;
            }
        } else {
            if (this.heap[i] > this.heap[(i - 1) >> 1]) {
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
