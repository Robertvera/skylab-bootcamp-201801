var fs = require('fs')
const path = require('path')

var _path = process.argv[2]
var ext = process.argv[3]

fs.readdir(_path, (err,files)=>{
   if (err) throw err
   files.forEach(file => {
       if (path.extname(file) === `.${ext}`) console.log(file)
   })
})