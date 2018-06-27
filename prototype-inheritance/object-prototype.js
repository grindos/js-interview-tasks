// What this code should print?

let animal = {
  eats: null
}

let rabbit = {
  eats: true
}

rabbit.__proto__ = animal

console.log(rabbit.eats) // (1)

delete rabbit.eats

console.log(rabbit.eats) // (2)

delete animal.eats

console.log(rabbit.eats) //(3)

/*
  (1) - true. It is returned from 'rabbit' object.
  (2) - null. It is returned from 'animal' object.
  (3) - undefined. It is not found.
 */