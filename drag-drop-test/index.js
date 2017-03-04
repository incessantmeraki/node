var dragDrop = require('drag-drop')

var mydiv = document.createElement('div')
mydiv.setAttribute("class", "test")
mydiv.textContent = 'drop here'
document.body.appendChild(mydiv)

dragDrop('.test', function (files) {
  console.log('hello world')
  console.log(files[0].name)
})





