/*

'obj' object was created with some constructor. Can we create new object using the same constructor this way?

let obj2 = new obj.constructor();

Yes we can, but only in the case if we are sure that prototype wasn't overwritten without constructor.
*/

function User(name) {
  this.name = name
}

let obj = new User('Vasya')
let obj2 = new obj.constructor('Petr')

console.log(obj2.name)

/*
 But if 'User.prototype' was overwritten without 'constructor' field
 then 'obj.constructor' will return 'undefined'.
*/