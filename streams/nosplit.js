var through = require('through2')
var split = require('split')

var sp = split()

var chunks = 0
sp.pipe(through(function write(buf,_,next) {
  chunks++
  console.log(buf.toString())
  next()
},
function end() {
  console.log('chunks', chunks)
}
))

sp.end('abc\ndef\nghi')


