const userData = require('../data/userData')

const userLogic = {
    create(user) {
        userData.create(user)
    }
}

module.exports = userLogic