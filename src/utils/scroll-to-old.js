function move(amount) {
  document.documentElement.scrollTop = amount
  document.body.parentNode.scrollTop = amount
  document.body.scrollTop = amount
}

function scrollTo(to = 0, time) {
  if (!time) {
    move(to)
    return to // 返回到原来的函数内
  }

  let spaceTime = 20
  let spaceIndex = time / spaceTime
  var start = document.documentElement.scrollTop

  var change = to - start
  let everyTop = change / spaceIndex
  let timer = setInterval(function() {
    if (spaceIndex > 0) {
      spaceIndex--
      start = start + everyTop
      scrollTo(start) // 递归
    } else {
      clearInterval(timer)
    }
  }, spaceTime)
}

scrollTo(0, 100)
