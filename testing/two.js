var fs = require('fs')

var w = fs.createWriteStream('haha')

fs.createReadStream('./one.js').
  pipe(w)
