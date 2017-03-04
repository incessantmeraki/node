  var net = require('net')

  var socket = net.connect(8000, 'localhost')
  
  //socket acting as readable stream
  socket.on('data', function (data) {
    console.log(data.toString())
  })

  //socket acting as writable stream
  socket.write("Hello I am B")
