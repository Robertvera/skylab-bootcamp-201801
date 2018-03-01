const { MongoClient } = require('mongodb')
const express = require('express')

const app = express()

const userData = {
    create(user) {
        MongoClient.connect('mongodb://localhost:27017/', (err, conn) => {
            if (err) throw err

            const db = conn.db('bootcamp')

            app.post('/users', (req, res) => {
                const { user } = req.body

                db.collection('users').insert({ user }, (err,data) => {
                    res.json(data)
                })
            })
            
            process.on('SIGINT', () => {
                console.log('stopping server')
                conn.close()

                process.exit()
            })


        })
    }
}

module.exports = userData