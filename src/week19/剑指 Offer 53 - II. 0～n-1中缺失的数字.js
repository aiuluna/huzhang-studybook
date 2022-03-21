/**
 * 输入: [0,1,2,3,4,5,6,7,9,10,11]  输出: 8
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	let l = 0,
		r = nums.length - 1,
		mid
	while (l <= r) {
		mid = l + ((r - l) >> 1)
        if (nums[mid] === mid) {
            l = mid + 1
        } else if (nums[mid] > mid) {
            r = mid - 1
        }
	}
    return l
}
