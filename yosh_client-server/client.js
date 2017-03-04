var css = require('sheetify')
var html = require('bel')

css('tachyons')
var prefix = css`
  :host > h1 { font-size: 12rem; }
`

var el = html`
  <section class=${prefix}>
    <h1 class="green">hello planet</h1>
  </section>
`

document.body.appendChild(el)
