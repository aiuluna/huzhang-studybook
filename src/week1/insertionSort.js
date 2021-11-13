// 插入排序
const example = [6, 5, 4, 2, 3, 1];

const result = insertionSort(example)
console.log(result)

function insertionSort(arr) {
	const n = arr.length;
    // 外层循环，表示未排序的数组，左边第一位当做已排序数组
	for (let i = 1; i < n; i++) {
        // 里层循环，从已排序数组中与未排序数组做比较(i表示未排序数组第一位)
		let j = i - 1;
        // 当前需要比较的数字（未排序数组第一位）
        const current = arr[i];
        // 退出循环条件，已排序数组遍历完或者已排序的数字小于需要比较的数字
        while (j >= 0 && arr[j] > current) {
            // 已排序数组中当前值大于需要比较的值，将当前值往后移一位
            arr[j + 1] = arr[j];
            j--;
        }
        // 退出循环后，j+1的值已经往后移了，需要将比较值放到j+1
        arr[j + 1] = current;
	}
	return arr
}
