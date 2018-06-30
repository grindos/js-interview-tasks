// ========== Inheritance ==========

// ---------- ES5 ----------

{
  let Animal = (function () {
    function MyConstructor (name) {
      this.name = name
    }
    MyConstructor.prototype.speak = function speak() {
      console.log(this.name + ' makes a noise.')
    }
    return MyConstructor
  })()

  let animal = new Animal('Cat');
  animal.speak()

  let Lion = (function() {
    // Explicitly call Animal constructor.
    function MyConstructor(name) {
      Animal.call(this, name)
    }

    // Assign Lion prototype to Animal's prototype
    MyConstructor.prototype = Object.create(Animal.prototype)
    MyConstructor.prototype.constructor = Animal

    MyConstructor.prototype.speak = function speak() {
      // Call 'speak' method from the parent class
      Animal.prototype.speak.call(this)
      console.log(this.name + ' roars.')
    }
    return MyConstructor
  })()

  let lion = new Lion('Simba')
  lion.speak()
}

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

  class Lion extends Animal {
    speak() {
      super.speak()
      console.log(this.name + ' roars.')
    }
  }

  const lion = new Lion('Simba')
  lion.speak()
}
