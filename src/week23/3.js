/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	const queue = []
	const res = []
	for (let i = 0; i < k; i++) {
		while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
			queue.pop()
		}
		queue.push(i)
	}
	if (queue.length) {
		res.push(nums[queue[0]])
	}
	for (let i = k; i < nums.length; i++) {
		while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
			queue.pop()
		}
		queue.push(i)
		while (queue[0] <= i - k) {
			queue.shift()
		}
		res.push(nums[queue[0]])
	}

	return res
}

const nums = []
const k = 0
const res = maxSlidingWindow(nums, k)
console.log(res)
