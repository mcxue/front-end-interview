// 手写事件的发布、订阅

const eventBus = {
  eventMap: {},
  on(name, fn) {
    const em = eventBus.eventMap
    em[name] = em[name] || []
    em[name].push(fn)
  },
  emit(name, params, asThis) {
    const em = eventBus.eventMap
    em[name] && em[name].forEach((fn) => {
      fn.call(asThis, params)
    })
  },
  off(name, fn) {
    const em = eventBus.eventMap
    if (em[name]) {
      const index = em[name].indexOf(fn)
      if (index >= 0) {
        em[name] && em[name].splice(index, 1)
      }
    }
  }
}
