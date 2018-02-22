const express = require('express')
const bodyParser = require('body-parser')

const app = express()
let usersArray = []

app.use(bodyParser({urlencoded: false}))

app.post(('/api/users'), (req,res) => {
    
    const user = {
        username: req.body.username,
        password: req.body.password
    }

    res.json(user)
    usersArray = [...usersArray, user]

    if (usersArray.includes(user.username)) {
        const reply = {
            status: 'KO',
            message: 'Cannot register user',
            error: 'user already exists'
        }
    } else {
        const reply = {
            status: 'OK',
            message: 'User registered successfully'            
        }
    }
    
    res.json(reply)

    console.log(usersArray)    
    console.log(reply)
})





const port = process.argv[2]

app.listen(port, () => console.log(`Server running on port ${port}`))