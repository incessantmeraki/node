var dragDrop = require('drag-drop')

dragDrop(document.body, function (files) {
  console.log('hello world')
  console.log(files[0].name)
})

document.body.textContent = 'hahaha'




