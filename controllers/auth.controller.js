const mongoose = require('mongoose');
const User = require('../models/User.model')


module.exports.register = (req, res, next) => {
    res.render('auth/register');
  }

module.exports.doRegister = (req,res,next) => {
    const user = {username, email, password} = req.body

    User.create(user)
        .then(user => res.redirect('/'))
        .catch(error => {
          console.log(error)
          if (error instanceof mongoose.Error.ValidationError) {
            res.render('auth/register', {
              errors: error.errors,
              user: user
            })
          } if (error) {

          } else {
            next(error)
          }

        })
}