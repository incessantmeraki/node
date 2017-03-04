var router = require('routes')()
var html = require('yo-yo')

module.exports = router

router.addRoute('/', function (m) {
  return html`
    <b> Hello world </b>
    ` 
})
