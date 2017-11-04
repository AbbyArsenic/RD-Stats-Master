var express = require('express');
var router = express.Router();

var expressValidator = require('express-validator');
var passport = require('passport');

var bcrypt = require('bcrypt');
var saltRounds = 10;

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Registration' });
});