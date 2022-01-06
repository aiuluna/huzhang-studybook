/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var Data = function (val, idx) {
    this.val = val;
    this.idx = idx;
    this.count = 0;
}

var countSmaller = function (nums) {
    const arr = new Array(nums.length), res = [];
    for (let i = 0; i < nums.length; i++) {
        arr[i] = new Data(nums[i], i)
    }
    mergeSort(arr, 0, arr.length - 1);
    for (let x of arr) {
        res[x.idx] = x.count
    }
    return res
};

const temp = []
// 从大到小排序
const mergeSort = function (arr, l, r) {
    if (l >= r) return;
    const mid = l + ((r - l) >> 1);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);

    let k = l, p = l, q = mid + 1;
    while (p <= mid || q <= r) {
        if (q > r || (p <= mid && arr[p].val > arr[q].val)) {
            arr[p].count += (r - q + 1);
            temp[k++] = arr[p++];
        } else {
            temp[k++] = arr[q++];
        }
    }
    for (let i = l; i <= r; i++) {
        arr[i] = temp[i]
    }
}