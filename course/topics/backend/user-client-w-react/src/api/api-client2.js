const api = require('users-api-client2')

api.protocol = process.env.REACT_APP_API_PROTOCOL
api.host = process.env.REACT_APP_API_HOST
api.port = process.env.REACT_APP_API_PORT

console.log(api)

module.exports = api