Array.prototype.myReduce = function (fn, val) {
	if (typeof fn !== 'function') {
		throw new Error('fn is not a function')
	}
	let res = val || this[0]
	let idx = val ? 0 : 1
	for (let i = idx; i < this.length; i++) {
		res = fn(res, this[i], i, this)
	}
	return res
}

var arr = [1, 2, 3, 4, 5]
arr.myReduce((prev, current) => {
	console.log(prev)
	return prev + current
}, 2)

arr.reduce((prev, current) => {
	console.log('reduce   ' + prev)
	return prev + current
}, 2)

var flatArr = [1, 2, [3, 4, 5], [6, 7, [8, 9]]];

var flatFn = (prev, current) => {
    if (typeof current === 'number') {6
        prev.push(current)
    } else if (current instanceof Array) {
        prev.push(...current.myReduce(flatFn, []))
    }
    return prev
}

console.log(flatArr.myReduce(flatFn, []))


