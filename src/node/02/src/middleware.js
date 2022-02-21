const compose = (middlewares) => (context, next) => {
	return dispatch(0)
	function dispatch(i) {
		let fn = middlewares[i]
		if (i === middlewares.length) fn = next;
		if (!fn) return Promise.resolve()
		try {
			return Promise.resolve(fn(context, dispatch.bind(null,i + 1)))
		} catch (error) {
			return Promise.reject(error)
		}
	}
}

module.exports = {compose};

// compose([middleware, middleware2, middleware3])(null, () => console.log('call'))
// // middleware(null, () => Promise.resolve(middleware2(null, () => Promise.resolve())))
// // next是个返回Promise.resolve()的函数
// const middleware = function (ctx, next) {
// 	console.log(1)
// 	next().then(() => {
// 		console.log(6)
// 	})
// }

// const middleware2 = function (ctx, next) {
// 	console.log(2)
// 	next().then(() => {
// 		console.log(5)
// 	})
// }

// const middleware3 = function (ctx, next) {
// 	console.log(3)
// 	next().then(() => {
// 		console.log(4)
// 	})
// }


// next() ==> Promise.resolve()
// next ===> () => Prmoise.resolve(context, () => Promise.resolve())
