const router = require('express').Router();
const postService = require('../service/postService');

//get all posts
router.get('/', (req, res) => {
    postService.getAllPosts().then((response) => {
        res.status(200).send(response);
    }).catch((error) => {
        res.status(500).json({ error: error.message });
    })
});

//get a posts by id
router.get('/:id', (req, res) => {
    postService.gePostById(req.params.id).then((response => {
        res.status(200).send(response);
    })).catch((error) => {
        res.status(500).json({ error: error.message });
    })
});

//create a new psot
router.post('/create', (req, res) => {
    const body = req.body;
    postService.createPost(body).then((response) => {
        res.status(201).send(response);
    }).catch((error) => {
        res.status(500).json({ error: error.message });
    })
});

//update a post
router.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const option = { new: true };
    postService.updatePost(id, body, option).then((response) => {
        res.send(response);
    }).catch((error) => {
        res.status(400).json({ error: 'Failed to update post' });
    })
});

//delete post
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    postService.deletePostById(id).then((response) => {
        res.status(200).send(response);
    }).catch((error) => {
        res.status(400).json({ error: " Failed to delete the post" });
    })
});

//export router
module.exports = router;