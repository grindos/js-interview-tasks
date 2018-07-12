/*
 *  Implement string buffer using functions, with the next syntax:
 *
 *  Create buffer: var buffer = makeBuffer()
 *  Add value to buffer: buffer(value)
 *  Return buffer: buffer()
 */

function makeBuffer() {
  let buf = ''
  return function(str) {
    if (arguments.length === 0) {
      return buf
    }
    buf += str
  }
}

let buffer1 = makeBuffer();

// Add values to buffer
buffer1('abc');
buffer1('def');
buffer1('ghi');

console.log( buffer1() ) // Should return 'abcdefghi'

let buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

console.log( buffer2() ); // Should return '010'
