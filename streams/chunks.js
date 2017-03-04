var split = require('split')
var through = require('through2')

var sp = split()
var tr = through()

/*
sp.pipe(through(function (buf,enc,next) {
  console.log(buf)
  next()
}))
*/

sp.pipe(through(function (buf,enc,next) {
  console.log(buf.toString())
  next()
}))

sp.end('abc\ndef\nghi')

