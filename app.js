const express = require('express')

const app = express()

const mongoose = require('mongoose')

require('dotenv/config')

// import routes
const postsRoute = require('./routes/posts')

// middleware
app.use('/posts', postsRoute)

// home route
app.get("/", (req, res) => {
    res.send("Hello World")
})

// connect to db 

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, console.log("connected to db"))

// listen to server

app.listen(3000)