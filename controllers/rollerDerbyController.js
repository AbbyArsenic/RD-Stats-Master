const express = require("express");

const router = express.Router();

var passport = require("passport");
var bcrypt = require('bcrypt');
var saltRounds = 10;

var db = require("../models/");

// This is the router.get line for authenication turned OFF
router.get("/league", function(req, res) {

  // This is the router.get line for authenticaion turned ON
  // router.get("/league", authenticationMiddleware(), function(req, res) {
  db.teams.findAll({})
    .then(function(teams) {
      res.render("league", {
        title: "League",
        team: teams
      });
    });
});

router.get("/team", function(req, res) {
  res.render("team", { title: 'Team' });
});

router.get("/register", function(req, res) {
  res.render("register", { title: 'Registration' });
});

router.get("/register", function(req, res) {
  res.render("register", { title: 'Registration' });
});

router.get("/login", function(req, res) {
  res.render("login", { title: 'Login' });
});


// -------API ROUTES--------- //
router.get("/api/teams", function(req, res) {
  db.teams.findAll({}).then(function(data) {
    res.json(data);
  });
});

router.get("/api/skaters", function(req, res) {
  db.skaters.findAll({}).then(function(data) {
    res.json(data);
  });
});

router.get("/api/skaters/team/:team_id", function(req, res) {
  db.skaters.findAll({
    where: {
      team_id: req.params.team_id
    }
  }).then(function(data) {
    res.json(data);
  });
});


// -------TEST ROUTES--------- //

// Find all skaters
router.get("/skaters", function(req, res) {
  db.skaters.findAll()
    .then(function(data) {
      res.render("test", { skater: data });
    });
});

// Find all skaters by team_id
router.get("/team-members/:team_id", function(req, res) {
  db.skaters.findAll({
    where: {
      team_id: req.params.team_id
    }
  }).then(function(data) {
    res.render("test", { skater: data });
  });
});

// Find a skater by skater_id
router.get("/skater/:skater_id", function(req, res) {
  db.skaters.findOne({
    where: {
      skater_id: req.params.skater_id
    }
  }).then(function(data) {
    console.log("\nSelected skater: ", data.get('skater_name'), "\n");
    res.render("test", { skater: data });
  });
});


// Any undefinted routes direct to home page
router.get("*", function(req, res) {
  res.render("index", { title: 'AZDD' });
});

// Referee Post Section

router.post('/login', passport.authenticate("local", {
  successRedirect: "/league",
  failureRedirect: "/login",
}));

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
            bcrypt.hash(referee_password, saltRounds, function(error, hash) {
              if (error) throw error;
              db.referee.create({
                  referee_name: referee_name,
                  referee_email: referee_email,
                  referee_password: hash
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
            })
          }
        }
      });
    }
  });
});

passport.serializeUser(function(referee_id, done) {
  done(null, referee_id);
});

passport.deserializeUser(function(referee_id, done) {
  done(null, referee_id);
});

function authenticationMiddleware() {
  return (req, res, next) => {
    console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);
    if (req.isAuthenticated()) return next();
    res.redirect('/login')
  }
}

module.exports = router;