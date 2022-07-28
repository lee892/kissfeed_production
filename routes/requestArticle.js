
const requestArticle = require('express').Router()
const getData = require('../services/requestArticle.js')


requestArticle.post('/', async (req, res) => {
    const { urls, limit } = req.body
    if (!urls || !limit) {
        res.status(400).json({ error: 'urls or article count missing' })
    }
    const data = await getData({ urls, limit })
    console.log(data)
    res.send(data.flat())
})


module.exports = requestArticle