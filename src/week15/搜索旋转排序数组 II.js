/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 var search = function (nums, target) {
    const n = nums.length;
    if (!n) return false;
    if (n === 1) return nums[0] === target;

    let head = 0, tail = n - 1, mid;
    while (head <= tail) {
        mid = head + ((tail - head) >> 1);
        if (nums[mid] === target) {
            return true
        } else if (nums[head] === nums[mid] && nums[mid] === nums[tail]) {
            // 无法判断哪边是有序,就收缩边界
            head++;
            tail--;
        } else if (nums[head] <= nums[mid] ) {
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
    return false;
};