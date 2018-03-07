const { Router } = require('express')
const bodyParser = require('body-parser')
const { list, create, update, delete: _delete, retrieve, retrieveQuery } = require('./handlers')

const router = Router()

router.get('/users', list)

const jsonBodyParser = bodyParser.json()

router.post('/user', jsonBodyParser, create)

router.put('/user/:id', jsonBodyParser, update)

router.delete('/user/:id', jsonBodyParser, _delete)

router.get('/user/:id', retrieve)

router.get('/users/:query', retrieveQuery)

module.exports = router