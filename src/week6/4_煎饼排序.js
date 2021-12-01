/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var pancakeSort = function (arr, ret = []) {
    const n = arr.length;
    if (n === 1) return ret;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            if (i === n - 1) {
                return pancakeSort(arr.slice(0, n - 1), ret);
            } else {
                const ans = reverseK(arr, i + 1);
                ret = [...ret, i + 1, n]
                return pancakeSort(ans.slice(0, n - 1), ret)
            }
        }
    }
}

var reverseK = function (arr, k) {
    return arr.slice(0, k).reverse().concat(arr.slice(k)).reverse()
}
