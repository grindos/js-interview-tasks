/*
 *  Write sum function, which will work next way: sum.js(a)(b) = a + b.
 */

function sum(leftArg) {
  return function (rightArg) {
    return leftArg + rightArg
  }
}

console.log(sum(5)(6))
