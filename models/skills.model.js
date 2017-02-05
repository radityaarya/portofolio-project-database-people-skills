"use strict"

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var skillsSchema = new Schema({
  skill: {type: String, required: true, unique: true}
},
{
  timestamps: true
})

var Skills = mongoose.model('Skills', skillsSchema)

module.exports = Skills;
