// 计数排序

function countSort(arr) {
	// 取出数组中最大值
	let maxValue = -Infinity
	for (let val of arr) {
		val > maxValue && (maxValue = val)
	}
	// 创建长度为maxValue+1长度的数组
	const bucket = new Array(maxValue + 1)
	// 遍历原数组，原数组值作为bucket的索引，值出现个数作为bucket的value
	for (let val of arr) {
		bucket[val] ? (bucket[val] += 1) : (bucket[val] = 1)
	}
	// 遍历bucket
	let currIdx = 0
	for (let i = 0; i < bucket.length; i++) {
		while (bucket[i]) {
			arr[currIdx] = i
			currIdx++
			bucket[i] -= 1
		}
	}
	return arr
}

const result = countSort([2, 3, 8, 7, 1, 2, 2, 9, 8])
console.log(result)
