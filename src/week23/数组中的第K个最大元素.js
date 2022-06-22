/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
	const d = fastSort(0, nums.length - 1, nums, nums.length - k)
    console.log(nums)
	return d
}

var fastSort = function (l, r, arr, k) {
	console.log(l, r, arr, k)
	if (l >= r) return null
	// if (l === r) return arr[l]
	const partition = arr[r]
	let x = l,
		y = r
	while (x <= y) {
		while (x <= y && arr[x] <= partition) x++
		if (x < y) {
			;[arr[x], arr[y]] = [arr[y], arr[x]]
			x++
			y--
		}
		while (x <= y && arr[y] > partition) y--
		if (x < y) {
			;[arr[x], arr[y]] = [arr[y], arr[x]]
			x++
			y--
		}
	}
    fastSort(l, y-1, arr, k);
    fastSort(y+1, r, arr, k)
    // console.log(arr,x,y)
	// if (y === k) return arr[y]
	// else if (y > k) return fastSort(l, y - 1, arr, k)
	// else return fastSort(x, r, arr, k)
}

const res = findKthLargest([5,2,4,1,3,6,0], 4)
console.log(res)






// 堆
class Heap {
    
}