/**
 * nums = [1,2,2,2,3]，target 为 2,找到>=target的第一个位置
 */
var binary_search = function (nums, target) {
    let left = 0, right = nums.length - 1, mid;
    while (left <= right) {
        mid = left + ((right - left) >> 1);
        if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    if (!nums[left]) return -1;
    return left;
}


