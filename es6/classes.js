// ========== Classes ==========

// ---------- ES5 ----------

{
  let Animal = (function () {
    function MyConstructor (name) {
      this.name = name
    }
    MyConstructor.prototype.speak = function speak() {
      console.log(this.name + ' make a noise.')
    }
    return MyConstructor
  })()

  let animal = new Animal('Cat');
  animal.speak()
}

// Another implementation

// let Animal = function(name) {
//   this.name = name
// }
//
// Animal.prototype.speak = function () {
//   console.log(this.name + ' make a noise')
// }
//
// let animal = new Animal('Cat')
// animal.speak()

// ---------- ES6 ----------

{
  class Animal {
    constructor(name) {
      this.name = name
    }
    speak() {
      console.log(this.name + ' makes a noise.')
    }
  }

  let animal = new Animal('Cat')
  animal.speak()
}

// 'class' syntax allows you to avoid manipulating 'prototype' directly.
// It makes the code more concise and easier to understand.

// You better avoid having an empty constructor.
// Classes have a default constructor if one is not specified.