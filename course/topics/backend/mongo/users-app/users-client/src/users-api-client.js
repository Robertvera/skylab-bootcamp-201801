const axios = require('axios')

const URL = 'http://localhost:5000/api'

function postReq (path, user) {
    return axios.post(path, user)
}

const userApi = {
    createUser: function(user) {
        return postReq(`${URL}/users`, user)
    }
}

module.exports = {userApi}