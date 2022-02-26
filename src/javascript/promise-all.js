// 手写 Promise.all

Promise.myAll = (promiseList) => {
  const length = promiseList.length
  let count = 0
  let result = []
  return new Promise((resolve, reject) => {
    promiseList.forEach((promise, i) => {
      promise.then((data) => {
        result[i] = data
        count += 1
        if (count === length - 1) {
          resolve(result)
        }
      }).catch(error => {
        reject(error)
      })
    })
  })
}