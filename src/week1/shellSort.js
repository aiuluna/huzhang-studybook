const swapArrIdx = require('../utils/swapArrIdx')

const example = [6, 5, 4, 3, 2, 1]
const result = shellSort(example)
console.log(result)

function shellSort(arr) {
	const n = arr.length
	let step = n >> 1
	for (; step > 0; step = (step >> 1)) {
		for (let i = step; i < n; i++) {
			let j = i - step
			const current = arr[i]
			for (; j >= 0 && arr[j] > current; j -= step) {
				arr[j + step] = arr[j]
			}
			arr[j + step] = current
		}
	}
	return arr
}
