var net = require('net')
var fs = require('fs')
var pump = require('pump')

var socket = net.connect(3000, 'localhost')

var downloadedFile = 'file-' + Date.now()

var f = fs.createWriteStream(downloadedFile)

pump(socket, f)

