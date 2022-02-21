const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    constructor(executor) {
        this._status = PENDING;
        this._resolveQueue = [];
        this._rejectQueue = [];
        this._value = null;

        // 触发依赖
        let _resolve = (val) => {
            const run = () => {
                if (this._status !== PENDING) return;
                this._status = FULFILLED;
                this._value = val;
                // 取出依赖执行
                while (this._resolveQueue.length) {
                    const callback = this._resolveQueue.shift();
                    callback(val)
                }
            }
            setTimeout(run, 0);
        }

        let _reject = (val) => {
            const run = () => {
                if (this._status !== PENDING) return;
                this._status = REJECTED;
                this._value = val;
                while (this._rejectQueue.length) {
                    const callback = this._rejectQueue.shift();
                    callback(val)
                }
            }
            setTimeout(run, 0);
        }

        executor(_resolve, _reject)
    }

    // 收集依赖
    then(resolveFn, rejectFn) {
        // 根据规范，如果then的参数不是function，则我们需要忽略它, 让链式调用继续往下执行
        typeof resolveFn !== 'function' ? resolveFn = value => value : null
        typeof rejectFn !== 'function' ? rejectFn = reason => {
            throw new Error(reason instanceof Error? reason.message:reason);
        } : null

        return new MyPromise((resolve, reject) => {
            const fullfilledFn = (val) => {
                try {
                    // 执行
                    let x = resolveFn(val);
                    // 执行完后判断函数返回值是否是promise对象，若是，等待当前promise执行完成, 将当前封装的promise的resolve函数传给子的promise，
                    // 待子的promise函数执行自己的resolve时，会执行当前的resolve，从而将值传给当前的promise；若不是，直接调用当前的resolve，它是
                    // 最外层promise的then的执行封装，所以会把值传给第一个promise的then的resolve执行函数。
                    x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
                } catch (error) {
                    reject(error)
                }
            }

            const rejectedFn = val => {
                try {
                    let x = rejectFn(val);
                    x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
                } catch (error) {
                    reject(error)
                }
            }

            if (this._status === PENDING) {
                this._resolveQueue.push(fullfilledFn);
                this._rejectQueue.push(rejectedFn);
            } else if (this._status === FULFILLED) {
                fullfilledFn(this._value)
            } else if (this._status === REJECTED) {
                rejectedFn(this._value)
            }

        })
    }
}

MyPromise.prototype.catch = rejectfn => this.then(undefined, rejectfn);
	
MyPromise.prototype.finally = callback => {
	return this.then(
		(val) => MyPromise.resolve(callback).then(() => val),
		(reason) => MyPromise.resolve(callback).then(
			() => {
			throw	Error(reason)
		})
	)
}


const p1 = new MyPromise((resolve, reject) => {
    resolve(1)          //同步executor测试
  })
  
  p1.then(res => {
      console.log(res)
      return 2          //链式调用测试
    })
    .then()             //值穿透测试
    .then(res => {
      console.log(res)
      return new MyPromise((resolve, reject) => {
        resolve(3)      //返回Promise测试
      })
    })
    .then(res => {
      console.log(res)
      throw new Error('reject测试')   //reject测试
    })
    .then(() => {}, err => {
      console.log(err)
    })
  
  // 输出 
  // 1 
  // 2 
  // 3 
  // Error: reject测试
  
// p1
//   .then(res => {
//     console.log(res)
//     return 2;
//     //then回调中可以return一个Promise
//     // return new MyPromise((resolve, reject) => {
//     //   setTimeout(() => {
//     //     resolve(2)
//     //   }, 1000);
//     // })
//   })
//   .then(res => {
//     console.log(res)
//     //then回调中也可以return一个值
//     return 3
//   })
//   .then(res => {
//     console.log(res)
//   })


  
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('223')
//         resolve('result2')
//     }, 1000);
// })
// setTimeout(() => {
//     p1.then(res => console.log(res))
//     // p2.then((res) => {
//     //     console.log(res)
//     //     return new Promise((rs, rj) => setTimeout(() => {
//     //         rs('rs')
//     //     }, 5000))
//     // }).then(res => console.log(res))
// }, 3000)
