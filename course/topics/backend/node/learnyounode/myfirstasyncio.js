const fs = require('fs')
const path = process.argv[2]
fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
        throw err
    } else {
        var str = data.toString()

        var char = str.split('\n')

        return console.log(char.length - 1)
    }


})  