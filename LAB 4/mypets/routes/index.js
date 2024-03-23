// routes/index.js

var express = require('express');
var router = express.Router();

// Route for the home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// Route for the dog page
router.get('/dog', function(req, res, next) {
  res.render('dog', { title: 'Dog' });
});

// Route for the cat page
router.get('/cat', function(req, res, next) {
  res.render('cat', { title: 'Cat' });
});

// Route for the bird page
router.get('/bird', function(req, res, next) {
  res.render('bird', { title: 'Bird' });
});

// Route for the fish page
router.get('/fish', function(req, res, next) {
  res.render('fish', { title: 'Fish' });
});

module.exports = router;
