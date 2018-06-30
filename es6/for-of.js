// ========== For...of ==========

// ---------- ES5 ----------

// We can print all array elements with two ways.

let array = ['a', 'b', 'c', 'd']

// Using 'for'
for (let i = 0; i < array.length; i++) {
  let element = array[i]
  console.log(element)
}

// Using 'forEach'
array.forEach(function(element) {
  console.log(element)
})

// ---------- ES6 ----------

// Now we have third way, using 'for...of'
for (const element of array) {
  console.log(element)
}