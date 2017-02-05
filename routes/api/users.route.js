const express   = require('express');
var router      = express.Router();
var controller  = require('../../controllers/users.controller.js');

// GET all users
router.get('/show', controller.getAllUser)

// CREATE a user
router.post('/add', controller.createUser)

// DELETE a user
router.delete('/:username', controller.deleteUser)

module.exports = router;
