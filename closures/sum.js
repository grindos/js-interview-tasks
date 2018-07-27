/*
 *  Write sum function, which will work next way: sum.js(a)(b) = a + b.
 */

function sum(leftArg) {
  return function (rightArg) {
    return leftArg + rightArg
  }
}

console.log("Sum: " + sum(5)(6))

/*
 * Now write sumAdvanced function which will work with any number of parentheses.
 */

function sumAdvanced(arg1) {

  let currentSum = arg1

  function f(arg2) {
    currentSum += arg2
    return f
  }

  f.toString = function() {
    return currentSum
  }

  return f
}


// We can call .toString method of context function explicitly or we can just add string concat
console.log("Sum: " + sumAdvanced(5))
console.log("Sum: " + sumAdvanced(5)(6))
console.log("Sum: " + sumAdvanced(5)(6)(7))
console.log("Sum: " + sumAdvanced(5)(6)(7)(8))