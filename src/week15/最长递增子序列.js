/**
 * 动态规划
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function (nums) {
    const dp = new Array(nums.length).fill(1);
    let res = 1;
    for (let i = 1; i < nums.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        res = Math.max(res, dp[i])
    }
    return res;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function (nums) {
    let arr = [nums[0]], len = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > arr[len - 1]) {
            arr[len++] = nums[i];
            continue;
        }
        let idx = binary_search(arr, nums[i]);
        // 相等，不累计
        if (idx === -1) continue;
        // 这里只要维护递增子序列的最后一个数，这样后面来的数走到这步肯定比idx的值小，代表该递增子序列最后一个值比之前的小，
        // 这里替换掉原来的子序列就很划算，因为后面递增的可能性更多
        arr[idx] = nums[i];
    }
    return len;
};


var binary_search = function (arr, target) {
    let left = 0, right = arr.length - 1, mid;
    // 找到在arr中找到大于当前值的最小值
    while (left <= right) {
        mid = left + ((right - left) >> 1);
        if (arr[mid] > target) {
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1
        } else {
            //相等，忽略
            return -1;
        }
    }
    return left;
}
