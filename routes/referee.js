var express = require("express");

var router = express.Router();

// router.get("/register", function(req, res) {
//   res.render("register", { title: 'Registration' });
// });
// !! Referee Section !!

// var passport = require('passport');
// var bcrypt = require('bcrypt');
// var saltRounds = 10;

// Import the model (referee.js) to use its database functions.
var db = require("../models");

// router.post('/register', function(req, res) {
router.post('/register', function(req, res, next) {

  var referee_name = req.body.username;
  var referee_email = req.body.email;
  var referee_password = req.body.password;
  var passwordMatch = req.body.passwordMatch;

  db.referee.findAll({
    where: {
      referee_name: referee_name
    }
  }).then(function(data) {
    if (data.length > 0) {

      var nameError = [{ "msg": "User name already exists." }];
      res.render("register", {
        title: "Registration Error",
        errors: nameError
      });

    } else {
      db.referee.findAll({
        where: {
          referee_email: referee_email
        }
      }).then(function(data) {
        if (data.length > 0) {

          var emailError = [{ "msg": "User email already exists." }];
          res.render("register", {
            title: "Registration Error",
            errors: emailError
          });
        } else {
          req.checkBody('username', 'Username field cannot be empty.').notEmpty();
          req.checkBody('username', 'Username must be between 4-15 characters long.').len(4, 15);
          req.checkBody('email', 'The email you entered is invalid, please try again.').isEmail();
          req.checkBody('email', 'Email address must be between 4-100 characters long, please try again.').len(4, 100);
          req.checkBody('password', 'Password must be between 8-100 characters long.').len(8, 100);
          req.checkBody("password", "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i");
          req.checkBody('passwordMatch', 'Passwords do not match, please try again.').equals(req.body.password);

          // Handling of errors related to validation structure
          var errors = req.validationErrors();

          if (errors) {
            res.render("register", {
              title: "Registration Error",
              errors: errors
            });
          } else {
            db.referee.create({
                referee_name: referee_name,
                referee_email: referee_email,
                referee_password: referee_password
              }).then(function(result) {
                var newUser = [{ "msg": "Thank you for creating a new user.  Please login below." }];
                res.render("login", {
                  title: "New User",
                  newUser: newUser
                });
              })
              .catch(function(err) {
                res.json(err);
              });
          }
        }
      });

      // bcrypt.hash(referee_password, saltRounds, function(err, hash) {
      // Store hash in your password DB.
      // db.query("INSERT INTO referees (referee_name, email, password) VALUES (?, ?, ?)", [referee_name, referee_email, hash], function(error, results, fields) {
      // db.Referee.create({
      // console.log(db.referees);
      // console.log(db);
    }
  });
});


module.exports = router;