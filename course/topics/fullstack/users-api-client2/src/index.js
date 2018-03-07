/**
 * Users API client.
 *
 * @version 1.0.0
 */

const axios = require('axios');
const protocol = process.env.REACT_APP_API_PROTOCOL
const host = process.env.REACT_APP_API_HOST
const port = process.env.REACT_APP_API_PORT


const URL = `${protocol}://${host}:${port}/api`

function getReq (path) {
    return axios.get(path)
}

function postReq (path, name, surname, email, username, password) {
    return axios.post(path, { name, surname, email, username, password })
}

function putReq (path, name, surname, email, username, password, newUsername, newPassword) {
    return axios.put(path, {name, surname, email, username, password, newUsername, newPassword})
}

function deleteReq (path, username, password) {
    return axios.delete(path, {username, password})
}

const usersApi = {
    
    getUsers: function () {
        return getReq(`${URL}/users`)
    },
    getUsersSearch: function (query) {
        return getReq(`${URL}/users/${query}`)        
    },
    createUser: function (name, surname, email, username, password) {
        return postReq(`${URL}/user`)
    },
    editUser: function (id, name, surname, email, username, password, newUsername, newPassword) {
        return putReq(`${URL}/user/${id}`)
    },
    deleteUser: function (id, username, password) {
        return deleteReq(`${URL}/user/${id}`)
    },
    getOneUser: function(id) {
        return getReq(`${URL}/user/${id}`)
    }
}

module.exports = {usersApi}