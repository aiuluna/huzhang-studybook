/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */

var nthSuperUglyNumber = function (n, primes) {
    const dp = new Array(n);
    dp[0] = 1;
    
    // 定义每个质因数的指针 
    const p = new Array(primes.length).fill(0);

    for (let i = 1; i < n; i++) {
        let min = Infinity;
        primes.forEach((prime, idx) => {
            min = Math.min(dp[p[idx]] * prime, min);
        })
        dp[i] = min;
        for (let j = 0; j < p.length; j++) {
            if (min === dp[p[j]] * primes[j]) {
                p[j]++;
            }
        }
    }
    return dp[n-1]
}



// 内存溢出
// var nthSuperUglyNumber = function (n, primes) {
//     const heap = new Heap((a, b) => a < b);
//     const set = new Set();

//     heap.push(1);

//     let top = 0;
//     for (let i = 1; i < n; i++) {
//         top = heap.pop();
//         for (p of primes) {
//             const num = top * p % (Math.pow(2,32) - 1)
//             if (!set.has(num)) {
//                 set.add(num)
//                 heap.push(num)
//             }
//         }
//     }
//     return heap.getTop();
// };



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
