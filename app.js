const express = require('express')

const app = express()

const mongoose = require('mongoose')

require('dotenv/config')

// routes -----------

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/posts', (req, res) => {
    res.send('Posts')
})

// connect to db 

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, console.log("connected to db"))

// listen to server

app.listen(3000)