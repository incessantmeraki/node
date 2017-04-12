var webdriver = require('selenium-webdriver'),
  By = webdriver.By
  until = webdriver.until

var n = process.argv[2]
var count = 0 
var browsers = []
var result = []

//creates n instances of browser window
setInterval( function () {
  count ++
  var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build()
  browsers.push(driver)
  driver.get('http://localhost:5000/testsite1/')
  if (count == n)
    clearInterval(this)
}, 5000)


//didn't work
setInterval(function() {
  if (count == n) {
    browsers.forEach(function (browser,index) {
      var element = browser.wait(until.elementLocated(By.id('finalprogress')),12000)
      console.log(element)
      element.getText()
        .then(function (string) {
          result.push(string)
          console.log(string)
        })
        .catch(function (error) {
          console.log('some error')
        })
      browsers.splice(index,1)
    })

    if (result.length == n)
      clearInterval(this)
  }
},10000)




