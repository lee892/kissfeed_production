const loginRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')

loginRouter.post('/', async (req,res) => {
    const {username, password} = req.body

    //check the user's email in DB
    const user = await User.findOne({username})
    //if no user found
    const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(password, user.passwordHash)

    if (!(user && passwordCorrect)) {
        return res.status(401).json({
            error: 'invalid username or password'
        })
    }
    const userForToken = {
        username: user.username,
        id: user._id
    }
    const token = jwt.sign(
        userForToken,
        config.SECRET,
        { expiresIn: 60*60 }
    )

    //correct login details
    res.status(200).json({ token, username: user.username, id: user._id.toString() })

})

module.exports = loginRouter
