require('dotenv').config()

const express = require('express')
const { MongoClient } = require('mongodb')
const bodyParser = require('body-parser')
const ObjectID = require('mongodb').ObjectID

const app = express()

app.set('view engine', 'pug')

const formBodyParser = bodyParser.urlencoded({ extended: false })

MongoClient.connect('mongodb://localhost:27017/', (err, conn) => {
    if (err) throw err

    const db = conn.db('bootcamp')

    app.get('/', (req, res) => {
        db.collection('users').find().toArray()
            .then((users => {
                res.render('index', { users })
            }))

    })

    app.post('/submit', formBodyParser, (req, res) => {
        const { name, surname, email, username, password } = req.body
        
        if (name.length === 0 || surname.length ===0 || email.length === 0 || username.length === 0 ) { 
            const message = '🚫 Form fields are mandatory'
            db.collection('users').find().toArray()
            .then((users => {
                res.render('index', { users, message })
            }))            
        } else if (password.length < 6) {
            const message = '🚫 Password must be longer than 6 characters'
            db.collection('users').find().toArray()
            .then((users => {
                res.render('index', { users, message })
            }))            
        } else if (email === db.collection('users').find({ }, email) ) {
            const message = '🚫 This email is already in use'
            db.collection('users').find().toArray()
            .then((users => {
                res.render('index', { users, message })
            }))
        } else {
            db.collection('users').insert({ name, surname, email, username, password }).then(data => res.redirect('/'))
        }        
    })

    app.get('/user/:id', (req, res) => {
        const { params: { id } } = req

        db.collection('users').find().toArray()
            .then((data => {
                res.render('index', { 'users': data, id })
            }))

    })

    app.post('/edit/user/:id', formBodyParser, (req, res) => {
        const { params: { id } } = req
        const { name, surname, email, username, password } = req.body

        db.collection('users').update(
            { '_id': ObjectID(id) },
            {
                name: name,
                surname: surname,
                email: email,
                username: username,
                password: password
            }

        ).then(res.redirect('/'))

    })

    app.get('/delete/user/:id', (req, res) => {
        const { params: { id } } = req

        db.collection('users').deleteOne({ '_id': ObjectID(id) }).then(res.redirect('/'))
    })

    app.get('/killemall', (req, res) => {
        db.collection('users').remove({}).then(res.redirect('/'))
    })



    const port = process.env.PORT

    app.listen(port, () => console.log(`server running on port ${port}`))

    process.on('SIGINT', () => {
        console.log('stopping server')
        conn.close()

        process.exit()
    })

})



