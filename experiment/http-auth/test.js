var http = require('http')
var fs = require('fs')
var body = require('body/any')


http.createServer(function (req, res) {
  /*
  auth(req, res, ctx, function (err) {
    if (err) return res.end('not authenticated')
    res.end('authentication successful')
  })
  */
  if(req.url === '/') {
    fs.createReadStream('./test.html').pipe(res)

    if (req.method === 'POST') { 
      body(req, res, function (err, params) {
        if (params && params.username === 'ashwin' && params.password === 'kandel')
          res.end('sucessful authentication')
        else
          res.end('unsuccessful authentication')
      })
    }
  }
}).listen(8000)


