const user  = require('../models/users.model');

module.exports = {

  // GET all users
  // getAllUser : function (req, res) {
  //   user.find( {},{
  //     __v: false
  //   },
  //   (err, data) =>{ res.json(data) } )
  // },

  getAllUser : (req, res) => {
    user.find({})
    .populate('skills.skill')
    .exec( (err,data) => {
      if(err) return handleError(err)
      res.json(data)
    })
  },

  createUser : (req, res) => {
    user.findOne( {username : req.body.username}, (err, data) =>{
      // FIND if username already taken or not
      if(data) res.json({err: "Username already taken!"})
      // if username available, then ..
      else{
        let newUser = user({
          username: req.body.username
        })
        newUser.save((err,data) => {
          console.log(data);
          res.json(data)
        })
      }
    })
  },

  addSkill: function (req, res) {
    user.findOne({ username: req.params.username })
        .populate('skills.skill')
        .exec(function (err, data) {
          if (err) return handleError(err)
          var skillArr = []
          for (var i = 0; i < data.skills.length; i++) {
            skillArr[skillArr.length] = String(data.skills[i].skill._id)
          }
          if (skillArr.indexOf(req.body.skillId) == -1) {
            user.findOneAndUpdate(
              { username: req.params.username},
              { $push: {
                  skills: { skill: req.body.skillId, score: req.body.score }
                }
              },
              {safe: true, upsert: true, new: true},
              function (err, data) {
                if (err) throw err
                res.json(data)
              }
            )
          }else {
            res.json('skill already taken')
          }
        })
  },

  // UPDATE a user
  updateUser : function (req, res) {
    user.findOneAndUpdate({username: req.params.username}, req.body, {new: true})
    .then( (data) =>{
      res.send({
        message   : `player ${req.params.username} has been updated`,
        username  : data.username,
      })
    })
  },

  // DELETE a user
  deleteUser : function(req,res){
    user.findOneAndRemove( {username: req.params.username}, function(err){
      res.send(`User ${req.params.username} has been removed`)
    })
  },
  //
  // // ADD SKILL to USER
  // addSkill : function(req,res){
  // user.update(
  //     { _id: req.params.id },
  //     { $push:
  //       {  skill:
  //           { name : req.body.names,
  //             score : req.body.score           }
  //       }
  //     },
  //     {upsert: true})
  //     .then( function(data) {
  //       console.log(data);
  //       res.send({
  //         message : `Skill has been added`,
  //         data   : data
  //       })
  //     })
  // }

  // // DELETE BOOK
  // deleteBook : function (req, res) {
  //   Transactions.update(
  //     {_id: req.params.id},
  //     {$pull:
  //       {   booklist:
  //           { bookid : req.body.bookid,
  //             qty: req.body.qty
  //           }
  //       }
  //     },
  //     {upsert: true}).then( function(data){
  //       res.send(data)
  //     })
  // },
}
