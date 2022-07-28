const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./article_api_helper')
const app = require('../app')
const api = supertest(app)

const Article = require('../models/article')
const User = require('../models/user')
const getUserToken = require('./get_user_helper')

beforeEach(async () => {
    await Article.deleteMany({})
    const promises = helper.initialArticles.map(article => {
        const newArticle = new Article(article)
        return newArticle.save()
    })
    await Promise.all(promises)

}, 10000)

test('articles returned as json', async () => {
    await api
        .get('/api/articles')
        .expect(200)
        .expect('Content-Type', /application\/json/)
}, 10000)

test('all articles are returned', async () => {
    const response = await api.get('/api/articles')

    expect(response.body).toHaveLength(helper.initialArticles.length)
}, 10000)

test('a specific article found', async () => {
    const response = await api.get('/api/articles')

    const titles = response.body.map(r => r.title)

    expect(titles).toContain(
        'sample title'
    )
})

test('a valid article is added', async () => {
    const newArticle = [{
        title: 'title',
        author: 'author',
        source: 'source',
        link: 'link',
        text: 'text',
        image: 'image'
    }]

    await api
        .post('/api/articles')
        .send(newArticle)
        .expect(201)
        .expect('Content-Type', /application\/json/)
    const articlesAtEnd = await helper.articlesInDb()
    expect(articlesAtEnd).toHaveLength(helper.initialArticles.length + 1)

    const links = articlesAtEnd.map(n => n.link)
    expect(links).toContain(
        'link'
    )
})

test('article without source or link or title is not added', async () => {
    const newArticle = [{
        author: 'author',
        source: 'source',
        text: 'text',
        image: 'image'
    }]

    await api
        .post('/api/articles')
        .send(newArticle)
        .expect(400)

    const articlesAtEnd = await helper.articlesInDb()

    expect(articlesAtEnd).toHaveLength(helper.initialArticles.length)
})

test('get a user\'s favorited articles', async () => {
    const article = await Article.findOne({})
    const title = article.title
    const user = {
        username: 'minwoowee',
        password: 'sekret',
        followed: ['www.org', 'pbs', 'usa'],
        articleCount: 3,
        favorites: [article._id.toString()]
    }
    const token = await getUserToken(api, user)
    const response = await api
        .get('/api/articles/favorites')
        .set({Authorization: token})
        .expect(200)

    const titles = response.body.map(fav => fav.title)
    expect(titles).toContain(title)
})

test('favoriting an article updates user info', async () => {
    const user = {
        username: 'minwoowee',
        password: 'sekret',
        followed: ['www.org', 'pbs', 'usa'],
        articleCount: 3,
        favorites: []
    }
    const token = await getUserToken(api, user)
    const article = await Article.findOne({})
    const articleId = article._id.toString()
    const articleInfo = {
        title: article.title,
        author: article.author,
        image: article.image,
        text: article.text,
        source: article.source,
        link: article.link,
        users: []
    }

    const response = await api
        .put(`/api/articles/${articleId}`)
        .send(articleInfo)
        .set({Authorization: token})
    const newArticle = response.body
    const userIds = newArticle.users.map(id => id.toString())
    const newUser = await User.findOne({username: user.username})
    expect(userIds).toContain(newUser._id.toString())
    const articleIds = newUser.favorites.map(id => id.toString())
    expect(articleIds).toContain(articleId)
})

test('incorrect article id results in error', async () => {
    const user = {
        username: 'minwoowee',
        password: 'sekret',
        followed: ['www.org', 'pbs', 'usa'],
        articleCount: 3,
        favorites: []
    }
    const articleInfo = {
        source: 'source',
        link: 'link',
        title: 'title',
        users: []
    }
    const token = await getUserToken(api, user)
    const invalidId = await helper.nonExistingId()
    await api
        .put(`/api/articles/${invalidId}`)
        .send(articleInfo)
        .set({Authorization: token})
        .expect(400)
})

afterAll(() => {
    mongoose.connection.close()
})