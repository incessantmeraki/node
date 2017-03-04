var fs = require('fs')
var hyperstream = require('hyperstream')
var http = require('http')

var server = http.createServer( function (req, res) {
  if (req.url === '/') {
   fs.createReadStream('./index.html') 
    .pipe(hyperstream ({
      '#container': '<img src="haha.jpg" alt="haha"/>'
    })) 
    .pipe(res)
  }
})

server.listen(5000)


