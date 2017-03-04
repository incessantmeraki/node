var crypto = require('crypto')

var hash = crypto.createHash('sha256')

hash.update('NodeConf EU 2016')

console.log(hash.digest('hex'))
