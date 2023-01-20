const router = require('express').Router();
const userService = require('../service/userService');

//get all users
router.get('/', (req, res) => {
    userService.getAllUser().then((response) => {
        res.status(200).send(response);
    }).catch((error) => {
        res.status(500).json({ error: error.message });
    })
});

//get a users by id
router.get('/:id', (req, res) => {
    userService.getUserById(req.params.id).then((response => {
        res.status(200).send(response);
    })).catch((error) => {
        res.status(500).json({ error: error.message });
    })
});

//create a new user
router.post('/register', (req, res) => {
    const body = req.body;
    userService.createUser(body).then((response) => {
        res.status(201).send(response);
    }).catch((error) => {
        res.status(500).json({ error: error.message });
    })
});

//update a user
router.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const option = { new: true };
    userService.updateUser(id, body, option).then((response) => {
        res.send(response);
    }).catch((error) => {
        res.status(400).json({ error: " Unable to update with username " + body.username });
    })
});

//delete a user
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    userService.deleteUserById(id).then((response) => {
        res.send(response)
    }).catch((error) => {
        res.status(400).json({ error: " Unable to delete with user id: " + id });
    })
});

//Authenticate a user
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    userService.loginUser(username, password).then((response) => {
        res.status(200).send({
            success: 'You are successfully logged in',
            username: response.username,
            _id: response.id
        })
    }).catch((error) => {
        res.status(400).json({ error: error.message });
    })
});

//export router
module.exports = router;