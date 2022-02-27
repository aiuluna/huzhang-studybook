const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor (executor) {
    this._resolveQueue = [];
    this._rejectQueue = [];
    this._status = PENDING;
    this._value = null;

    let _resolve = val => {
      const run = () => {
        if (this._status !== PENDING) return;
        this._status = FULFILLED;
        this._value = val;

        if (this._resolveQueue.length) {
          const callback = this._resolveQueue.shift ();
          callback (val);
        }
      };
      // 若new promise里是同步代码，就会立即执行resolve，所以需要将run封装成异步，让then先调用
      setTimeout (run);
    };

    let _reject = val => {
      const run = () => {
        if (this._status !== PENDING) return;
        this._status = REJECTED;
        this._value = val;

        if (this._rejectQueue.length) {
          const callback = this._rejectQueue.shift ();
          callback (val);
        }
      };
      setTimeout (run);
    };

    executor (_resolve, _reject);
  }

  // .then()需要返回一个Promise，这样才能找到then方法，所以我们会把then方法的返回值包装成Promise。
  // .then()的回调需要拿到上一个.then()的返回值
  // .then()的回调需要顺序执行，以上面这段代码为例，虽然中间return了一个Promise，但执行顺序仍要保证是1->2->3。我们要等待当前Promise状态变更后，再执行下一个then收集的回调，这就要求我们对then的返回值分类讨论

  then (resolveFn, rejectFn) {
    // 参数不是function，就从上个then取值返回给下一个
    if (typeof resolveFn !== 'function') {
      resolveFn = value => value;
    }
    if (typeof rejectFn !== 'function') {
      rejectFn = reason => {
        throw new Error (reason instanceof Error ? reason.message : reason);
      };
    }
    // 实例B
    return new MyPromise ((resolve, reject) => {
      const fulfilledFn = value => {
        try {
          let x = resolveFn (value);
          if (x instanceof MyPromise) {
            // x是promise实例C，待x执行完后调用自己的resolve，会把值传递给实例B
            x.then (
              rs => {
                resolve (rs);
              },
              rj => {
                reject (rj);
              }
            );
          } else {
            // resolve调用会让当前promise实例B.then接到x的值
            resolve (x);
          }
        } catch (error) {
          reject (error);
        }
      };

      const rejectedFn = value => {
        try {
          let x = rejectFn (value);
          if (x instanceof MyPromise) {
            x.then (resolve, reject);
          } else {
            resolve (x);
          }
        } catch (error) {
          reject (error);
        }
      };

      // 当状态为fullfilled、rejected时，说明已经执行过例如：promise.resolve()，这时再将fulfilledFn push进去也不会执行，所以要立即执行
      if (this._status === PENDING) {
        this._resolveQueue.push (fulfilledFn);
        this._rejectQueue.push (rejectedFn);
      } else if (this._status === FULFILLED) {
        fulfilledFn (this._value);
      } else {
        rejectFn (this._value);
      }
    });
  }

  catch (rejectFn) {
    return this.then (undefined, rejectFn);
  }

  finally (callback) {
    return this.then (
      value => MyPromise.resolve (callback ()).then (() => value),
      reason =>
        MyPromise.resolve (callback ()).then (() => {
          throw reason;
        })
    );
  }

  static resolve (value) {
    if (value instanceof MyPromise) {
      return value;
    }
    return new MyPromise (resolve => resolve (value));
  }

  static reject (reason) {
    return new MyPromise ((resolve, reject) => reject (reason));
  }

  static all (arr) {
    const result = [];
    let index = 0;
    return new MyPromise ((resolve, reject) => {
      for (let i = 0; i < arr.length; i++) {
        MyPromise.resolve (arr[i]).then (
          val => {
            result[i] = val;
            index++;
            if (index === arr.length) {
              resolve (result);
            }
          },
          reason => {
            reject (reason);
          }
        );
      }
    });
  }

  static race (arr) {
    return new MyPromise ((resolve, reject) => {
      for (let x of arr) {
        MyPromise.resolve (x).then (
          val => {
            resolve (val);
          },
          reason => {
            reject (reason);
          }
        );
      }
    });
  }
}

var m1 = new MyPromise ((resolve, reject) => {
  //   console.log ('new promise');
  setTimeout (() => {
    reject (111);
  }, 1000);
});

var m2 = new MyPromise ((resolve, reject) => {
  //   console.log ('new promise');
  setTimeout (() => {
      console.log('m2')
    resolve (111);
  }, 2000);
});

var m3 = new MyPromise ((resolve, reject) => {
  //   console.log ('new promise');
  setTimeout (() => {
    resolve (111);
  }, 3000);
});
MyPromise.all ([1, 2, 3, m2]).then (arr => {
  console.log (arr);
});

MyPromise.race ([m1, m2, m3]).then (val => {
  console.log (val);
}, reason => {
    console.log('err' + reason)
});

// setTimeout (() => {
//   m
//     .then (
//       data => {
//         console.log (data);
//         return 222;
//       },
//       data => {
//         console.log ('err' + data);
//       }
//     )
//     .finally (() => {
//       console.log ('finally');
//     })
//     .then (
//       data => {
//         console.log (data);
//         return new MyPromise ((resolve, reject) => {
//           setTimeout (() => {
//             resolve (333);
//           }, 3000);
//         });
//       },
//       err => {
//         console.log ('err');
//       }
//     )
//     .then (res => {
//       console.log (res);
//     });
// }, 2000);

// var p = new Promise ((r, j) => {
//     r('ppp')
// });
// p.finally (() => {
//     console.log('finally')
// }).then((d) => console.log(d));

// Promise.resolve()
