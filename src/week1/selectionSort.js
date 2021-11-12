const swapArrIdx = require('../utils/swapArrIdx')

// 选择排序  
const example = [6, 5, 4, 2, 3, 1];

function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let mixIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[mixIdx] > arr[j]) {
                mixIdx = j;
            }
        }
        if (mixIdx !== i) {
            swapArrIdx(arr, mixIdx, i)
        }
    }
    return arr;
}

const result = selectionSort(example);
console.log(result)