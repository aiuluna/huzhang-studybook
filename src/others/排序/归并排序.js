function mergeSort(arr, l, r) {
    if (l >= r) return;
    const mid = l + ((r - l) >> 1);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);
    let p = l, q = mid + 1, k = 0;
    const temp = [];
    while (p <= mid || q <= r) {
        if (q > r || (p <= mid && arr[p] <= arr[q])) {
            temp[k++] = arr[p++];
        } else {
            temp[k++] = arr[q++];
        }
    }
    for (let i = 0; i < temp.length; i++) {
        arr[l + i] = temp[i]
    }
}

const arr = [7, 9, 8, 1, 3, 6, 4, 5, 2, 0];
mergeSort(arr, 0, arr.length - 1)
console.log(arr);

