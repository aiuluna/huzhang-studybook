function bSearch(arr, tag) {
	let low = 0,
		high = arr.length - 1
	while (low <= high) {
		let mid = low + ((high - low) >> 1)
		if (arr[mid] < tag) {
			low = mid + 1
		} else if (arr[mid] > tag) {
			high = mid - 1
		} else {
			return arr[mid]
		}
	}
	return -1
}

/**
 * 查找最后一个值等于给定值的元素
 * @param {*} arr
 * @param {*} tag
 */
function bSearch(arr, tag) {
	let low = 0,
		high = arr.length - 1
	while (low <= high) {
		let mid = low + ((high - low) >> 1)
		if (arr[mid] < tag) {
			low = mid + 1
		} else if (arr[mid] > tag) {
			high = mid - 1
		} else {
			if (mid === arr.length - 1 || arr[mid + 1] !== tag) {
				return arr[mid]
			} else {
				low = mid + 1
			}
		}
	}
	return -1
}

/**
 * 查找第一个大于等于给定值的元素
 * @param {*} arr
 * @param {*} tag
 */
function bSearch(arr, tag) {
	let low = 0,
		high = arr.length - 1
	while (low <= high) {
		let mid = low + ((high - low) >> 1)
        if (arr[mid] < tag) {
            low = mid + 1
        } else {
            if ((mid === 0) || arr[mid - 1] < tag) return arr[mid]
            high = mid - 1
        }
	}
    return -1
}
