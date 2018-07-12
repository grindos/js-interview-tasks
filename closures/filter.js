/*
 * Implement filter function. It should return an array with elements for which func returns true.
 *
 * Syntax: filter(arr, func)
 *
 * Also implement ready made filters inBetween(left, right) and inArray(arr).
 */

function filter(arr, func) {
  let res = []

  arr.forEach((element) => {
    if (func(element) === true) {
      res.push(element)
    }
  })

  return res
}

function inBetween (left, right) {
  return function(a) {
    return (a >= left && a <= right)
  }
}

function inArray (arr) {
  return function(a) {
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] === a) {
        return true
      }
    }
    return false
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(filter(arr, function(a) {
  return a % 2 === 0
})); // 2,4,6

console.log( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

console.log( filter(arr, inArray([1, 2, 10])) ); // 1,2