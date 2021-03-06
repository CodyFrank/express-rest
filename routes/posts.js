const express = require('express')
const router = express.Router()
const Post = require('../models/Posts')


// posts index 
router.get("/", (req, res) => {
    Post.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

// posts create
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

// posts show
router.get("/:id", (req, res) => {
    Post.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json({errormessage: (err)}))
})

// post delete
router.delete("/:id", (req, res) => {
    Post.remove({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(err => res.json({ errormessage: (err) }))
})

// post update
router.patch("/:id", (req, res) => {
    const post = Post.findById(req.params.id)
    if (Object.keys(req.body).includes("title")) {
        Post.updateOne({ _id: req.params.id },
            {
                $set : { 
                    title: req.body.title
                }
        })
        .then(data => res.json(data))
        .catch(err => res.json({ errormessage: (err)}))
    }
    
    if ( Object.keys(req.body).includes("content")) {
        Post.updateOne({ _id: req.params.id },
            {
                $set : { 
                    content: req.body.content
                }
        })
        .then(data => res.json(data))
        .catch(err => res.json({ errormessage: (err)}))
    }
})


module.exports = router