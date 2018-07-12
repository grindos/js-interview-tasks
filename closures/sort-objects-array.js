/*
 * We want to sort array of objects with the next syntax:
 *
 * users.sort(byField('name'))
 *
 * instead of:
 *
 * users.sort( function(a, b) { ... } )
 */

function byField(fieldName) {
  return function(a, b) {
    return a[fieldName] > b[fieldName] ? 1 : -1
  }
}

let users = [{
  name: 'Greg',
  surname: 'Mean',
  age: 20
}, {
  name: 'Josh',
  surname: 'Bale',
  age: 25
}, {
  name: 'Miranda',
  surname: 'Grills',
  age: 18
}];

users.sort(byField('name'));
users.forEach(function(user) {
  console.log( user.name );
}); // Greg, Josh, Miranda

users.sort(byField('age'));
users.forEach(function(user) {
  console.log( user.name );
}); // Miranda, Greg, Josh