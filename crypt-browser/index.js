var crypto = require('crypto-browserify')
var some =new Uint8Array(10);
for(var i=0;i<10;i++)
  some[i] = "s"
var abc = crypto.createHash('sha1').update(some).digest('hex')
console.log(abc)
