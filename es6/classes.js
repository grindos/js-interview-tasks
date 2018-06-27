// ========== Deep matching ==========

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