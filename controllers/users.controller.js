const user  = require('../models/users.model');

module.exports = {

  // GET all users
  getAllUser : function (req, res) {
    user.find( {},{
      __v: false
    },
    (err, data) =>{ res.json(data) } )
  },

  // CREATE a user
  createUser : function (req, res) {
    user.create({
      username: req.body.username,
      skill: []
    })
    .then(function(data) {
      res.send({
        message : 'New user has been created. You can add skills now!',
        username: data.username,
        skill   : data.skill
      })
    })
  },

  updateUser : function (req, res) {
    user.findOneAndUpdate({username: req.params.username}, req.body, {new: true})
    .then( (data) =>{
      res.send({
        message   : `player ${req.params.username} has been updated`,
        username  : data.username,
        skills    : data.skill
      })
    })
  },

  // DELETE a user
  deleteUser : function(req,res){
    user.findOneAndRemove( {username: req.params.username}, function(err){
      res.send(`User ${req.params.username} has been removed`)
    })
  }
}
