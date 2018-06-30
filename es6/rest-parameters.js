// ========== Rest parameters ==========

// ---------- ES5 ----------

function printf(format) {
  // To get parameters other than format we need to use 'slice'
  let params = [].slice.call(arguments, 1)
  console.log('params: ', params)
  console.log('format: ', format)
}

printf('%s %d %.2f', 'adrian', 321, Math.PI)

// ---------- ES6 ----------

// We use ... to get rest parameters other than format
function printf (format, ...params) {
  console.log('params: ', params)
  console.log('format: ', format)
}

printf('%s %d %.2f', 'adrian', 321, Math.PI)
