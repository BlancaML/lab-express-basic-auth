const mongoose = require('mongoose');
const User = require('../models/User.model')


module.exports.register = (req, res, next) => {
    res.render('auth/register');
  }

module.exports.doRegister = (req,res,next) => {
    User.findOne({ email: req.body.email})
      .then((user) => {
        if (user) {
            res.render('auth/register', {
              user: req.body,
              errors: {
                email: 'Ups! this email is not valid'
              }
            })
        } else {
          user = { username, email, password} = req.body;
          return User.create(user)
             .then(user => res.redirect('/'))
        }
      })
      .catch(error => {
        if( error instanceof mongoose.Error.ValidationError) {
          res.render('auth/register', {
            user: req.body,
            errors: errors
          })
        } else {
          next(error)
        }
      })
}