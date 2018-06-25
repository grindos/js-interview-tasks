// ========== Getting elements from arrays ==========

// ---------- ES5 ----------

{
  let arr = [1, 2, 3, 4]
  let first = arr[0]
  let third = arr[2]
  console.log(first, third)
}

// ---------- ES6 ----------

{
  const arr = [1, 2, 3, 4]
  const [first, , third] = arr
  console.log(first, third)
}

// This code has the same effect.


// ========== Swapping values ==========

// ---------- ES5 ----------

{
  let a = 1
  let b = 2

  let tmp = a
  a = b
  b = tmp

  console.log(a, b)
}

// ---------- ES6 ----------

{
  let a = 1
  let b = 2;
  [a, b] = [b, a]
  console.log(a, b)
}


// ========== Destructuring for multiple return values ==========

// ---------- ES5 ----------

{
  function margin() {
    let left = 1, right = 2, top = 3, bottom = 4
    return {
      left:left,
      right: right,
      top: top,
      bottom: bottom
    }
  }

  let data = margin()
  let left = data.left
  let bottom = data.bottom
}

// ---------- ES6 ----------

{
  function margin() {
    const left = 1, right = 2, top = 3, bottom = 4

    // Here we replaced {left: left} with {left}.
    return {left, right, top, bottom}
  }

// We get 'left' and 'bottom' fields from return value and put them to 'left_es6' and 'bottom_es6'
  const {left, bottom} = margin()
  console.log(left, bottom)
}


// ========== Destructuring for parameter matching ==========

// ---------- ES5 ----------

{
  let user = {firstName: 'Gregory', lastName: 'Yanushkovsky'}

  function getFullName(user) {
    let firstName = user.firstName
    let lastName = user.lastName

    return firstName + ' ' + lastName
  }

  console.log(getFullName(user))
}


// ---------- ES6 ----------

{
  let user = {firstName: 'Gregory', lastName: 'Yanushkovsky'}

  function getFullName({firstName, lastName}) {
    return `${firstName} ${lastName}`
  }

  console.log(getFullName(user))
}


// ========== Deep matching ==========

// ---------- ES5 ----------

{
  function settings() {
    return {display: {color: 'red'}, keyboard: {layout: 'qwerty'}}
  }

  let tmp = settings()
  let displayColor = tmp.display.color
  let keyboardLayout = tmp.keyboard.layout

  console.log(displayColor, keyboardLayout)
}

// ---------- ES6 ----------

{
  function settings() {
    return {display: {color: 'red'}, keyboard: {layout: 'qwerty'}}
  }

  const {display: {color: displayColor}, keyboard: {layout: keyboardLayout}} = settings()
  console.log(displayColor, keyboardLayout)
}