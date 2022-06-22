/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 *
 * 输入:
 * nums1 = [3, 4, 6, 5]
 * nums2 = [9, 1, 2, 5, 8, 3]
 * k = 5
 * 输出:
 * [9, 8, 6, 5, 3]
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
	let res = []
	for (let i = 0; i < k; i++) {
		const m = i,
			n = k - i
		if (m > nums1.length || n > nums2.length) continue
		const _nums1 = maxNumberByK(nums1, m)
		const _nums2 = maxNumberByK(nums2, n)
		console.log(_nums1, _nums2)
		console.log('------------------')
		const curRes = mergeNums(_nums1, _nums2)
		res = compareNums(res, curRes)
	}
	return res
}

var maxNumberByK = function (nums, k) {
	if (k === 0) {
		return []
	}

	let remain = nums.length - k
	const stack = []
	for (let i = 0; i < nums.length; i++) {
		while (stack.length && nums[i] > stack[stack.length - 1] && remain > 0) {
			stack.pop()
			remain--
		}
		// if (stack.length > k) {
		//     stack.pop()
		//     remain--
		// } else {
		stack.push(nums[i])
		// }
	}
	while (stack.length > k) {
		stack.pop()
	}
	return stack
}

var mergeNums = function (nums1, nums2) {
	let res = []
	let x = 0,
		y = 0
	while (x < nums1.length && y < nums2.length) {
		if (nums1[x] >= nums2[y]) {
			res.push(nums1[x])
			x++
		} else {
			res.push(nums2[y])
			y++
		}
	}
	while (x < nums1.length) {
		res.push(nums1[x])
		x++
	}
	while (y < nums2.length) {
		res.push(nums2[y])
		y++
	}
	console.log(res)
	return res
}

var compareNums = function (nums1, nums2) {
	return nums1.join('') > nums2.join('') ? nums1 : nums2
}
