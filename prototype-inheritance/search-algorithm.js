/*
    1) Add __proto__ property to these objects to make the search next way:
       pockets -> bed -> table -> head
       Examples:
       pockets.pen == 3
       bed.glasses == 1
       table.money == undefined
    2) How to search for glasses faster: pockets.glasses or head.glasses?

    let head = {
      glasses: 1
    }

    let table = {
      pen: 3
    }

    let bed = {
      sheet: 1,
      pillow: 2
    }

    let pockets = {
      money: 2000
    }

*/

const {performance} = require('perf_hooks')

let head = {
  glasses: 1
}

let table = {
  __proto__: head,
  pen: 3
}

let bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2
}

let pockets = {
  __proto__: bed,
  money: 2000
}

console.log(pockets.pen)
console.log(bed.glasses)
console.log(table.money)

let time = performance.now()
let result = pockets.glasses
time = performance.now() - time

console.log(result, time)

time = performance.now()
result = head.glasses
time = performance.now() - time

console.log(result, time)

// In results we can see that there is a difference in time between head.glasses and pockets.glasses.
// Only the first time engine try to find a property in through prototypes chain, later it will take it
// just from prototype.