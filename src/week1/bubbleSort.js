const swapArrIdx = require('../utils/swapArrIdx')

//冒泡排序
function bubbleSort(arr) {
	const n = arr.length
	for (let i = 0; i < n; i++) {
        let flag = false;
		for (let j = 0; j < n - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swapArrIdx(arr, j, j + 1);
                flag = true;             
			}
		}
        if (!flag) break;
	}
    return arr;
}

const example = [6, 5, 4, 2, 3, 1];
const result = bubbleSort(example);
console.log(result)