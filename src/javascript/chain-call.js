// 手写链式调用

const $ = (variable) => {
  let carrier = {
    variable,
    set(number) {
      variable.number = number
      return carrier
    },
    add(number) {
      if (!variable.number) variable.number = 0
      variable.number += (number || 1)
      return carrier
    },
    minus(number) {
      if (!variable.number) variable.number = 0
      variable.number -= (number || 1)
      return carrier
    },
    multiple(number){
      if (!variable.number) variable.number = 0
      variable.number *= (number || 2)
      return carrier
    },
    divide(number){
      if (!variable.number) variable.number = 0
      variable.number /= (number || 2)
      return carrier
    }
  }
  return carrier
}