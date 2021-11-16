/**
 * 只出现一次的数字
 * https://leetcode-cn.com/problems/WGki4K 
 * 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。
 * 输入：nums = [2,2,3,2]
 * 输出：3
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
	let res = 0
	for (let i = 0; i < 32; i++) {
		let sum = 0
		for (let num of nums) {
			sum += (num >> i) & 1
		}
		res += sum % 3 << i
	}
	return res
}

const inputNums = [2, 2, 3, 2]
const result = singleNumber(inputNums)
console.log(result)
