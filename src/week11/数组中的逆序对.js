/**
 * @param {number[]} nums
 * @return {number}
 */
 var reversePairs = function (nums) {
    const temp = [];
    let sum = 0;
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
                sum += (mid - x + 1)
            }
        }
        for (let i = l; i <= r; i++) {
            nums[i] = temp[i]
        }
    }

    mergeSort(nums, 0, nums.length - 1);
    return sum
};

