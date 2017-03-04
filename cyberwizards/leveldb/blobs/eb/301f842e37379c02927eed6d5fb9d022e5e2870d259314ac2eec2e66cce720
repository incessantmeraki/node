var fs = require('fs')
var blob = require('content-addressable-blob-store')

var store = blob({dir: './blobs'})

var w = store.createWriteStream()
var f = fs.createReadStream(process.argv[2])
f.pipe(w)

f.pipe(process.stdout)


