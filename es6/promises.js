// ========== Promises ==========

// ---------- ES5 ----------

{
  function printAfterTimeout(string, timeout, done) {
    setTimeout(function() {
      done(string)
    }, timeout)
  }

  printAfterTimeout('Hello ', 2e3, function(result) {
    console.log(result)
    printAfterTimeout(result + 'Reader', 2e3, function (result) {
      console.log(result)
    })
  })
}



// ---------- ES6 ----------

{
  function printAfterTimeout (string, timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve(string)
      }, timeout)
    })
  }

  printAfterTimeout('Hello ', 2e3)
    .then((result) => {
      console.log(result)
      return printAfterTimeout(result + 'Reader', 2e3)
    })
    .then((result) => {
      console.log(result)
    })
}