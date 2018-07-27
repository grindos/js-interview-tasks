// 1. Create the decorator which will compute time spent on the calculation.

let timers = {}

function timingDecorator (f, timer) {
  // Decorator returns new function which add some functionality to our function.
  return function () {
    let start = process.hrtime()
    let result = f.apply(this, arguments)
    if (!timers[timer]) {
      timers[timer] = 0
    }
    timers[timer] += process.hrtime() - start
    return result
  }
}

let fib = function f(n) {
  return (n > 2) ? f(n - 1) + f(n - 2) : 1
}

// Replace function with its decorator
fib = timingDecorator(fib, 'fibo')

console.log(fib(10))
console.log(fib(20))

console.log(timers.fibo)

// 2. Create the decorator which puts all function arguments to the log array.
//    Let's assume that the function has one argument.

function work(a) {
  return a
}

let log = []

function makeLogging(func, log) {
  return function(a) {
    log.push(a)
    return func.call(this, a)
  }
}

work = makeLogging(work, log)

work(1)
work(5)

for (let i = 0; i < log.length; i++) {
  console.log('Log: ' + log[i])
}

// 3. Modified second task. Do the same, but decorator should log every argument even if function
//    can take more than one.

function workMany (a, b) {
  return a + b
}

let log2 = []

function makeManyLogging (func, log) {
  return function() {
    let args = [].slice.call(arguments)
    log.push(args)
    return func.apply(this, arguments)
  }
}

workMany = makeManyLogging(workMany, log2)

workMany(1, 2)
workMany(3, 4)

for (let i = 0; i < log2.length; i++) {
  console.log('Log: ' + log2[i].join(', '))
}