// ========== Default parameters ==========

// ---------- ES5 ----------

function point_wrong(x, y, isFlag) {
  x = x || 0
  y = y || -1
  isFlag = isFlag || true

  console.log(x, y, isFlag)
}

// In this case it works not the way we want
point_wrong(0, 0)
// This one too.
point_wrong(0, 0, false)
point_wrong(1)
point_wrong()

function point_correct(x, y, isFlag) {
  x = x || 0
  y = typeof(y) === 'undefined' ? -1 : y
  isFlag = typeof(isFlag) === 'undefined' ? true : isFlag
  console.log(x, y, isFlag)
}

// Now all calls will work correctly
point_correct(0, 0)
point_correct(0, 0, false)
point_correct(1)
point_correct()

// ---------- ES6 ----------

// In ES6 we can define default parameters.
function point (x = 0, y = -1, isFlag = true) {
  console.log(x, y, isFlag)
}

point(0, 0)
point(0, 0, false)
point(1)
point()