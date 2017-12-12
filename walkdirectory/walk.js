var walkSync = require('walk-sync')

const files = walkSync('run', {globs :['**/*.js']})

console.log(files)
