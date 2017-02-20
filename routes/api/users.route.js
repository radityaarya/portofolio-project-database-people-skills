const express   = require('express');
var router      = express.Router();
var controller  = require('../../controllers/users.controller.js');

// GET all users
router.get('/', controller.getAllUser)

// CREATE a user
router.post('/add', controller.createUser)

// UPDATE a user
router.put('/:username', controller.updateUser)

// DELETE a user
router.delete('/:username', controller.deleteUser)

// ADD Skill to user
router.put('/addskill/:username', controller.addSkill)

module.exports = router;
