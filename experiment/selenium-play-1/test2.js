var webdriver = require('selenium-webdriver'),
  By = webdriver.By
  until = webdriver.until

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build()
driver.get('http://localhost:5000/testsite1')

var element = driver.wait(until.elementLocated(By.id('finalprogress')))

element.getText()
  .then(function (string) {
    console.log(string)
  })





