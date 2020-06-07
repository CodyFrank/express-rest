const express = require('express')
const router = express.Router()
const Post = require('../models/Posts')



router.get("/", (req, res) => {
    res.send("posts")
})

router.post("/", (req, res) => {
    const post = new Post(
        {
            title: req.body.title,
            content: req.body.content
        }
    )

    post.save()
    .then(data => res.json(data))
    .catch(err => res.json(err))
})


module.exports = router