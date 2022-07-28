const mongoose = require('mongoose')
const supertest = require('supertest')

const app = require('../app')
const api = supertest(app)
const helper = require('./user_api_helper')

const User = require('../models/user')


beforeEach(async () => {
    await User.deleteMany({})
    const promises = helper.initialUsers.map(user => {
        return helper.saveUser(user)
    })
    await Promise.all(promises)

}, 10000)

test('getting valid user', async () => {
    const username = helper.initialUsers[0].username
    const user = await User.findOne({ username })
    const response = await api
        .get(`/api/users/${user._id.toString()}`)
        .expect(200)
    const userInfo = response.body
    expect(userInfo.followed).toHaveLength(helper.initialUsers[0].followed.length)
    expect(userInfo.articleCount).toBe(helper.initialUsers[0].articleCount)
})

test('creating a new user', async () => {
    const user = {
        username: 'unsimilar seal',
        password: 'original',
    }

    const response = await api
        .post('/api/users')
        .send(user)
        .expect(201)
    const returnedUser = response.body
    expect(returnedUser.username).toBe('unsimilar seal')
})

test('cannot create user with same username', async () => {
    const user = {
        username: 'best username',
        password: 'original',
    }
    await api
        .post('/api/users')
        .send(user)
        .expect(400)
})

test('update user info correctly', async () => {
    const userInfo = {
        username: 'best username',
        followed: ['https://newsite.com'],
        articleCount: 0
    }
    const response = await api
        .put('/api/users')
        .send(userInfo)
    const updatedUser = response.body
    expect(updatedUser.followed).toHaveLength(userInfo.followed.length)
    expect(updatedUser.followed).toContain(userInfo.followed[0])
    expect(updatedUser.articleCount).toBe(userInfo.articleCount)
})

test('missing or invalid username returns error', async () => {
    const badUsername = {
        username: 'not best username',
        password: 'best password',
        followed: [],
        articleCount: 0
    }
    const noUsername = {
        password: 'best password',
        followed: [],
        articleCount: 0
    }
    await api
        .put('/api/users')
        .send(badUsername)
        .expect(400)
    await api
        .put('/api/users')
        .send(noUsername)
        .expect(400)
})

afterAll(() => {
    mongoose.connection.close()
})