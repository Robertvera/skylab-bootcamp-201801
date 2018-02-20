const fs = require('fs')
const http = require('http')

let portNumber = process.argv[2]
let file = process.argv[3]

const server = http.createServer((req,res) => {
    // const content = fs.readFile(file,(err,data) => {
    //     if (err) throw err

    //     res.end(data)
    // })
    fs.createReadStream(file).pipe(res)
})

server.listen(portNumber, () => console.log(`file server running on port ${portNumber}`))