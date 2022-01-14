/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const Data = function (val, count, idx) {
    this.val = val;
    this.count = count;
    this.idx = idx;
}

var countSmaller = function (nums) {
    const arr = [], ans = [];
    for (let i = 0; i < nums.length; i++) {
        arr[i] = new Data(nums[i], 0, i)
    }
    mergeSort(arr, 0, arr.length - 1)

    for (let i = 0; i < arr.length; i++) {
        ans[arr[i].idx] = arr[i].count
    }

    return ans

};

const temp = []
const mergeSort = function (arr, l, r) {
    if (l >= r) return;
    const mid = l + ((r - l) >> 1);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);

    let k = l, x = l, y = mid + 1;
    while (x <= mid || y <= r) {
        if (y > r || (x <= mid && arr[x].val > arr[y].val)) {
            arr[x].count += (r - y + 1);
            temp[k++] = arr[x++];
        } else {
            temp[k++] = arr[y++];
        }
    }

    for (let i = l; i <= r; i++) {
        arr[i] = temp[i]
    }
}