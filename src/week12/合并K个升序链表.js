/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function (lists) {
    const heap = new Heap((a, b) => a.val < b.val)
    const dump = new ListNode(-1);
    let idx = dump;

    for (let i = 0; i < lists.length; i++) {
        lists[i] && heap.push(lists[i])
    }


    while (heap.getSize()) {
        const top = heap.pop();
        const next = top.next;
        idx.next = new ListNode(top.val);
        idx = idx.next;
        next && heap.push(next)
    }

    return dump.next;
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






/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function (lists) {
    return mergeSort(lists, 0, lists.length - 1)
};

var mergeSort = function (lists, l, r) {
    if (l > r) return null;
    if (l === r) return lists[l]

    const mid = l + ((r - l) >> 1);

    const left = mergeSort(lists, l, mid)
    const right = mergeSort(lists, mid + 1, r)

    const dump = new ListNode(-1);
    let idx = dump, x = left, y = right;
    while (x || y) {
        if (!y || (x && x.val <= y.val)) {
            idx.next = new ListNode(x.val);
            idx = idx.next;
            x = x.next;
        } else {
            idx.next = new ListNode(y.val);
            idx = idx.next;
            y = y.next;
        }
    }
    return dump.next
}