/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var getLeastNumbers = function (arr, k) {
    if (k === 0) return [];
    if (k > arr.length) return arr;
    fastSort(arr, 0, arr.length - 1, k - 1);
    return arr.slice(0, k);
};

var fastSort = function (arr, l, r, k) {
    if (l >= r) return;
    const parttern = arr[r];
    let i = l - 1, j = l;
    while (j < r) {
        if (arr[j] < parttern) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        j++;
    }
    [arr[i + 1], arr[r]] = [arr[r], arr[i + 1]];
    if (i + 1 === k) {
        return;
    } else if (k < i + 1) {
        fastSort(arr, l, i, k)
    } else {
        fastSort(arr, i + 2, r, k)
    }
};