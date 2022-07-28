const bcrypt = require('bcrypt')
const User = require('../models/user')

const initialUsers = [
    {
        username: 'best username',
        password: 'best password',
        followed: ['https://cbsnews.com', 'https://nbcnews.com'],
        articleCount: 4
    },
    {
        username: 'next best username',
        password: 'next best password',
        followed: ['https://usatoday.com', 'https://npr.org'],
        articleCount: 1
    }
]

const saveUser = async (userInfo) => {
    const passwordHash = await bcrypt.hash(userInfo.password, 10)
    const user = new User({
        username: userInfo.username,
        followed: userInfo.followed,
        articleCount: userInfo.articleCount,
        passwordHash
    })
    return user.save()
}

module.exports = {
    initialUsers,
    saveUser
}