"use strict"

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  username : {type: String, required: true},
  skills    : [{
      skill  : {type: Schema.Types.ObjectId, ref: 'Skills'},
      score  : Number
  }]
},
{
  timestamps: true
})

var Users = mongoose.model('Users', usersSchema)

module.exports = Users;
