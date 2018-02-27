require('dotenv').config()


const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()


app.set('view engine', 'pug')

app.get('/', (req, res) => {
    axios.get('http://localhost:5000/api/tasks/todo')
        .then((todos) => {
            axios.get('http://localhost:5000/api/tasks/done')
                .then((dones) => {
                    res.render('index', { taskstodo: todos.data.data , tasksdone: dones.data.data})
                })
        })


})

const formBodyParser = bodyParser.urlencoded({ extended: false });

app.post('/tasks', formBodyParser, (req, res) => {
    const text = req.body.text
    console.log(text)
    createTask(text)
        .then((result) => {
            res.redirect('/')
        })


})

function createTask(text) {
    return axios.post('http://localhost:5000/api/tasks', { text })
        .then(result => result)
}


app.get('/tasks/:id', (req, res) => {
    const { id } = req.params

    axios.put(`http://localhost:5000/api/tasks/${id}`)

    res.redirect('/')

})

app.get('/tasks/delete/:id', (req, res) => {
    const { id } = req.params

    axios.delete(`http://localhost:5000/api/tasks/${id}`)

    res.redirect('/')

})

const port = process.env.PORT

app.listen(port, () => console.log(`Task App Client running on port ${port}`))