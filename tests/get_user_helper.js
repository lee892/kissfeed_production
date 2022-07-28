const User = require('../models/user')
const bcrypt = require('bcrypt')

const getUserToken = async (api, user) => {
    await User.deleteMany({})
    const passwordHash = await bcrypt.hash(user.password, 10)
    const testUser = new User({
        username: user.username,
        passwordHash,
        followed: user.followed,
        articleCount: user.articleCount,
        favorites: user.favorites
    })
    await testUser.save()
    const response = await api.post('/api/login').send({
        username: user.username,
        password: user.password
    })
    return `bearer ${response.body.token}`
}

module.exports = getUserToken