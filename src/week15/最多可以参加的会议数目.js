/**
 * @param {number[][]} events
 * @return {number}
 */
 var maxEvents = function (events) {
    events.sort((a, b) => a[0] - b[0]);
    const heap = new Heap((a, b) => a[1] < b[1])

    const n = events.length;
    let currentDay = 1, idx = 0, res = 0;

    while (idx < n || heap.getSize()) {
        // 将所有当天开始的会议加入堆
        while (idx < n && events[idx][0] === currentDay) {
            heap.push(events[idx]);
            idx++;
        }

        // 清除开不了的会，即当前日期在会议结束时间之后
        while (heap.getSize() && heap.getTop()[1] < currentDay) {
            heap.pop()
        }

        // 如果当天有会议，即heap不为空，将删除一天会议
        if (heap.getSize()) {
            const top = heap.getTop();
            if (currentDay >= top[0] && currentDay <= top[1]) {
                res++;
                heap.pop();
            }
        }

        // 当天过去了
        currentDay++;
    }

    return res;

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