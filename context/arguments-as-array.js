/*
 * Turn pseudo-array arguments of a function into real array.
 */

function foo () {
  let args = [].slice.call(arguments)
  console.log(args.join(', '))
}

foo('abc', 5, 'def')

// When we call 'slice' it takes all enumerable props of 'arguments' and move them into new array 'args'.
