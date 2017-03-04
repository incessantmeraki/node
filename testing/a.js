  var net = require('net')
  
  var server = net.createServer(function (socket) {

    //socket acting as readable stream
    socket.on('data', function ( data ) {
      console.log(data.toString())
    })

    //socket acting as writable stream
    socket.write("Hello I am A")

  })
  
  server.listen(8000)
