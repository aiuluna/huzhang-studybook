/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var smallestK = function (arr, k) {
    const ans = []
    sort(arr, 0, arr.length - 1, k)
    for (let i = 0; i < k; i++) {
        ans.push(arr[i])
    }
    return ans
};

var sort = function (arr, l, r, k) {
    if (l > r) return;
    const pivot = arr[r];
    let x = l, y = r;
    while (x < y) {
        while (x < y && arr[x] <= pivot) x++;
        if (x < y) {
            swapArr(arr, x, y)
            y--
        }
        while (x < y && arr[y] > pivot) y--;
        if (x < y) {
            swapArr(arr, x, y)
            x++
        }
    }
    arr[x] = pivot;
    if (x - l === k - 1) return;
    else if (x - 1 - l >= k) sort(arr, l, x - 1, k);
    else sort(arr, x + 1, r, k - (x + 1 - l))

}

var swapArr = function (arr, x, y) {
    const temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}