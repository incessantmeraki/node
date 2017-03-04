var DC = require('discovery-channel')
var channel = DC()

channel.join('my-channel-id')

channel.once('peer', function (id,peer) {
  console.log('Found a new peer:', peer)
})
