// 手写 AJAX

const ajax = (method, url, data, success, fail) => {
  const xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
        success(xhr.responseText)
      } else {
        fail(xhr.responseText)
      }
    }
  }
  xhr.send()
}