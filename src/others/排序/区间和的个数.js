/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
 var countRangeSum = function (nums, lower, upper) {
    const sums = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        sums[i + 1] += sums[i] + nums[i]
    };
    const res = mergeSort(sums, 0, sums.length - 1, lower, upper);
    return res
};

const temp = [];

var mergeSort = function (sums, l, r, lower, upper) {
    // 前缀和数组中，坐标相同是无效值
    if (l >= r) return 0;
    let mid = l + ((r - l) >> 1);
    let ans = 0;
    ans += mergeSort(sums, l, mid, lower, upper);
    ans += mergeSort(sums, mid + 1, r, lower, upper);
    ans += countTowPart(sums, l, mid, mid + 1, r, lower, upper);
    let k = l, p1 = l, p2 = mid + 1;
    while (p1 <= mid || p2 <= r) {
        if (p2 > r || (p1 <= mid && sums[p1] <= sums[p2])) {
            temp[k++] = sums[p1++]
        } else {
            temp[k++] = sums[p2++]
        }
    }
    for (let i = l; i <= r; i++) {
        sums[i] = temp[i]
    }
    return ans;
}

var countTowPart = function (sums, l1, r1, l2, r2, lower, upper) {
    let k1 = l1, k2 = l1, ans = 0;
    for (let j = l2; j <= r2; j++) {
        const a = sums[j] - upper;
        const b = sums[j] - lower;
        while (k1 <= r1 && sums[k1] < a) k1++;
        while (k2 <= r1 && sums[k2] <= b) k2++;
        ans += (k2 - k1);
    }
    return ans;
}