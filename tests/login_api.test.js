const mongoose = require('mongoose')
const supertest = require('supertest')

const User = require('../models/user')

const app = require('../app')
const api = supertest(app)

test('login returns correct info', async () => {
    await User.deleteMany({})
    const user = {
        username: 'minwoolee',
        password: 'password'
    }
    await api
        .post('/api/users')
        .send(user)

    const response = await api
        .post('/api/login')
        .send(user)
    const token = response.body
    console.log(token)
    expect(token.token).toBeDefined()
    expect(token.username).toBeDefined()
    expect(token.id).toBeDefined()
    expect(token.username).toBe('minwoolee')
})

test('user with no username and nonexisting user returns error', async () => {
    await User.deleteMany({})
    const nonExisting = {
        username: 'minwoolee',
        password: 'password'
    }
    const noUsername = {
        password: 'password'
    }

    await api
        .post('/api/login')
        .send(nonExisting)
        .expect(401)

    await api
        .post('/api/login')
        .send(noUsername)
        .expect(401)
})

afterAll(() => {
    mongoose.connection.close()
})