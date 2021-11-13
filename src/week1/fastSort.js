const swapArrIdx = require('../utils/swapArrIdx')

// 快速排序
function fastSort(arr) {
	const n = arr.length,
		r = n - 1
	if (n <= 1) return arr
	const pivot = arr[r]
	let i = 0,
		j = i
	while (j < r) {
		if (arr[j] < pivot) {
			swapArrIdx[(arr, i, j)]
			i++
		}
		j++
	}
	swapArrIdx(arr, i, r)
	const leftArr = arr.slice(0, i)
	const rightArr = arr.slice(i + 1)
	return fastSort(leftArr).concat(pivot, fastSort(rightArr))
}

const example = [6, 5, 4, 3, 2, 1]
const result = fastSort(example)
console.log(result)
