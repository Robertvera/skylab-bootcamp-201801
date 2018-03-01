require('dotenv').config()

const express = require('express')
const { MongoClient } = require('mongodb')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})


const formBodyParser = bodyParser.urlencoded({ extended: false })

function getUsers() {
    return 
}

MongoClient.connect('mongodb://localhost:27017/', (err, conn) => {
    if (err) throw err

    const db = conn.db('bootcamp')

    app.post('/submit', formBodyParser, (req, res) => {
        const user = {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }

        db.collection('users').insert(user).then(data => res.redirect('/'))
    })

    app.get('/userslist', (req,res) => {
        db.collection('users').find().then(res.redirect('/'))
    })


    const port = process.env.PORT

    app.listen(port, () => console.log(`server running on port ${port}`))

    process.on('SIGINT', () => {
        console.log('stopping server')
        conn.close()

        process.exit()
    })


})

