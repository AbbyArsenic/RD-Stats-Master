var db = require("../models");

module.exports = function(app) {

  // Route to get all skaters
  app.get("/api/referees", function(req, res) {
    db.referee.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  app.post("/api/referees", function(req, res) {
    console.log(req.body);
    var referee_name = req.body.username;
    var referee_email = req.body.email;
    var referee_password = req.body.password;
    var passwordMatch = req.body.passwordMatch;

    // Validation
    req.checkBody('username', 'Username field cannot be empty.').notEmpty();
    req.checkBody('username', 'Username must be between 4-15 characters long.').len(4, 15);
    req.checkBody('email', 'The email you entered is invalid, please try again.').isEmail();
    req.checkBody('email', 'Email address must be between 4-100 characters long, please try again.').len(4, 100);
    req.checkBody('password', 'Password must be between 8-100 characters long.').len(8, 100);
    req.checkBody("password", "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i");
    req.checkBody('passwordMatch', 'Password must be between 8-100 characters long.').len(8, 100);
    req.checkBody('passwordMatch', 'Passwords do not match, please try again.').equals(req.body.password);

    var errors = req.validationErrors();

    if (errors) {
      // console.log(`errors: ${JSON.stringify(errors)}`);
      res.render("register", {
        title: "Registration Error",
        errors: errors
      });
    }

    // bcrypt.hash(referee_password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    // db.query("INSERT INTO referees (referee_name, email, password) VALUES (?, ?, ?)", [referee_name, referee_email, hash], function(error, results, fields) {
    // db.Referee.create({
    // console.log(db.referees);
    // console.log(db);

    db.referee.create({
        referee_name: referee_name,
        referee_email: referee_email,
        referee_password: referee_password
      }).then(function(result) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(result);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

};

/* POST register page. */
// var bcrypt = require('bcrypt');
// var saltRounds = 10;

// passport.serializeUser(function(user, done) {
//   done(null, referee_id);
// });

// passport.deserializeUser(function(id, done) {
//   done(null, referee_id);
// });