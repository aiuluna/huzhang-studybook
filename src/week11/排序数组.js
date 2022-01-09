/**
 * 归并排序
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function (nums) {
    mergeSort(nums, 0, nums.length - 1);
    return nums;
};

const temp = []
var mergeSort = function (nums, l, r) {
    if (l >= r) return;
    const mid = l + ((r - l) >> 1);
    mergeSort(nums, l, mid);
    mergeSort(nums, mid + 1, r);
    let k = l, x = l, y = mid + 1;
    while (x <= mid || y <= r) {
        if (y > r || (x <= mid && nums[x] <= nums[y])) {
            temp[k++] = nums[x++]
        } else {
            temp[k++] = nums[y++]
        }
    }
    for (let i = l; i <= r; i++) {
        nums[i] = temp[i]
    }
}




/**
 * 快速排序
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function (nums) {
    fastSort(nums, 0, nums.length - 1)
    return nums;
};

var fastSort = function (nums, l, r) {
    if (l >= r) return;
    const pivot = nums[r];
    let x = l, y = r;
    while (x < y) {
        while (x < y && nums[x] < pivot) x++;
        if (x < y) {
            [nums[x], nums[y]] = [nums[y], nums[x]];
            y--;
        }
        while (x < y && nums[y] > pivot) y--;
        if (x < y) {
            [nums[x], nums[y]] = [nums[y], nums[x]];
            x++;
        }
    }
    fastSort(nums, l, x - 1)
    fastSort(nums, x + 1, r)
}