// ========== Spread operator ==========

// ---------- ES5 ----------

{
  Math.max.apply(Math, [2, 100, 35, 1, 9])

  let array1 = [2, 100, 35, 1, 9]
  let array2 = ['a', 'b', 'c', 'd']
  let array3 = [false, true, null, undefined]

  // We need to concat arrays to the one.
  console.log(array1.concat(array2, array3))
}

// ---------- ES6 ----------

{
  Math.max(...[2, 100, 35, 1, 9])

  let array1 = [2, 100, 35, 1, 9]
  let array2 = ['a', 'b', 'c', 'd']
  let array3 = [false, true, null, undefined]

  // We can spread all arrays.
  console.log(...array1, ...array2, ...array3)
}

