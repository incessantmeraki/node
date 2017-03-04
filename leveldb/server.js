var http = require('http')
var fs = require('fs')
var body = require('body/any')
var url = require('url')

http.createServer(function (req, res) {
    var fStream = fs.createReadStream(__dirname+'/index.html')
    fStream.pipe(res)
    if (req.method === 'GET') {
      console.log("GET METHOD GOT")
      queryString = url.parse(req.url, true).query
      console.log(queryString)
    }
    console.log(req.url)
  }).listen(8080)
