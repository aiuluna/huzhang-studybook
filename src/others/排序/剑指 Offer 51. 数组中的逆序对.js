/**
 * @param {number[]} nums
 * @return {number}
 */
 var reversePairs = function (nums) {
    return mergeSortCountResult(nums, 0, nums.length - 1);
};

const temp = []
var mergeSortCountResult = function (arr, l, r) {
    if (l >= r) return 0;
    let res = 0;
    const mid = l + ((r - l) >> 1);
    res += mergeSortCountResult(arr, l, mid);
    res += mergeSortCountResult(arr, mid + 1, r);
    let p = l, q = mid + 1, k = l;
    while (p <= mid || q <= r) {
        if (q > r || (p <= mid && arr[p] <= arr[q])) {
            temp[k++] = arr[p++];
        } else {
            temp[k++] = arr[q++];
            res += mid - p + 1;
        }
    }
    for (let i = l; i <= r; i++) {
        arr[i] = temp[i]
    }
    return res;
}