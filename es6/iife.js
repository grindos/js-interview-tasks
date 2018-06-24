// ES5

{
  var priv = 1;
}

console.log(priv); // 1

// If we want to protect this variable from leaking, we should use IIFE (immediately-invoked function expression).

(function() {
  var priv2 = 1;
})();

console.log(priv2); // Uncaught ReferenceError

// ES6

{
  let priv3 = 1
}

console.log(priv3) // Uncaught ReferenceError

// Since let is block-scoped, priv3 don't leak out.