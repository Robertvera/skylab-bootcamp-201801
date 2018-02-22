require('dotenv').config()

const express = require ('express')
const bodyParser = require ('body-parser')
const staff = require ('./staff.json')
const _ = require('lodash')


const app = express()

app.get('/api/staff', (req,res) => {
    const query = req.query.q || req.query.q

    if(query) {
        const results = staff.filter(person => {
            return person.name.includes(query) || person.surname.includes(query) || person.email.includes(query) || person['github-username'].includes(query)
        })

        res.json(results)
    } else {
        res.json(staff)
    }        
})

app.get('/api/staff/shuffle', (req,res) => {
    res.json(_.shuffle(staff))
})

const port = process.env.PORT

app.listen(port, () => console.log(`Server running on port ${port}`))