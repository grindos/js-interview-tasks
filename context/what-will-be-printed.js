// What will be printed in these three cases?

// 1.

let firstUser = {
  name: 'Vasya',
  export: this
}

console.log(firstUser.export.name)

// 2.

let name = ''

let secondUser = {
  name: 'Vasya',
  export: function() {
    return this
  }
}

console.log(secondUser.export().name)

// 3.

let thirdUser = {
  name: 'Vasya',
  export: function() {
    return {
      value: this
    }
  }
}

console.log(thirdUser.export().value.name)

/*
 * 1. undefined. 'context' is placed out of any function so it will reference to the global object.
 * 2. Vasya. Since 'context' is placed in function it will reference to the object before dot.
 *    In context case it is secondUser.
 * 3. Vasys. 'context' is placed in object which is in function.
 *    It means that it will reference to the object before function and it will ignore the closest object.
 */