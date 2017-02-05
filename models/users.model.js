"use strict"

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  username : {type: String, required: true},
  skill   : [{
      skillsId  : {type: Schema.Types.ObjectId, ref: 'Skills'},
      score     : {type: Number, max: 5}
  }]
},
{
  timestamps: true
})

var Users = mongoose.model('Users', usersSchema)

module.exports = Users;
