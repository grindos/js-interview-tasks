// ES5

var x = 'outer';
function test(inner) {
  if(inner) {
    var x = 'inner';
    return x;
  }
  return x;
}

// The code above can be interpreted the next way:

var x = 'outer';
function test(inner) {
  var x; // HOISTED DECLARATION
  if(inner) {
    x = 'inner'; // INITIALIZATION NO HOISTED
    return x;
  }
  return x;
}

console.log(test(false)); // undefined
console.log(test(true)); // inner

// 'var' is function scoped.
// It is available in the whole function even before being declared.
// Declarations are hoisted.
// Initializations are NOT hoisted.

// ES6

let x = 'outer'
function test(inner) {
  if(inner) {
    let x = 'inner'
    return x
  }
  return x
}

console.log(test(false)); // outer
console.log(test(true)); // inner

// 'let' is block scoped. 'for', 'if' and just '{ }' are blocks.
// If we try to use variable before the its declaration we will get ReferenceError.
// 'Temporal dead zone' is the zone from the start of the block until the variable is declared.