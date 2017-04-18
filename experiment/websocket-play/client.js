var websocket = require('websocket-stream')

var wsock = websocket('ws://localhost:8500')
wsock.on('data', function (data) {
  console.log(data.toString())
})

