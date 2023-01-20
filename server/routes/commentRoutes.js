const router = require("express").Router();
const commentService = require("../service/commentService");

//get all comments
router.get("/", (req, res) => {
    commentService
        .getAllComments()
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
});

//get a comment by id
router.get("/:id", (req, res) => {
    commentService
        .getCommentById(req.params.id)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
});

//create a new comment
router.post("/create", (req, res) => {
    const body = req.body;
    commentService
        .createComment(body)
        .then((response) => {
            res.status(201).send(response);
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
});

//update comment
router.put("/update/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const option = { new: true };
    commentService
        .updateComment(id, body, option)
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            res.status(400).json({ error: "Failed to update comment" });
        });
});

//delete comment
router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    commentService
        .deleteCommentById(id)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(400).json({ error: "Failed to delete the comment" });
        });
});

//export router
module.exports = router;
