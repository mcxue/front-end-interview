// 手写 promise 简化版，没有链式调用

class MyPromise {
  #status = 'pending'
  constructor(fn) {
    this.list = []
    const resolve = (data) => {
      this.#status = 'resolved'
      const p = this.list.shift()
      if (p && p[0]) {
        const res = p[0].call(undefined, data)
        if (res instanceof MyPromise) {
          res.then((data) => {
            resolve(data)
          }, () => {
            reject(data)
          })
        }
      }
    }
    const reject = (data) => {
      this.#status = 'rejected'
      const p = this.list.shift()
      if (p && p[1]) {
        const res = p[1].call(undefined, data)
        if (res instanceof MyPromise) {
          res.then((data) => {
            resolve(data)
          }, (data) => {
            reject(data)
          })
        }
      }
    }
    fn.call(undefined, resolve, reject)
  }

  then(fn1, fn2) {
    this.list.push([fn1, fn2])
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(function () {
    reject('出错')
  }, 3000)
})

promise.then(data => {
  console.log(data)
}, (data) => {
  console.log(data)
})