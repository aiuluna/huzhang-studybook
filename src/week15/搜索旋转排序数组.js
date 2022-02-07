/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function (nums, target) {
    const n = nums.length;
    if (!n) return -1;
    if (n === 1) return nums[0] === target ? 0 : -1;

    let head = 0, tail = n - 1, mid;
    while (head <= tail) {
        mid = head + ((tail - head) >> 1);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[head] <= nums[mid]) {
            // 左边有序
            // 在左边
            if (nums[head] <= target && nums[mid] > target) {
                tail = mid - 1;
            } else {
                head = mid + 1;
            }
        } else {
            // 右边有序
            // 在右边
            if (nums[tail] >= target && nums[mid] < target) {
                head = mid + 1;
            } else {
                tail = mid - 1;
            }
        }
    }
    return -1;
};