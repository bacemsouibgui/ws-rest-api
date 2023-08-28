const mongoose = require('mongoose');

const Schema= mongoose.Schema

const UserSchema= new Schema({
  name: {
    type: String,
    require: true
  },
  
  age: {
    type: Number,
    require: true
  },
  phone: {
    type: Number,
    require: true
  },

  email: {
    type: String,
    require: true

  }
});

module.exports= mongoose.model('User', UserSchema)
