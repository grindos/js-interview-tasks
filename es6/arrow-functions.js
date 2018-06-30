// ========== Arrow Functions ==========

// ---------- ES5 ----------

{
  // Sometimes we need to have outer this.
  // There are two ways how to implement it.

  // First way: hold a reference.
  let _this = this

  $('.btn').click(function(event) {
    _this.sendData()
  })

  // Second way: bind a function to outer this.
  $('.input').on('change', function(event) {
    this.sendData()
  }.bind(this))
}

// ---------- ES6 ----------

{
  // In this case it will reference outer 'this'
  $('btn').click((event) => this.sendData())

// Also we can do implicit returns
  const ids = [291, 288, 984]
  const messages = ids.map(value => `ID is ${value}`)
}
