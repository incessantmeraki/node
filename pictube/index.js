var pictureTube = require('picture-tube')
tube = pictureTube()
tube.pipe(process.stdout)

var fs = require('fs')
fs.createReadStream('robot.png').pipe(tube)
