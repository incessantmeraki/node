var data = require('./generated.json')

data = data.map(function(x) {
  x.last = 'ashwin'
  return x
})

console.log(data)
