// What will be printed? Uncomment one of four lines for answers.

function Rabbit() {}

Rabbit.prototype = {
  eats: true
}

let rabbit = new Rabbit()

// (0)
// Rabbit.prototype = {} // (1)
// Rabbit.prototype.eats = false // (2)
// delete rabbit.eats // (3)
delete Rabbit.prototype.eats // (4)

console.log(rabbit.eats)

/*

(0) true. The prototype has 'eats' field.
(1) true. We change Rabbit.prototype, but it doesn't change rabbit.__proto__ since it is another object.
(2) false. Rabbit.prototype and rabbit.__proto__ have the same reference.
(3) true. 'rabbit' doesn't have 'eats' property.
(4) undefined. Prototype won't have an 'eats' property after 'delete'.

 */