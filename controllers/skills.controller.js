const skill  = require('../models/skills.model');

module.exports = {

  //GET all skills
  getAllSkill : function (req, res) {
    skill.find( {},{
      __v: false
    },
    (err, data) =>{ res.json(data) } )
  },

  // CREATE a skill
  createSkill : function (req, res) {
    skill.findOne( {skill : req.body.skill}, (err, data) =>{
      if(data) res.json({err: "Skill already taken!"})
      else{
        skill.create({
          skill: req.body.skill,
        })
        .then(function(data) {
          res.send({
            message : `New skill has been created. You can add skill '${data.skill}' to any users now!`,
            skill   : data.skill
          })
        })
      }
  })
},

  // UPDATE skill
  updateSkill : function (req, res) {
    skill.findOneAndUpdate({skill: req.params.skill}, req.body, {new: true})
    .then( (data) =>{
      res.send({
        message   : `skill ${req.params.skill} has been changed to ${data.skill}`,
        skills    : data.skill
      })
    })
  },

  // DELETE skill
  deleteSkill : function(req,res){
    skill.findOneAndRemove( {skill: req.params.skill}, function(err){
      res.send(`skill ${req.params.skill} has been removed`)
    })
  }
}
