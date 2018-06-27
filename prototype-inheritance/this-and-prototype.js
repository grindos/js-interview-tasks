// Will the 'rabbit.eat()' work?
// If yes, 'full' property should be written to 'rabbit' or to 'animal'?

let animal = {
  eat: function() {
    this.full = true
  }
}

let rabbit = {
  __proto__: animal
}

rabbit.eat()

console.log(rabbit.hasOwnProperty('full') ? rabbit.full : 'No')

// In this case 'this' will reference to 'rabbit' object.
// If we replace the function expression in 'eat' field with arrow function, the result will be changed.
// In that case arrow function will create its own 'this' entity and it will have a 'full' property.