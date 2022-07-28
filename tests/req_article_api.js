// const mongoose = require('mongoose')
// const supertest = require('supertest')
// const app = require('../app')
// const api = supertest(app)


// test('valid request returns correct amount of articles', async () => {
//     const info = {
//         urls: [
//             'https://www.cbsnews.com',
//             'https://www.usatoday.com'
//         ],
//         limit: 2
//     }

//     const response = await api
//         .post('/articles')
//         .send(info)
//         .expect(200)
//     const articles = response.body
//     expect(articles).toHaveLength(4)
//     const first = articles[0]
//     expect(first.source).toBeDefined()
//     expect(first.link).toBeDefined()
//     expect(first.title).toBeDefined()
//     expect(first.author).toBeDefined()
//     expect(first.text).toBeDefined()
//     expect(first.image).toBeDefined()
// }, 10000)



// afterAll(() => {
//     mongoose.connection.close()
// })