/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
 var countRangeSum = function (nums, lower, upper) {
    const sums = [];
    sums[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sums[i] = sums[i - 1] + nums[i]
    }
    return mergeSort(sums, 0, sums.length - 1, lower, upper)

};

const temp = []
var mergeSort = function (sums, l, r, lower, upper) {
    if (l > r) return 0;
    if (l === r) {
        if (sums[l] >= lower && sums[l] <= upper) {
            return 1
        } else {
            return 0
        }
    }
    let ans = 0;
    const mid = l + ((r - l) >> 1);
    ans += mergeSort(sums, l, mid, lower, upper);
    ans += mergeSort(sums, mid + 1, r, lower, upper);
    ans += countTwoPart(sums, l, mid, mid + 1, r, lower, upper);
    let k = l, x = l, y = mid + 1;
    while (x <= mid || y <= r) {
        if (y > r || (x <= mid && sums[x] <= sums[y])) {
            temp[k++] = sums[x++]
        } else {
            temp[k++] = sums[y++]
        }
    }

    for (let i = l; i <= r; i++) {
        sums[i] = temp[i]
    }

    return ans;
}

var countTwoPart = function (sums, l1, r1, l2, r2, lower, upper) {
    let ans = 0, k1 = l2, k2 = l2;
    for (let i = l1; i <= r1; i++) {
        const min = lower + sums[i];
        const max = upper + sums[i];
        while (k1 <= r2 && sums[k1] < min) k1++;
        while (k2 <= r2 && sums[k2] <= max) k2++;
        ans += (k2 - k1);
    }
    return ans;
}