/**
 * Users API client.
 *
 * @version 1.0.0
 */

const axios = require('axios');


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
    _url() {
        return `${this.protocol}://${this.host}:${this.port}/api`
    },
    
    getUsers: function () {
        return getReq(`${this._url()}/users`)
    },
    getUsersSearch: function (query) {
        return getReq(`${this._url()}/users/${query}`)        
    },
    createUser: function (name, surname, email, username, password) {
        return postReq(`${this._url()}/user`)
    },
    editUser: function (id, name, surname, email, username, password, newUsername, newPassword) {
        return putReq(`${this._url()}/user/${id}`)
    },
    deleteUser: function (id, username, password) {
        return deleteReq(`${this._url()}/user/${id}`)
    },
    getOneUser: function(id) {
        return getReq(`${this._url()}/user/${id}`)
    }
}

module.exports = usersApi