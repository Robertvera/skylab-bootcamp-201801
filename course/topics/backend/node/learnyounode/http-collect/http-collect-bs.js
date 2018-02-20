const http = require('http')
const bl = require('bl')

const url = process.argv[2]

http.get(url, res => {
    res.setEncoding('utf-8')

    res.pipe (bl((err,data) => {
        console.log('res.`pipe -> on data')

        console.log(data)
    }))
    res.on('error', console.error)
})