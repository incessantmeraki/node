var DuplexStream = require('./main.js')
var through = require('through2')

var s = new DuplexStream('1','Ashwin')

s.pipe(through(function (data,_,next) {
  console.log(data.toString())
  next()
}, function () {
  console.log('Done')
}))


