var level = require('level')
var fs = require('fs')
var collect = require('collect-stream')
var blobs = require('content-addressable-blob-store')
var db = level('./whatever.db',
  {valueEncoding: 'json'})

var store = blobs('./data.db')


var f = fs.createReadStream(__filename)

w = store.createWriteStream()

f.pipe(w)



w.on('finish', function () {
  console.log(w.key)
})

/*
db.put('key',{id:1, name:'Ashwin'}, function(err) {
  if (err) console.error(err)
})

db.batch([
  {type:'put', key:'Ashwin', value : [1,2,3,4,5]},
  {type:'put', key:'Ashwika', value : [6,7,3,2,3]}
])

var d = db.createReadStream()
//d.on('data', console.log)

collect(d, function(err,data) {
  console.log(data)
})
*/

/*
db.get('key', function (err, value) {
  if (err) console.error(err)
  else console.log('value=', value)
})
*/

var http = require('http')

var server = http.createServer(function (req,res) {
  if (req.method === 'GET') {
    var r = store.createReadStream({key: req.url.split('/')[1]})
      .pipe(res)
    //r.on('error', console.log)
  }

})

server.listen(5000, function() {
    console.log('Listening on 5000')
    console.log()
  })


