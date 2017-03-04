var fs = require('fs')
var pump = require('pump')
var net = require('net')

var server = net.createServer(function (socket) {
  f = fs.createReadStream(__filename)
  pump(f,socket)
})

server.listen(3000)
