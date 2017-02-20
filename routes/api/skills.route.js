const express   = require('express');
var router      = express.Router();
var controller  = require('../../controllers/skills.controller.js');

// GET all users
router.get('/', controller.getAllSkill)

// CREATE a user
router.post('/add', controller.createSkill)

// UPDATE a user
router.put('/:skill', controller.updateSkill)

// DELETE a user
router.delete('/:skill', controller.deleteSkill)

// router.put('/addbook/:id', controller.addBook)

module.exports = router;
