/*
 * Every shooter should print its number. Now they print 10. Fix this
 *
 * function makeArmy() {
 *
 *   var shooters = [];
 *
 *   for (var i = 0; i < 10; i++) {
 *      var shooter = function() { // Shooter function
 *        console.log( i ); // Print its number
 *      };
 *      shooters.push(shooter);
 *   }
 *   return shooters;
 * }
 *
 * var army = makeArmy();
 *
 * army[0](); // 10
 * army[5](); // 10
*/


function makeArmy() {

  let shooters = []

  for (let i = 0; i < 10; i++) {
    let shooter = function me() {
      console.log(me.i)
    };
    shooter.i = i
    shooters.push(shooter)
  }

  return shooters
}

let army = makeArmy()

army[0]()
army[5]()