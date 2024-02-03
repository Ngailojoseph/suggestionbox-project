const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Import the registration form schema
const Registration = require('./models/Registration');

// Register route
app.get('/register', (req, res) => {
  res.render('register');
});

// Handle the registration form submission
app.post('/register', (req, res) => {
  const { username, useremail, userdepartment, userpassword } = req.body;

  // Create a new registration form document
  const registration = new Registration({
    username,
    useremail,
    userdepartment,
    userpassword,
  });

  // Save the registration form document to the database
  registration.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error registering user');
    } else {
      res.redirect('/login');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});