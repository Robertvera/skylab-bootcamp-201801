const express = require('express')
const moment = require('moment')
const bodyParser = require('body-parser')

const app = express()

app.get('/', (req,res) => res.send('Hello, Get!'))

app.post('/', (req,res) => res.send('Hello, Post!'))

app.put('/', (req,res) => res.send('Hello, Put!'))

app.get('/api/parsetime', (req,res) => {
    const date = moment.utc(req.query.iso)

    const data = {
        hour: date.hours(),
        minute: date.minutes(),
        second: date.seconds()
    }

    // res.writeHead(200,{ 'Content-Type': 'application/json' })
    // res.end(JSON.stringify(data))

    res.json(data)
})
const textBodyParser = bodyParser.text()

app.post('/helloworld', textBodyParser, (req,res) => {
    res.send(req.body)
})

const jsonBodyParser = bodyParser.json()

app.post('/helloworld/json', jsonBodyParser, (req,res) => {
    res.json(req.body)
})

const urlencodedParser = bodyParser.urlencoded({extended:false})

app.post('/login', (req,res) => {
    res.send(`${req.body.username}:${req.body.password}`)
})

const port = process.argv[2]

app.listen(port, () => console.log(`landing server running on port ${port}`))