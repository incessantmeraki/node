var localcast = require('localcast')
var cast = localcast()

cast.on('hello', function (data) {
  console.log('hello', data)
})

cast.emit('hello', 'world')
