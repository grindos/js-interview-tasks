/*
 * Implement string buffer as in 'string-buffer' task but with clear method.
 */

function makeBuffer() {
  let buf = ''

  let res = function (str) {
    if (arguments.length === 0) {
      return buf
    }
    buf += str
  }

  res.clear = function () {
    buf = ''
  }

  return res
}

let buffer = makeBuffer();

buffer('abcd')
buffer('efgh')
console.log( buffer() )

buffer.clear();
console.log( buffer() )

buffer('bcd')
console.log( buffer() )