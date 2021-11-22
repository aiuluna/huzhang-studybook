/**
 * 合并K个升序链表
 * 
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/
 * 
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
    const n = lists.length;
    // let ans = null;
    // for (let i = 0; i < n; i++) {
    //     ans = mergeTwoList(ans, lists[i])
    // }
    // return ans
    return merge(0, n - 1, lists)
};

var merge = function (l, r, list) {
    if (l === r) return list[l];
    if (l > r) return null;
    const mid = ((r - l) >> 1) + l;
    return mergeTwoList(merge(l, mid, list), merge(mid + 1, r, list))
}

var mergeTwoList = function (l, r) {
    if (!l || !r) return l ? l : r;
    let left = l, right = r;
    let dump = new ListNode(-1);
    const result = dump;
    while (left && right) {
        if (left.val > right.val) {
            dump.next = right;
            right = right.next;
        } else {
            dump.next = left;
            left = left.next;
        }
        dump = dump.next;
    }
    dump.next = left ? left : right;
    return result.next;
}



/** --------------------------------------- */
// 小顶堆实现

var Node = function (val, list) {
    this.val = val;
    this.list = list;
}

var mergeKLists = function (lists) {
    const n = lists.length;
    if (n === 0) return null;
    if (n === 1) return lists[0];
    const heap = [null];
    let dump = new ListNode(-1);
    const result = dump;

    for (let i = 0; i < n; i++) {
        const val = lists[i] && lists[i].val;
        if (val || val === 0) {
            heap.push(new Node(val, lists[i].next))
            heapifyUp(heap)
        }
    }

    while (heap.length > 1) {
        // 先堆化
        const count = heap.length - 1;
        for (let i = 1; i <= count >> 1; i++) {
            heapifyDown(heap, i, count);
        }
        // 第一位取出来
        dump.next = new ListNode(heap[1].val);
        dump = dump.next;
        const liveList = heap[1].list;
        if (liveList) {
            const node = new Node(liveList.val, liveList.next)
            heap[1] = node;
        } else {
            heap.shift();
            heap[0] = null;
        }
    }
    return result.next
}

var heapifyUp = function (heap) {
    let i = heap.length - 1;
    while ((i >> 1) > 0 && heap[i].val < heap[i >> 1].val) {
        swap(heap, i, i >> 1);
        i = i >> 1;
    }
}

var heapifyDown = function (heap, i, count) {
    while (true) {
        let min = i;
        if (i * 2 <= count && heap[i * 2].val < heap[i].val) {
            min = i * 2
        }
        if (i * 2 + 1 <= count && heap[i * 2 + 1].val < heap[min].val) {
            min = i * 2 + 1
        }
        if (min === i) break;
        swap(heap, min, i);
        i = min;
    }
}

var swap = function (array, a, b) {
    [array[a], array[b]] = [array[b], array[a]]
}


