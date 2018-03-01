require('dotenv').config()

const { MongoClient } = require('mongodb')

const { userApi } = require ('./users-api-client.js')

const express = require('express')

const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})

const formBodyParser = bodyParser.urlencoded({extended: false})

app.post('/submit', formBodyParser, (req, res) => {
    const user = {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }


    userApi.createUser(user)
    .then (res => {
        res.redirect('/')
    })
    .catch(console.error)
        
})




const port = process.env.PORT

app.listen(port, () => console.log(`Task App Client running on port ${port}`))