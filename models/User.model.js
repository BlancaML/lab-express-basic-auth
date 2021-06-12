const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EMAIL_PATTERN = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PASSWORD_PATTERN = /^.{8,}$/i;
// TODO: Please make sure you edit the user model to whatever makes sense in this case

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: 'username is required',
    minLength: [4, 'username needs at least 4 characters']
  },

  email: {
    type: String,
    unique: true,
    required: 'email is required',
    match: [EMAIL_PATTERN]
    
  },

  password: {
    type: String,
    unique: true,
    required: 'password is required',
    match: [PASSWORD_PATTERN, 'password needs at least 8 chars']
  },
  
});

const User = mongoose.model('User', userSchema);
module.exports = User;
