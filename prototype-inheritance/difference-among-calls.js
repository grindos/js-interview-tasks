// We have the next code:

function Rabbit (name) {
  this.name = name
}

Rabbit.prototype.sayHi = function () {
  console.log(this.name)
}

let rabbit = new Rabbit('Morty')

// What next calls will print?

rabbit.sayHi() // (1)
Rabbit.prototype.sayHi() // (2)
Object.getPrototypeOf(rabbit).sayHi() // (3)
rabbit.__proto__.sayHi() // (4)

/*
(1) Morty. 'rabbit' doesn't have 'sayHi' method, but it will be found in prototype. 'context' will be a 'rabbit'.
(2-4) undefined. 'context' will reference to Rabbit.prototype, which doesn't have a 'name' field, so it is undefined.
 */