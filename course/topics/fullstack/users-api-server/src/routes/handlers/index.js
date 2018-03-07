const list = require('./list')
const create = require('./create')
const update = require('./update')
const _delete = require('./delete')
const retrieve = require('./retrieve')
const retrieveQuery = require('./retrieveQuery')
//...

module.exports = {
    list,
    create,
    update,
    delete: _delete,
    retrieve,
    retrieveQuery
}