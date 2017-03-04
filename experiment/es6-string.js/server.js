var fs = require('fs')
var http = require('http')

var server = http.createServer( function(req,res) {
  var b = [1,2,3,4,5]
  var a= `${b.join('\n')}`
  res.end(a)
})

server.listen(8000)
  
