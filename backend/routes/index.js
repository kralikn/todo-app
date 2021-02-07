const express = require('express');
const router = express.Router();
let User = require('../models/user');

// welcome and login
router.get('/', (req, res) => res.send('login'));

// register
router.post('/register', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const todos = req.body.todos;

  const newUser = new User({
    username,
    email,
    password,
    todos,
  });

  newUser.save()
  .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;