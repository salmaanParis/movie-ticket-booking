var express = require('express');
var router = express.Router();

// GET login page
router.get('/admin/login', function(req, res, next) {
  res.render('admin-login', { title: 'Admin Login' });
});

// GET forgot password page
router.get('/admin/forgot-password', function(req, res, next) {
  res.render('admin-forgotpass', { title: 'Forgot Password' });
});

// GET new password page (this should be accessed with a valid token)
router.get('/admin/reset-password/:token', function(req, res, next) {
  res.render('admin-resetpass', { title: 'Set New Password', token: req.params.token });
});

// POST request to handle password reset request
router.post('/admin/reset-password', function(req, res, next) {
  // This route would typically handle sending a reset link to the user's email
  // Redirect or respond after handling the request
  res.redirect('/admin/login');
});

// POST request to set a new password
router.post('/admin/set-new-password', function(req, res, next) {
  // This route would typically handle setting the new password after validating the token
  // Redirect or respond after handling the request
  res.redirect('/admin/login');
});

module.exports = router;

