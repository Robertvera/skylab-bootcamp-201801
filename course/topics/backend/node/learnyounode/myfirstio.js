var fs = require('fs')

var buf = fs.readFileSync(process.argv[2])

var str = buf.toString()

var char = str.split('\n')

console.log(char.length-1)