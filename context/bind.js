// 1. What will be printed?

function foo () {
  console.log(this)
}

let user = {
  bar: foo.bind('Hello')
}

user.bar()

// Since foo function was bound, 'Hello' will be its context, not user. When bound context can't be overwritten.


// 2. What will be printed?

function baz () {
  console.log(this.name)
}

baz = baz.bind( {name: 'Вася'} ).bind( {name: 'Коля'} )

baz()

// Since baz was already bound it became a wrapper function.
// So when we want to bind it one more time, no the baz is bound but its wrapper.
// Thus, when we call baz it will have a context which was stated by first wrapper.


// 3. What will be printed?

function sayHi() {
  console.log(this.name)
}

sayHi.test = 5
console.log(sayHi.test)

let bound = sayHi.bind({
  name: 'Вася'
})

console.log(bound.test)

// undefined will be printed. bound is the wrapper, so it doesn't have test property, only sayHi function has it.