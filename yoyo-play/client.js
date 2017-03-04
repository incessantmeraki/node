var html = require('yo-yo')
var router = require('./router.js')

var body = document.querySelector('body')


var m = router.match(location.pathname) 
console.log(m)

console.log('hello')

if (m) {
  console.log(m.fn(m))
  html.update(body, m.fn(m))
}

