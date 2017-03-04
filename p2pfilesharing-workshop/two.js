var fs = require('fs')
var pump = require('pump')
var http = require('http')

var server = http.createServer(function (req,res) {
  f = fs.createReadStream(__filename)
  pump(f,res)
})

server.listen(3000)
