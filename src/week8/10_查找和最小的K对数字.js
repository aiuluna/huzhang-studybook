/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
    let ans = [];
    const heap = new Heap('greater', k)
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            const sum = nums1[i] + nums2[j];
            if (heap.getSize() < k) {
                heap.push({ val: sum, arr: [nums1[i], nums2[j]] });
            } else {
                if (heap.getTop().val > sum) {
                    heap.pop();
                    heap.push({ val: sum, arr: [nums1[i], nums2[j]] });
                } else {
                    break;
                }
            }
        }
    }
    let i = heap.getSize();
    while(i) {
        ans.unshift(heap.pop().arr);
        i--;
    }
    return ans;
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

Heap.prototype.push = function (data) {
    if (this.count === this.max) return false;
    this.heap[this.count++] = data;
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
            if (i * 2 + 1 < this.count && this.heap[i].val > this.heap[i * 2 + 1].val) {
                temp = i * 2 + 1;
            }
            if (i * 2 + 2 < this.count && this.heap[temp].val > this.heap[i * 2 + 2].val) {
                temp = i * 2 + 2;
            }

        } else {
            if (i * 2 + 1 < this.count && this.heap[i].val < this.heap[i * 2 + 1].val) {
                temp = i * 2 + 1;
            }
            if (i * 2 + 2 < this.count && this.heap[temp].val < this.heap[i * 2 + 2].val) {
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
            if (this.heap[i].val < this.heap[(i - 1) >> 1].val) {
                this.swap(i, (i - 1) >> 1)
                i = (i - 1) >> 1
            } else {
                break;
            }
        } else {
            if (this.heap[i].val > this.heap[(i - 1) >> 1].val) {
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
