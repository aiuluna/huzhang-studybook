function* myGenerator() {
	console.log(yield Promise.resolve(1)) //1
	console.log(yield Promise.resolve(2)) //2
	console.log(yield Promise.resolve(3)) //3
}
// 手动执行迭代器
// const gen = myGenerator()
// gen.next().value.then((val) => {
// 	gen.next(val).value.then((val) => {
// 		gen.next(val).value.then((val) => {
// 			gen.next(val)
// 		})
// 	})
// })

function auto(gen) {
    // 返回生成器对象
    const g = gen();

    const _next = function(val) {
        const obj = g.next(val);
        if (obj.done) {
            return obj.value
        }
        obj.value.then((value) => _next(value))
    }

    _next()
}
auto(myGenerator)