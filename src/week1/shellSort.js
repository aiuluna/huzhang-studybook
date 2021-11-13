const example = [6, 5, 4, 3, 2, 1]
const result = shellSort(example)
console.log(result)

// 希尔排序
function shellSort(arr) {
	const n = arr.length
    // 先定义步长
	let step = n >> 1
    // 根据步长拆分数组，对拆分的数组进行插入排序
	for (; step > 0; step = (step >> 1)) {
        // 插入排序
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
