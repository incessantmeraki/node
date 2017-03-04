var crypto = require('crypto')
var fs = require('fs')

var f = fs.createReadStream(__filename)
var hash = crypto.createHash('sha256')


f.on('data', function (data) {
  hash.update(data)
  console.log(hash.digest('hex'))
})
