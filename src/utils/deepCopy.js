function typeOf(obj) {
  const toString = Object.prototype.toString
  const map = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object"
  }
  return map[toString.call(obj)]
}

function deepCopy(data) {
  let d = typeOf(data)

  let o = d === 'array' ? [] : {}

  if (d === "array") {
    for (let item of data) {
      o.push(deepCopy(item))
    }
  } else if (d === "object") {
    for (let item in data) {
      let val = data[item]
      o[item] = deepCopy(val)
    }
  } else {
    return data
  }
  return o
}

export default deepCopy
