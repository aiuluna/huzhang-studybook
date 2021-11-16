/**
 * 前 K 个高频元素
 * https://leetcode-cn.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const swapArrIdx = require('../utils/swapArrIdx')

class HeapData {
	constructor(key, value) {
		this.value = value
		this.ret = key
	}
}

var topKFrequent = function (nums, k) {
	// K长度的小顶堆
	const heap = [null]
	// 堆内数量
	let count = 0
	const map = new Map()
	for (let val of nums) {
		const data = map.get(val) ? map.get(val) + 1 : 1
		map.set(val, data)
	}
	for (let [key, value] of map) {
		const data = new HeapData(key, value)
		if (count < k) {
			heap.push(data)
			count++
			heapifyUp()
		} else if (data.value > heap[1].value) {
			heap[1] = data
			heapifyDown(1)
		}
	}
	// 自下而上堆化
	function heapifyUp() {
		let i = count
		while (i >> 1 > 0 && heap[i].value < heap[i >> 1].value) {
			swapArrIdx(heap, i, i >> 1)
			i = i >> 1
		}
	}

	function heapifyDown(i) {
		while (true) {
			let pos = i
			if (i * 2 <= count && heap[i * 2].value < heap[i].value) pos = i * 2
			if (i * 2 + 1 <= count && heap[i * 2 + 1].value < heap[pos].value)
				pos = i * 2 + 1
			if (i === pos) break
			swapArrIdx(heap, i, pos)
			i = pos
		}
	}

	const result = []
	while (heap.length > 1) {
		result.push(heap.pop().ret)
	}
	return result
}

const inputNums = [
	5, -3, 9, 1, 7, 7, 9, 10, 2, 2, 10, 10, 3, -1, 3, 7, -9, -1, 3, 3,
]
const inputK = 3
const result = topKFrequent(inputNums, inputK)
console.log(result)
