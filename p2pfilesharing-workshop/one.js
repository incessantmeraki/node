var fs = require('fs')
var pump = require('pump')

f = fs.createReadStream(__filename)
pump(f, process.stdout)
