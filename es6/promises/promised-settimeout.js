// Write a function delay(ms) which returns Promise. It should be resolved after ms milliseconds.

// Usage:
// delay(1000)
//   .then(() => console.log('Hello!'))

function delay (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

delay(1000)
  .then(() => console.log('Hello!'))
  .then(() => delay(2000))
  .then(() => console.log('world'))