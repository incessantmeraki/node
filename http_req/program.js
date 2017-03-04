var http = require('http')

var counter = 0

http.createServer(function(req,res) {
  counter = counter + 1
  res.end('Total requests ' + counter)
  console.log('req.url==', req.url.slice(1))
}).listen(8500)

