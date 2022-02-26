// 手写节流、防抖

// 节流（使用技能时处于CD中）
const throttle = (fn, interval, asThis) => {
  let timer = null
  return (...args) => {
    if (timer) return
    fn.call(asThis, ...args)
    timer = setTimeout(() => {
      timer = null
    }, interval)
  }
}

// 防抖（回城被打断）
const debounce = (fn, interval, asThis) => {
  let timer = null
  return (...args) => {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(asThis, ...args)
      timer = null
    }, interval)
  }
}

// 防抖就是「回城被打断」