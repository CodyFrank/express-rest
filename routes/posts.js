const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("Hello World")
})

router.get('/posts', (req, res) => {
    res.send("Posts")
})