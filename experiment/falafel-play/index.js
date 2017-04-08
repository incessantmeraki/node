var fs = require('fs')
var falafel = require('falafel')

var src = fs.readFileSync(process.argv[2]).toString()

src = '(' + src + ')()'

output = falafel(src, function (node) {
  if (node.type === 'xpressionStatement')
    console.log(node.source())
})

