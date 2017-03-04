var net = require('net')

var connection = net.connect(8080,'localhost')

connection.on('data', console.log)



