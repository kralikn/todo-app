const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
let User = require('../models/user');

// welcome and login
router.get('/', (req, res) => res.send('login'));

// register
router.post('/register', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const todos = req.body.todos;

  // const check = /\S+@\S+\.\S+/;

  if(
    username && 
    username.length > 3 &&
    email && 
    /\S+@\S+\.\S+/.test(email) &&
    password &&
    password.length > 5) {
      
      const newUser = new User({
        username,
        email,
        password,
        todos,
      });

       bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(() => res.json('User added!'))
              .catch(err => res.status(400).json('Error: ' + err));
          });
        });
    
      // newUser.save()
      //   .then(() => res.json('User added!'))
      //   .catch(err => res.status(400).json('Error: ' + err));
    }
});



module.exports = router;