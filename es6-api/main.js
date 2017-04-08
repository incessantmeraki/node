const Duplex = require('readable-stream').Duplex
const Stream = require('stream').Readable

class Peer extends Stream {
  constructor(id, name){
    super()
    this._id = id
    this._name = name
  }

  _read() {
    var self = this
    self.push(this._id)
    self.push(this._name)
    self.push(null)
  }
  
}

module.exports = Peer
