var net = require('net')
var fs = require('fs')

var server = net.createServer( function (socket) {
  var file = fs.createReadStream('myjson.json') 
  file.pipe(socket)
  //socket.write('hello client')
})

server.listen(8080)
